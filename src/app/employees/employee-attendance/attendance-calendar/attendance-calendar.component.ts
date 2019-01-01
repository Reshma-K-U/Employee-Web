import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

import {
  CalendarEvent,
  CalendarView
} from 'angular-calendar';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FirestoreLeaveService } from 'src/app/home/leave-details/services/firestore-leave.service';
import { NG_MODEL_WITH_FORM_CONTROL_WARNING } from '@angular/forms/src/directives';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'exalt-attendance-calendar',
  templateUrl: './attendance-calendar.component.html',
  styleUrls: ['./attendance-calendar.component.scss']
})
export class AttendanceCalendarComponent {
  
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  events: CalendarEvent[];

  id:string;
  subscription:Subscription;
  leavesTaken:any[]=[];
  i:number;
 
  constructor( private route:ActivatedRoute,private lev:FirestoreLeaveService ) {}
  
  ngOnInit() {
    this.events=[
      {start:new Date(),
      title:'sick leave',
      color: {primary:'aff3ef',secondary:'aff3ef'}}
    ];
    this.id = this.route.snapshot.paramMap.get('id');
    this.subscription=this.lev.readLeavesTaken(this.id).subscribe(
      (data)=>{
          this.leavesTaken=data;
          
          for(var i=0;i<this.leavesTaken.length;i++){
            this.events.push(
              {
                start:(this.leavesTaken[i].on.toDate()),
                title:this.leavesTaken[i].leaveType,
                color: {primary:'aff3ef',secondary:'aff3ef'}
              }
            )
          }
          console.log(this.leavesTaken);
          console.log(this.events);
      })
      this.subscription.unsubscribe();
    }

}
    





  

  



    




  