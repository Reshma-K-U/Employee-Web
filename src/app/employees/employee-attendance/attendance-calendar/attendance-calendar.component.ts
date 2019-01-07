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
  data:any[]=[];
  i:number;
 
  constructor( private route:ActivatedRoute,private lev:FirestoreLeaveService ) {}
  
  ngOnInit() {
    this.events=[
      {start:new Date(),
      title:'sick leave',
      color: {primary:'aff3ef',secondary:'aff3ef'}}
    ];
    this.id = this.route.snapshot.paramMap.get('id');
    this.lev.readLeavesTaken(this.id).get().then( (querySnapshot) => {
      if(querySnapshot.empty){
            console.log("not found");
      }
      else
      {
        querySnapshot.docs.map( (documentSnapshot) => {
        this.data.push(documentSnapshot.data());

      });
    }
    console.log(this.data);
});

  
}

currentStyles(day){
  return '#FF5733'
}
}