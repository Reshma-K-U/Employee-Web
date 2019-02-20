import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class TdsService {

  private userDoc: AngularFirestoreDocument<any>;
  constructor(private afs: AngularFirestore) { }

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
