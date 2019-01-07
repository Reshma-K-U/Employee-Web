import { Component, OnInit } from '@angular/core';
import { AttendanceService } from './service/attendance.service';
import { FirestoreService } from '../services/firestore.service';
<<<<<<< HEAD
import { Subscription,Observable } from 'rxjs';
=======
import { Subscription } from 'rxjs';

>>>>>>> 8702b807b2f10c421d92c56aba20c72ef3b12d3d



@Component({
  selector: 'exalt-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

 allEmployees:any[]=[];
 leavesTaken:any[]=[]
 todaydate:Date=new Date();
 subscription:Subscription;

<<<<<<< HEAD
 

 attendanceModel={
  'checkinTime':"",
  'isCheckedin':false,
  'isCheckedout':false,
  'empid':"",
  'on':"",
  'checkoutTime':"",
  'hours':"",
 }
 checkinStatus:any[];

=======
>>>>>>> 8702b807b2f10c421d92c56aba20c72ef3b12d3d
  constructor(private atService:AttendanceService,private fsService:FirestoreService) { }

  ngOnInit(){
   
    this.allEmployees= this.fsService.getDataForList();
    this.checkinStatus=[];
    this.subscription=this.atService.getLeaveDetails(this.todaydate).subscribe(
      (value)=>{
        this.leavesTaken=value;
        console.log('leavestaken',this.leavesTaken);
      })

    this.atService.readCheckinStatus(this.todaydate).subscribe(x=>{
      x.forEach((post)=>{
        this.checkinStatus.push(post.payload.doc.data());
      })
    })
     
  }

  onSaveDate(){
    this.allEmployees= this.fsService.getDataForList();
    this.checkinStatus=[];

    this.subscription=this.atService.getLeaveDetails(this.todaydate).subscribe(
      (value)=>{
        this.leavesTaken=value;
        console.log(this.leavesTaken);
      })
    
<<<<<<< HEAD
    this.atService.readCheckinStatus(this.todaydate).subscribe(x=>{
      x.forEach((post)=>{
        this.checkinStatus.push(post.payload.doc.data());
=======
    this.subscription=this.atService.readCheckinStatus(this.todaydate).subscribe(
      (value)=>{
        this.checkinStatus=value;
        console.log(this.checkinStatus);
>>>>>>> 8702b807b2f10c421d92c56aba20c72ef3b12d3d
      })
    })
    
  }

    getLeaveStatus(id:string){
     
    for(var j=0;j<this.leavesTaken.length;j++){
      console.log(this.leavesTaken.length);
      if(this.leavesTaken[j].id==id&&this.leavesTaken[j].days==1){
          return true;
      }
      }
      return false;
  }

  getCheckinStatus(id:string){
    
    for(var j=0;j<this.checkinStatus.length;j++){
<<<<<<< HEAD
     
      if(this.checkinStatus[j].empid==id&&this.checkinStatus[j].isCheckedin==true){
        return true;
=======
      if(this.checkinStatus[j].empid==id){
          return this.checkinStatus[j].isCheckedin,this.checkinStatus[j].checkinTime;
        
      }
    }
  }
  getCheckintime(id:string)
  {
    for(var j=0;j<this.checkinStatus.length;j++){
      if(this.checkinStatus[j].empid==id){
        return this.getCheckinStatus[j].checkinTime;
>>>>>>> 8702b807b2f10c421d92c56aba20c72ef3b12d3d
      }
    }
     return false;
  } 

  getCheckoutStatus(id:string){
  
    for(var j=0;j<this.checkinStatus.length;j++){
     if(this.checkinStatus[j].empid==id && this.checkinStatus[j].isCheckedout==true){
        return true;
      }
    }
    return false;
  }
  
  onCheckin(id:string){
    this.atService.onCheckin(id,this.todaydate);
    return new Date().getTime();
  }

  onCheckout(id:string){
    this.atService.onCheckout(id,this.todaydate);
    return new Date().getTime();
  }

  getCheckinTime(id:string){
    for(var j=0;j<this.checkinStatus.length;j++){
     if(this.checkinStatus[j].empid==id){
       var time=this.checkinStatus[j].checkinTime.toDate().toLocaleTimeString();;
        return time ;
      }
    }
  }

  getCheckoutTime(id:string){
    for(var j=0;j<this.checkinStatus.length;j++){
     if(this.checkinStatus[j].empid==id&&this.checkinStatus[j].checkoutTime!=""){
      var time=this.checkinStatus[j].checkoutTime.toDate().toLocaleTimeString();;
      return time ;
      }
    }
  }

  getHours(id:string){
    for(var j=0;j<this.checkinStatus.length;j++){
      if(this.checkinStatus[j].empid==id&&this.checkinStatus[j].checkoutTime!=""){
         return (this.checkinStatus[j].hours);
       }
     }
  }


}
