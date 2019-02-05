import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ChangeDetectorRef
} from '@angular/core';

import {
  CalendarEvent,
  CalendarView,
  CalendarMonthViewDay
} from 'angular-calendar';
import { ActivatedRoute } from '@angular/router';

import { FirestoreLeaveService } from 'src/app/home/leave-details/services/firestore-leave.service';


import { Subject } from 'rxjs';


const RED_CELL: 'red-cell' = 'red-cell';
const BLUE_CELL: 'blue-cell' = 'blue-cell';
const ORANGE_CELL: 'orange-cell' = 'orange-cell';


@Component({
  selector: 'exalt-attendance-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './attendance-calendar.component.html',
  styleUrls: ['./attendance-calendar.component.scss'],
  styles: [
    `
      .red-cell {
        background-color: red !important;
      }
      .blue-cell {
        background-color: blue !important;
      }
      .orange-cell {
        background-color: orange !important;
      }
    `
  ]


})
export class AttendanceCalendarComponent {
  leavesTaken: any[] = [];
  data: any[] = [];
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  id: string;

  events: CalendarEvent[] = [];
  constructor( private route: ActivatedRoute, private lev: FirestoreLeaveService, private cd: ChangeDetectorRef ) {}
  ngOnInit() {
      this.events = [];
      this.id = this.route.snapshot.paramMap.get('id');
      this.lev.readLeavesTaken(this.id).subscribe(val => {
        this.data = val;
      });
     }

     beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    console.log('hfhf');
   // this.events = [];
      body.forEach(day => {
      setTimeout(() => {
      var value: number = this.isLeave(day.date);
        switch (value) {

          case 1 : {day.cssClass = RED_CELL;
                  this.cd.markForCheck();
                    break; }
          case 0.5 : {day.cssClass = ORANGE_CELL;
                     this.cd.markForCheck();
                      break; }
        }
      }, 2000);
      }
    );
  }
isLeave(date: any) {
    for(var i = 0; i < this.data.length; i++)
  { if(this.data[i].on.toDate().getTime()===date.getTime()){
        if(this.data[i].days == "1" ){
          // console.log(date);
          // console.log(this.data[i].leaveType);
          this.events.push({
            start:this.data[i].on.toDate(),
            title:this.data[i].leaveType
          })
          this.cd.markForCheck();
          return 1;}
        else {
          if(this.data[i].days=="0.5"){
            this.events.push({
              start:this.data[i].on.toDate(),
              title:this.data[i].leaveType
            })
            this.cd.markForCheck();

          return 0.5; }
        }

      }
    }
    return 0;
}

}
