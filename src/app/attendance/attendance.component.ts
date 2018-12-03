import { Component, OnInit } from '@angular/core';
import { AttendanceService } from './service/attendance.service';


@Component({
  selector: 'exalt-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

 allEmployees:any[]=[];
 todaydate:Date;
 

  constructor(private atService:AttendanceService) { }

  ngOnInit(){
   this.allEmployees= this.atService.getDataForList();
  }

saveDate()
{
  
   var day=this.todaydate.getDate();
   var month=this.todaydate.getMonth();
   var year=this.todaydate.getFullYear();
   this.atService.setDate(this.todaydate,day,month,year);
}
}

