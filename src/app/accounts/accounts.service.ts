import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FormBuilder } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private userDoc: AngularFirestoreDocument<any>;
  constructor(private afs: AngularFirestore) { }


  addCredit(date: Date, credit,creditTotal) {
    var month=date.getMonth();
    month=month+1;
    var year = date.getFullYear();
    const employeeDocRef = this.afs.collection('accounts').doc(year.toString()).collection(month.toString()).doc("credit");
    employeeDocRef.
       set({
         'credit': credit,
         'creditTotal': creditTotal,
    //       'bulrent': form.bulrent,
    //       'elec': form.elec,
    //       'foodbev': form.foodbev,
       });
  }
  addDebit(date: Date, debit,debitTotal) {
    var month=date.getMonth();
    month=month+1;
    var year = date.getFullYear();
    const employeeDocRef = this.afs.collection('accounts').doc(year.toString()).collection(month.toString()).doc("debit");
    employeeDocRef.
       set({
         'debit': debit,
         'debitTotal': debitTotal,
          // 'projpay': form.projpay,
          // 'balance': form.balance,
       });
  }
  getAccountDetails(date){
    var month=date.getMonth();
    month=month+1;
    var year = date.getFullYear();
    var col = this.afs.collection('accounts').doc(year.toString()).collection(month.toString()).doc('credit');
    var data:any
    // data = col.snapshotChanges();
    data=col.valueChanges();
    return data;
  }
}
