import { Injectable } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { AngularFirestore } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  allemployee:any=[];

  constructor( private fsService:FirestoreService,private afs:AngularFirestore) { }

  getDataForList() {
    var docRef=this.afs.collection('employees');
    var array =[];
    docRef.ref.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            array.push(doc.data());
        })
    })
    return array;
};
}
