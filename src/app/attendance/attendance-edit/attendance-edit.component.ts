import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../service/attendance.service';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'exalt-attendance-edit',
  templateUrl: './attendance-edit.component.html',
  styleUrls: ['./attendance-edit.component.scss']
})
export class AttendanceEditComponent implements OnInit {
  checked:boolean=true;
  todaydate:Date;


  constructor( private aeds: AttendanceService,public dialogRef:MatDialogRef< AttendanceEditComponent>,) { 
    
  }

  ngOnInit() {
  }
  
 onSave(form:NgForm)
 {
   var value=form.value;
   this.aeds.addemp(value,this.todaydate);
  
   this.dialogRef.close();
 }

}
