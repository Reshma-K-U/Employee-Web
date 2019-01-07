import { Component, OnInit,Inject } from '@angular/core';
import { AddemployeeService } from '../addemployee.service';
import { Salary } from '../../model/employee.model';
import { NgForm } from '@angular/forms';
import { PayrollService } from 'src/app/payroll/service/payroll.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'exalt-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit {
  // salarys:Salary[]=[];
  subscription:Subscription;
  salary:Salary={
    basicpay:" ",
    hra:" ",
    cedallow:" ",
    medallow:" ",
    speallow:" ",
    total:"0",
  }
  constructor(private pyservice:PayrollService,private addService:AddemployeeService) { }

  ngOnInit() {
  }
   onAdd(){
     this.salary=this.addService.Calculate(this.salary);
     console.log(this.salary.total);
    this.addService.setSalary(this.salary);
  }
  autoFill(event:any){
    this.salary=this.addService.Calculate(this.salary)

  }
}
