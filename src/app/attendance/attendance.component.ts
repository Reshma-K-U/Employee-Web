import { Component, OnInit } from '@angular/core';
import { AttendanceService } from './service/attendance.service';

@Component({
  selector: 'exalt-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {
 buttoncheckin=true;
 buttoncheckout=true;
 allEmployees:any[]=[];
 todaydate:Date;
 

  constructor(private atService:AttendanceService) { }

  ngOnInit(){
   this.allEmployees= this.atService.getDataForList();
   console.log(this.allEmployees);
  console.log(this.todaydate);

    
  }

  Oncheckin()
  {
    this.buttoncheckout=false;
    this.buttoncheckin=true;
    var today=new Date();

    // var time=today.getTime();
    var hours = today.getHours();

 // Minutes
 var minutes = "0" + today.getMinutes();

 // Seconds
 var seconds = "0" + today.getSeconds();
    console.log(hours,minutes,seconds);
  }
  Oncheckout()
  {
    this.buttoncheckout=true;
    var today=new Date();
    var hours = today.getHours();

 var minutes = "0" + today.getMinutes();

 var seconds = "0" + today.getSeconds();
    console.log(hours,minutes,seconds);

    
  }
Ontick()
{
  this.buttoncheckin=!this.buttoncheckin;
  if (this.buttoncheckin==true)
  {
    this.buttoncheckout=true;
  }

}
}
