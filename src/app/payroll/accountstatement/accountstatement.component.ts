import { Component, OnInit } from '@angular/core';
import { PayrollService } from '../service/payroll.service';
import { ActivatedRoute } from '@angular/router';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'exalt-accountstatement',
  templateUrl: './accountstatement.component.html',
  styleUrls: ['./accountstatement.component.scss']
})
export class AccountstatementComponent implements OnInit {

  payrollDetails: any[];
  totalsal: any = 0;
  date: any;
  constructor(private pyservice: PayrollService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.date = params['date'];
      // var day=this.date.getDate();
      // console.log(day);
      // var month=this.date.getMonth();
      // var year=this.date.getFullYear();
      //  this.d=day+"/"+month+"/"+year
  });
  setTimeout(() => {
    this.pyservice.accountStatement(this.date).subscribe(val => {
      this.payrollDetails = val;
      console.log(this.payrollDetails);
    });
  }, 1000);
  }

}
