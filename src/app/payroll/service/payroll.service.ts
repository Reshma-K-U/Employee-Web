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
     const hra = parseInt(value.basicpay)*0.5;
     const medallow = parseInt(value.basicpay) * 0.4;
     const cedallow = parseInt(value.basicpay) * 0.3;
     const speallow = parseInt(value.basicpay) * 0.2;
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
    const updatetotal = parseInt(more.basicpay) + parseInt(more.hra) + parseInt(more.speallow)+
    parseInt(more.medallow) + parseInt(more.cedallow) + parseInt(more.conallow) + parseInt(more.bonus) +
    parseInt(more.arrears) + parseInt(more.gwp) - parseInt(more.esi) - parseInt(more.advance) -
    parseInt(more.it) - parseInt(more.others) - parseInt(more.totded) + parseInt(more.wwf) - parseInt(more.lop);
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
getTaxDetails(id: string) {
  const userDoc = this.afs.collection('payroll').doc(id);
  let salary: any;
  this.moreEmpFill(id).subscribe(d => {
  salary = d;
  });
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  let fromYear;
  let toYear;
  const from: string[] = ['3', '4', '5', '6', '7', '8', '9', '10', '11'];
  const to: string[] = ['0', '1', '2'];
  const data: any[] = [];
  let monthData: any;
  let hasSalary = false;
  if (month < 3) {
    fromYear = date.getFullYear() - 1;
   toYear = year;
  } else {
     fromYear = year;
     toYear = date.getFullYear() + 1;
  }
  from.forEach((i, index) => {
    userDoc.collection(fromYear.toString()).doc(i).valueChanges()
    .subscribe( val1 => {
      // if (!val1 ) {
      //  monthData = {
      //       'basicpay': 0,
      //       'cedallow': 0,
      //       'medallow': 0,
      //       'conallow': 0,
      //       'speallow': 0,
      //       'tax': 0
      //     };
      // }
      if (!val1) {
        monthData = salary;

      } else {
        if (!hasSalary) {
          hasSalary = true;
          this.startIndex = index;
        }
        monthData = val1;
      }
      data[ parseInt(i) - 3] = monthData;
      if (index === 8) {
        to.forEach((j, ind) => {
          userDoc.collection(toYear.toString()).doc(j).valueChanges()
        .subscribe( val2 => {
          // if (!val2 && !hasSalary) {
          //   monthData = {
          //       'basicpay': 0,
          //       'cedallow': 0,
          //       'medallow': 0,
          //       'conallow': 0,
          //       'speallow': 0,
          //       'tax': 0
          //     };
          // }
          if (!val2 ) {
            monthData = salary;
          } else {
            if (!hasSalary) {
              hasSalary = true;
              this.startIndex = 9 + ind;
              console.log('start', this.startIndex);
            }
            monthData = val2;
          }
          data[ parseInt(j) + 9] = monthData;
          });
        });
      }
      });
    });
    setTimeout(() => {
      while (this.startIndex > 0) {
        data[this.startIndex - 1] = {
          'basicpay': 0,
                'cedallow': 0,
                'medallow': 0,
                'conallow': 0,
                'speallow': 0,
                'tax': 0
        };
        this.startIndex--;
      }
    }, 2000);

    return of(data);
}
}
