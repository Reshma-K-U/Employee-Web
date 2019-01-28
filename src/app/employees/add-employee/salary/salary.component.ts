import { Component, OnInit,Inject } from '@angular/core';
import { AddemployeeService } from '../addemployee.service';
import { Salary } from '../../model/employee.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'exalt-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit {
 
  subscription:Subscription;
  salary:Salary={
    basicpay:" ",
    hra:" ",
    cedallow:" ",
    medallow:" ",
    speallow:" ",
    total:"0",
  }
  constructor(private addService:AddemployeeService) { }

  ngOnInit() {
  }
   onAdd(){
    this.addService.setSalary(this.salary);
  }
  
  autoFill(){
     this.salary.hra=parseInt(this.salary.basicpay)*0.5;
     this.salary.medallow=parseInt(this.salary.basicpay)*0.4;
     this.salary.cedallow=parseInt(this.salary.basicpay)*0.3;
     this.salary.speallow=parseInt(this.salary.basicpay)*0.2;
     this.salary.total=parseInt(this.salary.basicpay)+parseInt(this.salary.cedallow)+
     parseInt(this.salary.hra)+parseInt(this.salary.medallow)+parseInt(this.salary.speallow);
     }

  }

