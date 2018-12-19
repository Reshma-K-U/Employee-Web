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
  
  leavesTaken:any[]=[];
  data:any[]=[];
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();
  id:string;
  subscription:Subscription;
  events: CalendarEvent[];


 


  constructor( private route:ActivatedRoute,private lev:FirestoreLeaveService ) {}
    ngOnInit() {
      this.events=[];
      this.id = this.route.snapshot.paramMap.get('id');
       this.subscription=this.lev.readLeavesTaken(this.id).subscribe(
        (data)=>{
            this.data=data;
            console.log(this.data);


            
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
            
            console.log(this.events);
            
            
          
    }

  }
    





  

  



    




  