import { Component, OnInit } from '@angular/core';
import { AttendanceService } from './service/attendance.service';
import { FirestoreService } from '../services/firestore.service';
import { Subscription } from 'rxjs';

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


  constructor(private atService:AttendanceService,private fsService:FirestoreService) { }

  ngOnInit(){
   this.allEmployees= this.fsService.getDataForList();
  }

  onSaveDate(){
    this.subscription=this.atService.getLeaveDetails(this.todaydate).subscribe(
      (value)=>{
        this.leavesTaken=value;
      }
    )
    this.subscription.unsubscribe();
  }

  getLeaveStatus(id:string){
    
    for(var j=0;j<this.leavesTaken.length;j++){
      if(this.leavesTaken[j].id==id&&this.leavesTaken[j].days==1){
          return true;
      }
    }
  }   
}

