import { Injectable, Input } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ValueTransformer } from '@angular/compiler/src/util';
import { of, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  allemployee: any = [];
  startIndex = 0;

  private userDoc: AngularFirestoreDocument<any>;
  constructor(private afs: AngularFirestore) { }
   newEmployeeSalary(value: any) {
     const employeeDocRef = this.afs.collection('employees').doc(value.empid);
     const hra = parseInt(value.basicpay, 10) * 0.5;
     const medallow = parseInt(value.basicpay, 10) * 0.4;
     const cedallow = parseInt(value.basicpay, 10) * 0.3;
     const speallow = parseInt(value.basicpay, 10) * 0.2;
    employeeDocRef.
    set({
         'empid': value.empid,
        'empname': value.empname,
        'basicpay': value.basicpay,
         'hra': hra,
        'speallow': speallow,
        'medallow': medallow,
        'cedallow': cedallow,
        'total': ''
    });
    return true;
}

moreEmployeeSalary(more: any, date: Date) {
    const date1 = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const docRef =  this.afs.collection('payroll').doc(more.empid);
    const employeeDocRef = docRef.collection(year.toString()).ref.doc(month.toString());
    const updatetotal = parseInt(more.basicpay, 10) + parseInt(more.hra, 10) + parseInt(more.speallow, 10) +
    parseInt(more.medallow, 10) + parseInt(more.cedallow, 10) + parseInt(more.conallow, 10) + parseInt(more.bonus, 10) +
    parseInt(more.arrears, 10) + parseInt(more.gwp, 10) - parseInt(more.esi, 10) - parseInt(more.advance, 10) -
    parseInt(more.it, 10) - parseInt(more.others, 10) - parseInt(more.totded, 10) + parseInt(more.wwf, 10) - parseInt(more.lop, 10);
    employeeDocRef.
    set({
        'empid': more.empid,
        'name': more.empname,
        'join_date': more.join_date,
        'basicpay': parseInt(more.basicpay, 10),
        'hra': parseInt(more.hra, 10),
        'speallow': parseInt(more.speallow, 10),
        'medallow': parseInt(more.medallow, 10),
        'cedallow': parseInt(more.cedallow, 10),
        'conallow': parseInt(more.conallow, 10),
        'bonus': parseInt(more.bonus, 10),
        'arrears': parseInt(more.arrears, 10),
        'gwp': parseInt(more.gwp, 10),
        'esi': parseInt(more.esi, 10),
        'wwf': parseInt(more.wwf, 10),
        'advance': parseInt(more.advance, 10),
        'it': parseInt(more.it, 10),
        'others': parseInt(more.others, 10),
        'totded': parseInt(more.totded, 10),
        'total': updatetotal,
        'lop': parseInt(more.lop, 10),
        'day': date1,
    });

    docRef.update({
        'total': updatetotal
    });
}

moreEmpFill(id: string) {

        this.userDoc = this.afs.collection('payroll').doc(id);
        let data: any;
        data = this.userDoc.valueChanges();
        return data;
}

getPayrollDetails() {
    this.afs.collection('employees').valueChanges().subscribe(data => {
    data.forEach(val => {
        this.afs.collection('payroll').doc(val['emp_id']).set({
            'empid': val['emp_id'],
            'name': val['name'],
            'join_date': val['joining_date'],
            'basicpay': val['basicpay'],
            'hra': val['hra'],
            'speallow': val['speallow'],
            'medallow': val['medallow'],
            'cedallow': val['cedallow'],
            'total': val['total'],
            'conallow': val['conallow'],
        });
    });
    });

    return this.afs.collection('payroll').snapshotChanges();
}
getAllPayroll(value: any, date: Date) {
    const date1 = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const id = value;
    this.userDoc = this.afs.collection('payroll').doc(id).collection(year.toString()).doc(month.toString());
    let data: any;
    data = this.userDoc.valueChanges();
    return data;
}

accountStatement(date: Date) {
    date = new Date(date);
    const month = date.getMonth();
    const year = date.getFullYear();
    const data:  any = [];
    this.afs.collection('payroll').valueChanges().subscribe(
        d => {
            d.forEach(val => {
                 this.afs.collection('payroll').doc(val['empid']).collection(year.toString())
                .doc(month.toString()).valueChanges().subscribe(value => {
                    data.push(value);
                });
            });
        });
    return of(data);
}
salarySlipFill(id: string, month, year) {
    month = month - 1;
    this.userDoc = this.afs.collection('payroll').doc(id).collection(year.toString()).doc(month.toString());
    let data: any;
    data = this.userDoc.valueChanges();
    return data;
}

formatDate(d: Date) {
    const date = new Date(d);
    let month = date.getMonth();
    month = month + 1;
    const year = date.getFullYear();
    const day = month + '/' + year;
    return day;
}

getEmployeeName() {
    const col = this.afs.collection('payroll');
    let data: any;
    data = col.valueChanges();
    return data;
}
dateToString(date) {
    const day = date.getDate();
    let month = date.getMonth();
    month = month + 1;
    const year = date.getFullYear();
    date = month + '/' + year;
    return date;
}

addExemption(form: any, empid) {
  const employeeDocRef = this.afs.collection('tds').doc(empid);
  employeeDocRef.
     set({
         'exemption': form.exem,
         'lee': form.lee,
         'gex': form.gex,
         'totrent': form.totrent,
         'tothra': form.tothra,
         'b40': form.b40,
         'exrent': form.exrent,
         'hraex': form.hraex,
         'lta': form.lta,
     });
  }
  addPerquisite(form: any, empid) {
    const employeeDocRef = this.afs.collection('tds').doc(empid);
    employeeDocRef.
       update({
            'vehper': form.vehper,
            'hoper': form.hoper,
            'assres': form.assres,
            'loanper': form.loanper,
       });
    }
    addHousePropertyIncome(form: any, empid) {
      const employeeDocRef = this.afs.collection('tds').doc(empid);
      employeeDocRef.
         update({
            'tihp': form.tihp,
            'ihlso': form.ihlso,
            'tilop': form.tilop,
            'totexem' : form.exem,
            'totilop': form.totilop,
            'alv': form.alv,
            'muntax': form.muntax,
            'unrent': form.unrent,
            'netannval': form.netannval,
            'd30': form.d30,
            'ihl': form.ihl,
            'lendname': form.lendname,
            'lendpan': form.lendpan,
            'ilop': form.ilop,
         });
      }
}
