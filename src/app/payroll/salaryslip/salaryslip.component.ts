import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PayrollService } from '../service/payroll.service';
@Component({
  selector: 'exalt-salaryslip',
  templateUrl: './salaryslip.component.html',
  styleUrls: ['./salaryslip.component.scss']
})
export class SalaryslipComponent implements OnInit {
  id:string;
  date:string;

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


  constructor(private route: ActivatedRoute,private moreempser:PayrollService,) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.date = this.route.snapshot.paramMap.get('date');
     this.subscription=this.moreempser.salarySlipFill(this.id,this.date).subscribe(
      (value)=>{
        console.log('from typescript',value);
        this.employeeDetail.empid=value.empid;
        this.employeeDetail.hra=value.hra;
        this.employeeDetail.basicpay=value.basicpay;
        this.employeeDetail.medallow=value.medallow;
        this.employeeDetail.speallow=value.speallow;
        this.employeeDetail.cedallow=value.cedallow;
        this.employeeDetail.advance=value.advance;
        this.employeeDetail.arrears=value.arrears;
        this.employeeDetail.bonus=value.bonus;
        this.employeeDetail.esi=value.esi;
        this.employeeDetail.gwp=value.gwp;
        this.employeeDetail.basicpay=value.it;
        this.employeeDetail.medallow=value.others;
        this.employeeDetail.speallow=value.totded;
        console.log(this.employeeDetail);
      this.subscription.unsubscribe();
    })
 
  }

}
