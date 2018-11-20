import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Subscription } from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreLeaveService {

  obs:Observable<any>;
  
  constructor(private afs:AngularFirestore) { }
  
  ngOnInit(){}

  applyLeave(id:string,name:string,value:any,currentVal:number){
    var userDoc=this.afs.collection('leaves');
    var subscription:Subscription;
    var length:number;
    if(value.days>1){
        var num=1;
        var sum=0;
        var from = new Date(value.fromDate);
        var to = new Date(value.toDate);
        while(from<=to){
  
          if(num>0){
                  /* let count = userDoc.snapshotChanges().map(c => {
                    return c.length;
                  });
                  subscription=count.subscribe(
                  (len)=>{
                      length=len;
                      console.log(len);
                      subscription.unsubscribe();
                   }) */
                   
                    userDoc.ref.doc().set({
                      'id':id,
                      'name':name,
                      'leaveType':value.leaveType,
                      'on':from,
                      'fromSession':value.toSession,
                      'toSession':value.fromSession,
                      'days':num,
                    })
                  
                   
          }
          sum=sum+num;
          num=value.days-sum; 
          from.setDate(from.getDate()+1);
        }
    }
    
    else{
          /* let count = userDoc.snapshotChanges().map(c => {
            return c.length;
          });
          subscription=count.subscribe(
          (len)=>{
             subscription.unsubscribe();
          }) */
          userDoc.ref.doc().set({
            'id':id,
            'name':name,
            'leaveType':value.leaveType,
            'on':value.fromDate,
            'fromSession':value.fromSession,
            'toSession':value.toSession,
            'days':value.days,
          })
    }
    this.afs.collection('employees').doc(id).update({
      [""+value.leaveType+""]:(currentVal+Number(value.days))
    })
  } 

  readLeavesTaken(i:string){
    var data:any[]=[];
    this.afs.collection('leaves').ref.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(leaveDoc) {
        if(leaveDoc.data().id==i){
          data.push(leaveDoc.data());
        }
    })
  })
  return of(data);
} 

  addPrivilageLeave(id:string,data:any){
    this.afs.collection('employees').doc(id).update({
      'maxpl':data.pl
    })
  }

  getThisWeek(){
    var today=new Date();
    var start=new Date(today.getFullYear(),today.getMonth(),
                      today.getDay(),0,0,0,0);
    var end=new Date(today.getFullYear(),today.getMonth(),
    today.getDay(),0,0,0,0);
    var day=today.getDay(); 
    start.setDate(today.getDate()-(day-1));
    end.setDate(today.getDate()+(5-day));
  
    var data:any[]=[];
    this.afs.collection('leaves').ref.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(leaveDoc) {
        var value=leaveDoc.data();
      
        if(start<=value.on.toDate() && end>=value.on.toDate()){
         
          data.push(value);
        }
      })
    })
    return of(data);
  }

  getLastWeek(){
    var today=new Date();
    var start=new Date(today.getFullYear(),today.getMonth(),
    today.getDay(),0,0,0,0);
    var end=new Date(today.getFullYear(),today.getMonth(),
    today.getDay(),0,0,0,0);
    var day=today.getDay();
    end.setDate(today.getDate()-(day+2));
    start.setDate(today.getDate()-(day+6));

    var data:any[]=[];
    this.afs.collection('leaves').ref.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(leaveDoc) {
        var value=leaveDoc.data();
        if(start<=value.on.toDate() && end>=value.on.toDate()){
          data.push(value);
        }
      })
    })
    return of(data);
  }

  getNextWeek(){
    var today=new Date();
    var start=new Date(today.getFullYear(),today.getMonth(),
    today.getDay(),0,0,0,0);
    var end=new Date(today.getFullYear(),today.getMonth(),
    today.getDay(),0,0,0,0);
    var day=today.getDay();
    start.setDate(today.getDate()+(8-day));
    end.setDate(today.getDate()+(12-day)); 

    var data:any[]=[];
    this.afs.collection('leaves').ref.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(leaveDoc) {
        var value=leaveDoc.data();
        if(start<=value.on.toDate() && end>=value.on.toDate()){
          data.push(value);
        }
      })
    })
    return of(data);
  }

  getThisMonth(){
    var today=new Date();
    var total_days=new Date(today.getFullYear(),today.getMonth()+1 , 0).getDate();
    var start=new Date(today.getFullYear(),today.getMonth(), 1,0,0,0,0);
    var end=new Date(today.getFullYear(),today.getMonth(),total_days,0,0,0,0);

    var data:any[]=[];
    this.afs.collection('leaves').ref.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(leaveDoc) {
        var value=leaveDoc.data();
        if(start<=value.on.toDate() && end>=value.on.toDate()){
          data.push(value);
        }
      })
    })
    return of(data);
   } 

   getLastMonth(){
    var today=new Date();
    var total_days=new Date(today.getFullYear(),today.getMonth(),0).getDate();
    var start=new Date(today.getFullYear(),today.getMonth()-1, 1,0,0,0,0);
    var end=new Date(today.getFullYear(),today.getMonth()-1,total_days,0,0,0,0);

    var data:any[]=[];
    this.afs.collection('leaves').ref.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(leaveDoc) {
        var value=leaveDoc.data();
        if(start<=value.on.toDate() && end>=value.on.toDate()){
          data.push(value);
        }
      })
    })
    return of(data);
  }

  getNextMonth(){
    var today=new Date();
    var total_days=new Date(today.getFullYear(),today.getMonth()+2, 0).getDate();
    var start=new Date(today.getFullYear(),today.getMonth()+1, 1,0,0,0,0);
    var end=new Date(today.getFullYear(),today.getMonth()+1,total_days,0,0,0,0);

    var data:any[]=[];
    this.afs.collection('leaves').ref.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(leaveDoc) {
        var value=leaveDoc.data();
        if(start<=value.on.toDate() && end>=value.on.toDate()){
          data.push(value);
        }
      })
    })
    return of(data);
  }

  getThisYear(){
    var year=new Date().getFullYear();
    var start=new Date(year, 0, 1,0,0,0,0);
    var end=new Date(year, 11, 31,0,0,0,0);

    var data:any[]=[];
    this.afs.collection('leaves').ref.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(leaveDoc) {
        var value=leaveDoc.data();
        if(start<=value.on.toDate() && end>=value.on.toDate()){
          data.push(value);
        }
      })
    })
    return of(data);
  }
}
  


  

