import { Injectable } from '@angular/core';
import { FirestoreService} from '../../services/firestore.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  allEmployees:any= [];
  onDate:Date;


  constructor(private fsService:FirestoreService, private afs:AngularFirestore) { }

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
   setDate(date:Date,day:number,month:number,year:number){
       this.onDate=date;

        this.afs.collection("attendance").doc(year.toString()).collection(month.toString()).doc(day.toString()).ref.set({

        });
    

   }
   getLeave(dat:Date){
   
    var data:any[]=[];
    this.afs.collection('leaves').ref.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(leaveDoc) {
        var value=leaveDoc.data();
  

        if(dat.getTime()==value.on.toDate().getTime()){
          
            data.push(value);
        }
   })
    })   
    return of(data);
   }
}
 
