import { Component, OnInit ,Input} from '@angular/core';
import { AttendanceService } from '../service/attendance.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'exalt-attendanceitem',
  templateUrl: './attendanceitem.component.html',
  styleUrls: ['./attendanceitem.component.scss']
})
export class AttendanceitemComponent implements OnInit {

  @Input() employee: any;
  leaveDetails:any;
  subscription:Subscription;

  constructor(private ati :AttendanceService) { 


  }

  ngOnInit() {
    this.subscription=this.ati.getLeave(this.ati.onDate).subscribe(
      (value)=>{
        this.leaveDetails=value;
        console.log(this.leaveDetails);
        
        }
       
      )
      this.subscription.unsubscribe();
    }

  Oncheckin()
  {
    var today=new Date();
    /* var hours = today.getHours();

 var minutes = "0" + today.getMinutes();

 var seconds = "0" + today.getSeconds();
    console.log(hours,minutes,seconds); */
    var time=today.getTime();
    console.log(time);
  }
  Oncheckout()
  {
    
 
    var today=new Date();
   /* var hours = today.getHours();

 var minutes = "0" + today.getMinutes();

 var seconds = "0" + today.getSeconds();
    console.log(hours,minutes,seconds);*/
    var time=today.getTime();
    console.log(time);

    
  }
}
