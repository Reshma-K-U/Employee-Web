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

    employeeDetail2:any={
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
    employeeDetail:any={
    empid:"",
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
   subscription1:Subscription;
  constructor(private moreempser:PayrollService,
    public dialogRef:MatDialogRef<AddsalaryComponent>, 
    @Inject(MAT_DIALOG_DATA) public data:any,
    ) { }

  ngOnInit() {
    // this.moreempser.createMoreDatabase(this.data.date,this.data.id);
    this.subscription=this.moreempser.moreEmpFill(this.data.id).subscribe(
      (value)=>{
        this.employeeDetail.empid=value.empid;
        this.employeeDetail.hra=value.hra;
        this.employeeDetail.basicpay=value.basicpay;
        this.employeeDetail.medallow=value.medallow;
        this.employeeDetail.speallow=value.speallow;
        this.employeeDetail.cedallow=value.cedallow;
        // this.employeeDetail2.bonus=value.bonus;
        // this.employeeDetail2.arrears=value.arrears;
        // this.employeeDetail2.gwp=value.gwp;
        // this.employeeDetail2.esi=value.esi;
        // this.employeeDetail2.wwf=value.wwf;
        // this.employeeDetail2.advance=value.advance;
        // this.employeeDetail2.it=value.it;
        // this.employeeDetail2.others=value.others;
        // this.employeeDetail2.totded=value.totded;
        // console.log(this.employeeDetail.emp_id);
      this.subscription.unsubscribe();
    })
    this.subscription1=this.moreempser.getAllPayroll(this.data.id,this.data.date).subscribe(
      (value)=>{

        this.employeeDetail2.bonus=value.bonus;
        this.employeeDetail2.arrears=value.arrears;
        this.employeeDetail2.gwp=value.gwp;
        this.employeeDetail2.esi=value.esi;
        this.employeeDetail2.wwf=value.wwf;
        this.employeeDetail2.advance=value.advance;
        this.employeeDetail2.it=value.it;
        this.employeeDetail2.others=value.others;
        this.employeeDetail2.totded=value.totded;
      this.subscription1.unsubscribe();
    })
  }
  onSave(form:NgForm){
    var value=form.value;    
    this.moreempser.moreEmployeeSalary(value,this.data.date);
    this.dialogRef.close();
  }
  onCancel(){
    this.dialogRef.close();
  }

}