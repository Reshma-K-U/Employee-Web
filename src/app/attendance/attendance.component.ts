import { Component, OnInit } from '@angular/core';
import { AttendanceService } from './service/attendance.service';
import { FirestoreService } from '../services/firestore.service';
import { Subscription } from 'rxjs';
import { Time } from '@angular/common';
import { AttendanceEditComponent } from './attendance-edit/attendance-edit.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'exalt-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

 allEmployees:any[]=[];
 leavesTaken:any[]=[]
 todaydate:Date;
 subscription:Subscription;
 checkinStatus:any[]=[];

  constructor(public dialog:MatDialog,private atService:AttendanceService,private fsService:FirestoreService) { }

  ngOnInit(){
   this.allEmployees= this.fsService.getDataForList();
  }

  onSaveDate(){
    this.atService.createDoc(this.todaydate);

    this.subscription=this.atService.getLeaveDetails(this.todaydate).subscribe(
      (value)=>{
        this.leavesTaken=value;
      })
    // this.subscription.unsubscribe();
    
    this.subscription=this.atService.readCheckinStatus(this.todaydate).subscribe(
      (value)=>{
        this.checkinStatus=value;
      })
        // this.subscription.unsubscribe();
  }

  getLeaveStatus(id:string){
    
    for(var j=0;j<this.leavesTaken.length;j++){
      if(this.leavesTaken[j].id==id&&this.leavesTaken[j].days==1){
          return true;
      }
    }
    return false;
  }  

  getCheckinStatus(id:string){
    for(var j=0;j<this.checkinStatus.length;j++){
      if(this.checkinStatus[j].empid==id){
          return this.checkinStatus[j].isCheckedin;
      }
    }
  }

  getCheckoutStatus(id:string){
    for(var j=0;j<this.checkinStatus.length;j++){
      if(this.checkinStatus[j].empid==id){
          return this.checkinStatus[j].isCheckedout;
      }
    }
  }
  
  onCheckin(id:string){
    this.atService.onCheckin(id,this.todaydate);
  }

  onCheckout(id:string){
    this.atService.onCheckout(id,this.todaydate);
  }

  initial(){
    return true;
  }
onEdit(): void{
const dialogRef =this.dialog.open(AttendanceEditComponent);
}

}

