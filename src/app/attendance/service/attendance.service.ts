import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private afs:AngularFirestore) { }

  createDoc(date:Date){
      var year=date.getFullYear();
      var month=date.getMonth();
      var day=date.getDate();
      this.afs.collection('attendance').doc(year.toString()).collection(month.toString()).doc
      (day.toString()).collection('employees').ref.doc().set({});
  }

getLeaveDetails(date:Date){
    var data:any[]=[];
    this.afs.collection('leaves').ref.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(leaveDoc) {
        var value=leaveDoc.data();
    
        if(date.getTime()==value.on.toDate().getTime()){
        
            data.push(value);
        }
    })
    })
    return of(data);
}

onCheckin(id:string,date:Date){
    
    var time=new Date();
    var year=date.getFullYear();
    var month=date.getMonth();
    var day=date.getDate();
    
    this.afs.collection('attendance').doc(year.toString()).collection(month.toString()).doc
    (day.toString()).collection('employees').ref.doc(id).set({
        'checkinTime':time,
        'isCheckedin':true,
        'isCheckedout':false,
        'empid':id,
        'on':date,
        'checkoutTime':"",
        'hours':0
    });
}

onCheckout(id:string,date:Date){
    
    var checkoutTime:any=new Date(); 
    var checkinTime:any;
    var year=date.getFullYear();
    var month=date.getMonth();
    var day=date.getDate();
    var hours;

    var docRef=this.afs.collection('attendance').doc(year.toString()).collection(month.toString()).doc
    (day.toString()).collection('employees').ref.doc(id);
    
    docRef.get().then(function(doc){
        if(doc.exists){
            checkinTime=doc.data().checkinTime.toDate();
            hours = Math.abs(checkoutTime - checkinTime)/36e5;
        }
        docRef.update({
            'checkoutTime':checkoutTime,
            'hours':hours,
            'isCheckedout':true
        })
    })
}

readCheckinStatus(date:Date){
    var year=date.getFullYear();
    var month=date.getMonth();
    var day=date.getDate();

    var value= this.afs.collection('attendance').doc(year.toString()).collection(month.toString()).doc
    (day.toString()).collection('employees').valueChanges() ;
    return (value);
}

}



