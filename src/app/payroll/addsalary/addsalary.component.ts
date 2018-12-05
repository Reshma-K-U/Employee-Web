import { Component, OnInit , Inject, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { PayrollService } from '../service/payroll.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subscription } from 'rxjs';
@Component({
  selector: 'exalt-addsalary',
  templateUrl: './addsalary.component.html',
  styleUrls: ['./addsalary.component.scss'],
})
export class AddsalaryComponent implements OnInit {

    uptotal:Number;
    employeeDetail:any={
    empid:"",
    basicpay:"",
    hra:"",
    medallow:"",
    speallow:"",
    cedallow:""
  }
   subscription:Subscription;
  constructor(private moreempser:PayrollService,
    public dialogRef:MatDialogRef<AddsalaryComponent>, 
    @Inject(MAT_DIALOG_DATA) public data:any,
    ) { }

  ngOnInit() {
    this.subscription=this.moreempser.moreEmpFill(this.data.id).subscribe(
      (value)=>{
        this.employeeDetail.empid=value.empid;
        this.employeeDetail.hra=value.hra;
        this.employeeDetail.basicpay=value.basicpay;
        this.employeeDetail.medallow=value.medallow;
        this.employeeDetail.speallow=value.speallow;
        this.employeeDetail.cedallow=value.cedallow;

  
        this.subscription.unsubscribe();
              }
    )
  }
  onSave(form:NgForm){
    var value=form.value;
    // console.log(value);    
    this.moreempser.moreEmployeeSalary(value);
    this.uptotal=this.moreempser.addtotalsalary(value);
    this.dialogRef.close();
  }
  onCancel(){
    this.dialogRef.close();
  }
}