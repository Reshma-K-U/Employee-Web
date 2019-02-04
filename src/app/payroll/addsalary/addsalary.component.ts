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
    join_date:"",
    basicpay:"",
    hra:"",
    medallow:"",
    speallow:"",
    conallow:"",
    cedallow:"",
    bonus:0,
    arrears:0,
    gwp:0,
    esi:0,
    wwf:0,
    advance:0,
    it:0,
    totded:0,
    others:0,
    lop:0,
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
        this.employeeDetail.join_date=value.join_date.toDate();
        var jdate=this.employeeDetail.join_date.getDate();
        var jmonth=this.employeeDetail.join_date.getMonth();
        jmonth=jmonth+1;
        var jyear=this.employeeDetail.join_date.getFullYear();
        this.employeeDetail.join_date=jdate+"/"+jmonth+"/"+jyear;
        this.employeeDetail.hra=value.hra;
        this.employeeDetail.basicpay=value.basicpay;
        this.employeeDetail.medallow=value.medallow;
        this.employeeDetail.speallow=value.speallow;
        this.employeeDetail.cedallow=value.cedallow;
        this.employeeDetail.conallow=value.conallow;

        // this.employeeDetail.bonus=value.bonus;
        // this.employeeDetail.arrears=value.arrears;
        // this.employeeDetail.gwp=value.gwp;
        // this.employeeDetail.esi=value.esi;
        // this.employeeDetail.it=value.it;
        // this.employeeDetail.advance=value.advance;
        // this.employeeDetail.totded=value.totded;
        // this.employeeDetail.lop=value.lop;
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