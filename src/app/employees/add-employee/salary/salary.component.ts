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
    conallow:" ",
    total:" ",

  }
  constructor(private addService:AddemployeeService) { }

  ngOnInit() {
  }
   onAdd(){
    this.addService.setSalary(this.salary);
  }
  
  autoFill(){
    if(this.salary.total<=16000){
     this.salary.basicpay=parseInt(this.salary.total)*0.87;
     this.salary.conallow=parseInt(this.salary.total)*0.05;
     this.salary.hra=parseInt(this.salary.total)*0;
     this.salary.medallow=parseInt(this.salary.total)*0.05;
     this.salary.cedallow=parseInt(this.salary.total)*0.03;
     this.salary.speallow=parseInt(this.salary.total)*0;
     this.salary.total=this.salary.total;
    }
    if(16000<this.salary.total && 25000>=this.salary.total){
      this.salary.basicpay=parseInt(this.salary.total)*0.67;
      this.salary.hra=parseInt(this.salary.total)*0.2;
      this.salary.conallow=parseInt(this.salary.total)*0.05;
      this.salary.medallow=parseInt(this.salary.total)*0.05;
      this.salary.cedallow=parseInt(this.salary.total)*0.03;
      this.salary.speallow=parseInt(this.salary.total)*0;
      this.salary.total=this.salary.total;
    }
    if(this.salary.total>25000){
      this.salary.basicpay=parseInt(this.salary.total)*0.55;
      this.salary.hra=parseInt(this.salary.total)*0.2;
      this.salary.medallow=parseInt(this.salary.total)*0.05;
      this.salary.cedallow=parseInt(this.salary.total)*0.03;
      this.salary.speallow=parseInt(this.salary.total)*0.12;
      this.salary.conallow=parseInt(this.salary.total)*0.05;
      this.salary.total=this.salary.total;  
    }
     }

  }

