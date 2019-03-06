import { Component, OnInit, Input } from '@angular/core';
import { PayrollService } from '../../service/payroll.service';
import { TdsService } from '../tds.service';
import { TaxComputationService } from '../service/tax-computation.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'exalt-deductions',
  templateUrl: './deductions.component.html',
  styleUrls: ['./deductions.component.scss']
})
export class DeductionsComponent implements OnInit {
  @Input() empid: string;
  constructor(private tdsService:TaxComputationService,private router: Router) { }
  opchange: boolean = false;
  table80c = false;
  table80d = false;
  c80:c80[]=[];
  d80:d80[]=[];
  new80cAttribute: c80 = {
    narration: '',
    age: '',
    section: '',
    maxlimit: '',
    gross: '',
    qualifying: '',
    deductable: '',
    proof: '',
    remarks: '',
    }
    new80dAttribute: d80 = {
      narration: '',
      age: '',
      section: '',
      maxlimit: '',
      gross: '',
      qualifying: '',
      deductable: '',
      proof: '',
      remarks: '',
      }
  section80c: Section80c[] = [
    {value: 'c1', viewValue: '5 years of fixed deposit in scheduled bank', limit: '1000'},
    {value: 'c2', viewValue: 'Additional interest on Housing loan', limit: '2000'},
    {value: 'c3', viewValue: 'Children tution fees', limit: '3000'},
    {value: 'c4', viewValue: 'contribution to NPS 2015', limit: '1000'},
    {value: 'c5', viewValue: 'Contribution to Pension Fund', limit: '2000'},
    {value: 'c6', viewValue: 'Deposit in NSc', limit: '3000'},
    {value: 'c7', viewValue: 'Deposit in NSS', limit: '1000'},
    {value: 'c8', viewValue: 'Deposit in Post office saving Schemes', limit: '2000'},
    {value: 'c9', viewValue: 'Donation-100% Exemption', limit: '3000'},
    {value: 'c10', viewValue: 'Donation-50% Exemption', limit: '1000'},
    {value: 'c11', viewValue: 'Donation-Children Education', limit: '2000'},
    {value: 'c12', viewValue: 'Donation Political Parties', limit: '3000'},
    {value: 'c13', viewValue: 'Equity Linked Savings Scheme(ELSS)', limit: '1000'},
    {value: 'c14', viewValue: 'Infrastructure Bonds', limit: '2000'},
    {value: 'c15', viewValue: 'Interest on Loan of Higher Self Education', limit: '3000'},
    {value: 'c16', viewValue: 'Interset on NSC Reinvested', limit: '1000'},
    {value: 'c17', viewValue: 'Kisan Vikas Patra', limit: '2000'},
    {value: 'c18', viewValue: 'Life Insurance Premium', limit: '3000'},
    {value: 'c19', viewValue: 'Long Term Infrastructure Bonds', limit: '1000'},
    {value: 'c20', viewValue: 'Medical Treatment/Insurance of Handicapped Dependant', limit: '2000'},
    {value: 'c21', viewValue: 'Medical Treatment/Insurance of Handicapped Dependant(Severe)', limit: '3000'},
    {value: 'c22', viewValue: 'Medical Treatment(Specified Disease Only)', limit: '1000'},
    {value: 'c23', viewValue: 'Mutual Funds', limit: '1000'},
    {value: 'c24', viewValue: 'NABARD Rural Bonds', limit: '1000'},
    {value: 'c25', viewValue: 'National Pension Scheme', limit: '1000'},
    {value: 'c26', viewValue: 'NHB Scheme', limit: '1000'},
    {value: 'c27', viewValue: 'Permanent Physical Disability(Above 40%)', limit: '1000'},
    {value: 'c28', viewValue: 'Permanent Physical Disability(Below 40%)', limit: '1000'},
    {value: 'c29', viewValue: 'Post Office Time Deposit for 5 Years', limit: '1000'},
    {value: 'c30', viewValue: 'Pradhan Mantri Suraksha Bima Yojana', limit: '1000'},
    {value: 'c31', viewValue: 'Public Provident Fund', limit: '1000'},
    {value: 'c32', viewValue: 'Rajiv Gandhi Equity Scheme', limit: '1000'},
    {value: 'c33', viewValue: 'Repayment of Housing Loan(Principal Amount)', limit: '1000'},
    {value: 'c34', viewValue: 'Stamp Charges and Registration Charges', limit: '1000'},
    {value: 'c35', viewValue: 'Sukanya Samridhi Yojana', limit: '1000'},
    {value: 'c36', viewValue: 'Unit Linked Insurance Premium(ULIP)', limit: '1000'},
    {value: 'c37', viewValue: 'Interest on Deposits in Savings Account,FDs,Post Office and Cooperative Society', limit: '1000'},
    {value: 'c38', viewValue: 'Interest on Deposits in Savings Account,FDs,Post Office and Cooperative Society for Senior Citizen', limit: '2000'},
    {value: 'c39', viewValue: 'Medical Treatment(Specified Disease Only)-Senior Citizen', limit: '1000'},
    {value: 'c40', viewValue: 'Medical Treatment(Specified Disease Only)-Very Senior Citizen', limit: '1000'},
  ];
  section80d: Section80d[] = [
    {value: 'phc', viewValue: 'Preventive Health Check-Up',limit: '1000'},
    {value: 'phcp', viewValue: 'Preventive Health Check-Up-Dependant Parents',limit: '1000'},
    {value: 'mip', viewValue: 'Medical Insurance Premium', limit: '2000'},
    {value: 'mipp', viewValue: 'Medical Insurance Premium-Dependant Parents',limit: '2000'},
    {value: 'mb', viewValue: 'Medical Bills-Very Old Citizen', limit: '3000'}
  ];
  ngOnInit() {
  }
  onSectionChange(sec) {
    if (sec === '80c') {
    this.table80c = true;
    }
    if (sec === '80d') {
      this.table80d = true;
    }
  }
  on80cAddClick(){
    this.c80.push(this.new80cAttribute);
    this.new80cAttribute = {
      narration: '',
      age: '',
      section: '',
      maxlimit: '',
      gross: '',
      qualifying: '',
      deductable: '',
      proof: '',
      remarks: '',
    }
    this.opchange = false;
  }
    on80dAddClick(){
    this.d80.push(this.new80dAttribute);
    this.new80dAttribute = {
      narration: '',
      age: '',
      section: '',
      maxlimit: '',
      gross: '',
      qualifying: '',
      deductable: '',
      proof: '',
      remarks: '',
    }
    this.opchange = false;
  }
  onSave(){
      this.tdsService.add80c(this.c80,this.empid);
      this.tdsService.add80d(this.d80,this.empid);
      this.router.navigate(['otherincome']);
  }
  changeDed(){
    if(parseInt(this.new80dAttribute.maxlimit, 10) < parseInt(this.new80dAttribute.deductable, 10)){
      alert('No funds');
      this.new80dAttribute.deductable = '';
    }
  }
  optcChange(){
    for (let i = 0; i < this.section80c.length; i++){
      if (this.new80cAttribute.narration === this.section80c[i].viewValue){
        this.new80cAttribute.maxlimit = this.section80c[i].limit;
      }
    }
  }
  optdChange(){
    for (let i = 0; i < this.section80d.length; i++){
      if (this.new80dAttribute.narration === this.section80d[i].viewValue){
        this.new80dAttribute.maxlimit = this.section80d[i].limit;
      }
    }
  }
}
export interface Section80c {
  value: string;
  viewValue: string;
  limit: string;
}
export interface Section80d {
  value: string;
  viewValue: string;
  limit: string;
}
export interface c80 {
  narration: '';
  age: '';
  section: '';
  maxlimit: string;
  gross: '';
  qualifying: '';
  deductable: '';
  proof: '';
  remarks: '';
}
export interface d80 {
  narration: '';
  age: '';
  section: '';
  maxlimit: string;
  gross: '';
  qualifying: '';
  deductable: '';
  proof: '';
  remarks: '';
}
