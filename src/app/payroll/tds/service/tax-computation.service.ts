import { Injectable } from '@angular/core';
import {Observable , of} from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { PayrollService } from '../../service/payroll.service';

@Injectable({
  providedIn: 'root'
})
export class TaxComputationService {

  constructor(private afs: AngularFirestore, private pyService: PayrollService) { }
  getTaxDetails(id: string) {
    const userDoc = this.afs.collection('payroll').doc(id);
    let salary: any;
    let startMonth: number;
    let startIndex: number;
    this.pyService.moreEmpFill(id).subscribe(d => {
    salary = d;
    startMonth = d.join_date.toDate().getMonth();
    if (startMonth < 3) {
      startIndex = 9 + startMonth;
    } else {
      startIndex = startMonth - 3;
    }
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
        if (!val1) {
          monthData = salary;
        } else {
          monthData = val1;
        }
        data[ parseInt(i, 10) - 3] = monthData;
        if (index === 8) {
          to.forEach((j, ind) => {
            userDoc.collection(toYear.toString()).doc(j).valueChanges()
          .subscribe( val2 => {
            if (!val2 ) {
              monthData = salary;
            } else {
              monthData = val2;
            }
            data[ parseInt(j, 10) + 9] = monthData;
            });
          });
        }
        });
      });
      setTimeout(() => {
        while (startIndex > 0) {
          data[startIndex - 1] = {
            'basicpay': 0,
                  'cedallow': 0,
                  'medallow': 0,
                  'conallow': 0,
                  'speallow': 0,
                  'tax': 0,
                  'hra': 0
          };
          startIndex--;
        }
      }, 3000);
      return of(data);
  }
  getDetails(id: string) {
   return this.afs.collection('taxDetails').doc(id).snapshotChanges();
  }
  saveRentDetails(id: string, rentDetails: any[], hraExemption: any, exemptions: any ) {
    this.afs.collection('taxDetails').doc(id).update({
        'rentDetails': rentDetails,
        'hraExemption': hraExemption,
        'exemptions': exemptions
      });
  }
  savePerquisites(id: string, perquisites: any ) {
    this.afs.collection('taxDetails').doc(id).update({
      'perquisites': perquisites,
    });
  }
  savePreviousEmployerDetails(id: string, previousEmployerDetails: any) {
    this.afs.collection('taxDetails').doc(id).update({
      'previousEmployerDetails': previousEmployerDetails
    });
  }
}
