import { Injectable, Input } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { ValueTransformer } from '@angular/compiler/src/util';
import { of, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  allemployee:any=[];

  private userDoc:AngularFirestoreDocument<any>;
  constructor(private afs:AngularFirestore) { }

   newEmployeeSalary(value:any){

     var employeeDocRef=this.afs.collection("employees").doc(value.empid);
     var hra=parseInt(value.basicpay)*0.5;
     var medallow=parseInt(value.basicpay)*0.4;
     var cedallow=parseInt(value.basicpay)*0.3;
     var speallow=parseInt(value.basicpay)*0.2;
    employeeDocRef.
    set({

         'empid': value.empid,
        'empname':value.empname,
        'basicpay': value.basicpay,
         'hra':hra,
        'speallow': speallow,
        'medallow':medallow,
        'cedallow': cedallow,
        'total':"",

    })
    return true;
}

moreEmployeeSalary(more: any, date: Date) {
    var date1 = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var docRef =  this.afs.collection('payroll').doc(more.empid);
    var employeeDocRef = docRef.collection(year.toString()).ref.doc(month.toString());

    var updatetotal = parseInt(more.basicpay) + parseInt(more.hra)+parseInt(more.speallow)+
    parseInt(more.medallow)+parseInt(more.cedallow)+parseInt(more.conallow)+parseInt(more.bonus)+
    parseInt(more.arrears)+parseInt(more.gwp)-parseInt(more.esi)-parseInt(more.advance)-
    parseInt(more.it)-parseInt(more.others)-parseInt(more.totded)+parseInt(more.wwf)-parseInt(more.lop);
    employeeDocRef.
    set({

        'empid': more.empid,
        'name': more.empname,
        'join_date': more.join_date,
        'basicpay': more.basicpay,
        'hra': more.hra,
        'speallow': more.speallow,
        'medallow': more.medallow,
        'cedallow': more.cedallow,
        'conallow': more.conallow,
        'bonus': more.bonus,
        'arrears': more.arrears,
        'gwp': more.gwp,
        'esi': more.esi,
        'wwf': more.wwf,
        'advance': more.advance,
        'it': more.it,
        'others': more.others,
        'totded': more.totded,
        'total': updatetotal,
        'lop': more.lop,
        'day': date1,
    });

    docRef.update({
        'total': updatetotal
    });
}

moreEmpFill(id: string) {

        this.userDoc = this.afs.collection('payroll').doc(id);
        var data:any
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
getAllPayroll(value: any, date: Date){
    var date1 = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var id = value;
    this.userDoc = this.afs.collection('payroll').doc(id).collection(year.toString()).doc(month.toString());
    var data:any
    data = this.userDoc.valueChanges();
    return data;
}

accountStatement(date: Date){
    date = new Date(date);
    const month = date.getMonth();
    const year = date.getFullYear();
    const data: any = [];
    this.afs.collection('payroll').valueChanges().subscribe(
        d => {
            d.forEach(val => {
                 this.afs.collection('payroll').doc(val['empid']).collection(year.toString())
                .doc(month.toString()).valueChanges().subscribe(value => {
                    data.push(value);
                });
            });
        }
    );
    // data = this.userDoc.valueChanges();
    return of(data);
}

salarySlipFill(id:string,month,year){
    month=month-1;
    this.userDoc = this.afs.collection('payroll').doc(id).collection(year.toString()).doc(month.toString());
    var data:any
    data = this.userDoc.valueChanges();
    return data;
}

formatDate(date: Date) {
    var date = new Date(date);
    var month = date.getMonth();
    month = month + 1;
    var year = date.getFullYear();
    var day = month + '/' + year;
    return day;
}

getEmployeeName() {
    const col = this.afs.collection('payroll');
    var data : any
    // data = col.snapshotChanges();
    data = col.valueChanges();
    return data;

}
dateToString(date) {
    const day = date.getDate();
    var month = date.getMonth();
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
