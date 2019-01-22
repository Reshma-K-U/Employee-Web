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
  result:boolean=true;
  leavesTaken:any[] = [];
  data: any[] = [];
 // snapshot:any;
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();
  id:string;

  events: CalendarEvent[] = [];

  
  constructor( private route:ActivatedRoute,private lev:FirestoreLeaveService ){}
    ngOnInit() {
     
    
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
        console.log(this.data); 

});


    }
    
  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    setTimeout(()=>{
    body.forEach(day => {

      if (this.isLeave(day.date)==1) {
  
       day.cssClass=RED_CELL;
      }
        
     
    
    });
  },5000);
  }
  
   isLeave(date:Date):any{
   
  // console.log(date);
   //console.log(this.data.length);

    for(var i=0;i<this.data.length;i++)
    {
     
     // console.log(date.getTime())
   //   console.log(this.data[i].on.toDate().getTime())
 
      if(this.data[i].on.toDate().getTime() === date.getTime())
       {
        
        console.log("test");
        
       } 
      
       
      }
      
   
   return 1;
  
  }
  
}