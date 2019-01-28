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

    date:Date=new Date;
    employeeDetail:any={
    empid:"",
    name:"",
    basicpay:"",
    hra:"",
    medallow:"",
    speallow:"",
    cedallow:"",
    bonus:0,
    arrears:0,
    gwp:0,
    esi:0,
    wwf:0,
    advance:0,
    it:0,
    others:0,
    totded:0,
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
        this.employeeDetail.empname=value.name;
        value.join_date=new Date;
        var jmonth=value.join_date.getMonth();
        var jdate=value.join_date.getDate();
        var jyear=value.join_date.getYear();
        var jmonth=jmonth+1;
        this.employeeDetail.join_date=jdate+"/"+jmonth+"/"+jyear;
        this.employeeDetail.hra=value.hra;
        this.employeeDetail.basicpay=value.basicpay;
        this.employeeDetail.medallow=value.medallow;
        this.employeeDetail.speallow=value.speallow;
        this.employeeDetail.cedallow=value.cedallow;
        this.employeeDetail.conallow=value.conallow;
      this.subscription.unsubscribe();
    })
  }
  onSave(){   
    this.moreempser.moreEmployeeSalary(this.employeeDetail,this.data.date);
    this.dialogRef.close();
  }
  onCancel(){
    this.dialogRef.close();
  }

}