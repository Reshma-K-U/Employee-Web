import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PayrollService } from '../service/payroll.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'exalt-newempsalary',
  templateUrl: './newempsalary.component.html',
  styleUrls: ['./newempsalary.component.scss']
})
export class NewempsalaryComponent implements OnInit {

  constructor(private newempsalser:PayrollService,public dialogRef:MatDialogRef<NewempsalaryComponent>,){ }

  ngOnInit() {
  }
  onSave(form:NgForm){
    var value=form.value;
    console.log(value);
    this.newempsalser.newEmployeeSalary(value);
    this.dialogRef.close();
  }
  onSubmit(){
    console.log("form Submitted");
  }
  onReset(){
    this.dialogRef.close();
  }
}
