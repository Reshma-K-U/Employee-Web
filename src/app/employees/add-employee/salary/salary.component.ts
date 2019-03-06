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

  subscription: Subscription;
  sal6mon: number = 1;
  salary: Salary = {
    basicpay: 0,
    hra: 0,
    cedallow: 0,
    medallow: 0,
    speallow: 0,
    conallow: 0,
    wwf: 0,
    pt: 0,
    esi: 0,
    total: '',
  };
  constructor(private addService: AddemployeeService) { }

  ngOnInit() {
  }
   onAdd(){
    this.addService.setSalary(this.salary);
  }

  autoFill() {
    if (this.salary.total <= 16000) {
     this.salary.basicpay = Math.round(parseInt(this.salary.total, 10) * 0.87);
     this.salary.conallow = Math.round(parseInt(this.salary.total, 10) * 0.05);
     this.salary.hra = Math.round(parseInt(this.salary.total, 10) * 0) ;
     this.salary.medallow = Math.round(parseInt(this.salary.total, 10) * 0.05) ;
     this.salary.cedallow = Math.round(parseInt(this.salary.total, 10) * 0.03) ;
     this.salary.speallow = Math.round(parseInt(this.salary.total, 10) * 0) ;
     this.salary.total = this.salary.total;
    }
    if ( 16000 < this.salary.total && 25000 >= this.salary.total) {
      this.salary.basicpay = Math.round(parseInt(this.salary.total, 10) * 0.67) ;
      this.salary.hra = Math.round(parseInt(this.salary.total, 10) * 0.2) ;
      this.salary.conallow = Math.round(parseInt(this.salary.total, 10) * 0.05) ;
      this.salary.medallow = Math.round(parseInt(this.salary.total, 10) * 0.05) ;
      this.salary.cedallow = Math.round(parseInt(this.salary.total, 10) * 0.03) ;
      this.salary.speallow = Math.round(parseInt(this.salary.total, 10 ) * 0) ;
      this.salary.total = this.salary.total;
    }
    if (this.salary.total > 25000) {
      this.salary.basicpay = Math.round(parseInt(this.salary.total, 10) * 0.55) ;
      this.salary.hra = Math.round(parseInt(this.salary.total, 10) * 0.2) ;
      this.salary.medallow = Math.round(parseInt(this.salary.total, 10) * 0.05) ;
      this.salary.cedallow = Math.round(parseInt(this.salary.total, 10) * 0.03) ;
      this.salary.speallow = Math.round(parseInt(this.salary.total, 10) * 0.12) ;
      this.salary.conallow = Math.round(parseInt(this.salary.total, 10) * 0.05) ;
      this.salary.total = this.salary.total;
    }
    this.sal6mon = this.salary.total * 6;
    if (12000 < this.sal6mon && 17999 >= this.sal6mon) {
      this.salary.pt = 120;
    }
    if (18000 < this.sal6mon && 29999 >= this.sal6mon) {
      this.salary.pt = 180;
    }
    if (30000 < this.sal6mon && 44999 >= this.sal6mon) {
      this.salary.pt = 300;
    }
    if (45000 < this.sal6mon && 59999 >= this.sal6mon) {
      this.salary.pt = 450;
    }
    if (60000 < this.sal6mon && 74999 >= this.sal6mon) {
      this.salary.pt = 600;
    }
    if (75000 < this.sal6mon && 99999 >= this.sal6mon) {
      this.salary.pt = 750;
    }
    if (100000 < this.sal6mon && 124999 >= this.sal6mon) {
      this.salary.pt = 1000;
    }
    if (this.sal6mon >= 125000) {
      this.salary.pt = 1250;
    }
    this.salary.esi = Math.round(0.0175 * parseInt(this.salary.total, 10)) ;
    this.salary.wwf = 20;
  }

  }

