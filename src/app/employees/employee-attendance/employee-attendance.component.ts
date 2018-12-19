import { Component, OnInit } from '@angular/core';
import {
  CalendarEvent,
  CalendarView
} from 'angular-calendar';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FirestoreLeaveService } from 'src/app/home/leave-details/services/firestore-leave.service';


@Component({
  selector: 'exalt-employee-attendance',
  templateUrl: './employee-attendance.component.html',
  styleUrls: ['./employee-attendance.component.scss']
})
export class EmployeeAttendanceComponent implements OnInit {
  leavesTaken:any[]=[];
  data:any[]=[];
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();
  id:string;
  subscription:Subscription;
  events: CalendarEvent[];
  
  constructor(private route:ActivatedRoute,private lev:FirestoreLeaveService) { }

  ngOnInit() {
    this.events=[];
      this.id = this.route.snapshot.paramMap.get('id');
       this.subscription=this.lev.readLeavesTaken(this.id).subscribe(
        (data)=>{
            this.data=data;
            for(var i=0;i<data.length;i++){
              this.events.push(
                {
                start:(this.data[i].on.toDate()),
                title:this.data[i].leaveType,
                color: {primary:'aff3ef',secondary:'aff3ef'}
              }
              )
            }
            })
            
          //  this.subscription.unsubscribe();

  }

}
