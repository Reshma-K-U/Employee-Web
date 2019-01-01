import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PayrollService } from '../service/payroll.service';
import { FirestoreService } from 'src/app/services/firestore.service';
@Component({
  selector: 'exalt-salaryslip',
  templateUrl: './salaryslip.component.html',
  styleUrls: ['./salaryslip.component.scss']
})
export class SalaryslipComponent implements OnInit {
  id:string;
  date:Date;
  total1:number;
  total2:number;
  total:number;
  employeeDetails:any={
    name : "",
    role : ""
  }
  employeeDetail:any={
    empid:"",
    basicpay:"",
    hra:"",
    medallow:"",
    speallow:"",
    cedallow:"",
    bonus:"",
    arrears:"",
    gwp:"",
    esi:"",
    wwf:"",
    advance:"",
    it:"",
    others:"",
    totded:"",
  }
  subscription:Subscription;


  constructor(private route: ActivatedRoute,private moreempser:PayrollService,private fsService:FirestoreService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      // console.log(this.id);
      this.date=params['date'];
      // console.log(this.date);
  });
    
    this.subscription=this.fsService.getData1(this.id).subscribe(
      (value)=>{
        console.log(value.name);
        this.employeeDetails.name=value.name;
        this.employeeDetails.role=value.role;
        this.subscription.unsubscribe();
      }
    )
    var sub:Subscription;
    sub=this.moreempser.salarySlipFill(this.id,this.date).subscribe(
      (value)=>{
        
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
        this.employeeDetail.it=value.it;
        this.employeeDetail.totded=value.totded;
        this.employeeDetail.wwf=value.wwf;
        this.employeeDetail.others=value.others;

 
        this.total1=parseInt(this.employeeDetail.basicpay)+parseInt(this.employeeDetail.hra)
        +parseInt(this.employeeDetail.arrears)+parseInt(this.employeeDetail.medallow)
        +parseInt(this.employeeDetail.cedallow)+parseInt(this.employeeDetail.speallow)
        +parseInt(this.employeeDetail.bonus)+parseInt(this.employeeDetail.wwf);

        this.total2=parseInt(this.employeeDetail.esi)+parseInt(this.employeeDetail.advance)
        +parseInt(this.employeeDetail.it)+parseInt(this.employeeDetail.others)
        +parseInt(this.employeeDetail.totded);
      this.total=this.total1-this.total2;
      sub.unsubscribe();
    })
  } 
}
