import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';

import {
  CalendarEvent,
  CalendarView,
  CalendarMonthViewDay
} from 'angular-calendar';
import { ActivatedRoute } from '@angular/router';
//import { Subscription } from 'rxjs';
import { FirestoreLeaveService } from 'src/app/home/leave-details/services/firestore-leave.service';
import { NG_MODEL_WITH_FORM_CONTROL_WARNING } from '@angular/forms/src/directives';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { isPlatformServer } from '@angular/common';

const RED_CELL: 'red-cell' = 'red-cell';
const BLUE_CELL: 'blue-cell' = 'blue-cell';


@Component({
  selector: 'exalt-attendance-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './attendance-calendar.component.html',
  //styleUrls: ['./attendance-calendar.component.scss'],
  styles: [
    `
      .red-cell {
        background-color: red !important;
      }
      .blue-cell {
        background-color: blue !important;
      }
    `
  ]


})
export class AttendanceCalendarComponent {
  
<<<<<<< HEAD
=======
  leavesTaken:any[] = [];
  data: any[] = [];
 // snapshot:any;
>>>>>>> 8702b807b2f10c421d92c56aba20c72ef3b12d3d
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
<<<<<<< HEAD
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
=======
  id:string;

  events: CalendarEvent[];
  
  constructor( private route:ActivatedRoute,private lev:FirestoreLeaveService ){}
    ngOnInit() {
     
      this.events=[];
     // this.snapshot = {};
      this.id = this.route.snapshot.paramMap.get('id');
      var query= this.lev.readLeavesTaken(this.id);
      query.get().then( (querySnapshot) => {
        if(querySnapshot.empty){
              console.log("not found");
        }
        else
        {
          querySnapshot.docs.map( (documentSnapshot) => {
          this.data.push(documentSnapshot.data());
          
        });
        }
        console.log(this.data.length); 
});


    }
    
  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      if (this.isLeave(day.date)==1) {
        day.cssClass = RED_CELL;
      }

    });
  }

isLeave(date:Date){

for(var i=0;i<this.data.length;i++)
{
  console.log(this.data[i].on.toDate.getTime);
  console.log(date.getTime());
  if(this.data[i].on.toDate.getTime()===date.getTime()){
    console.log(this.data[i].on.toDate.getTime);
    console.log(date.getTime());
    return 1;
  }
}
>>>>>>> 8702b807b2f10c421d92c56aba20c72ef3b12d3d
}
}