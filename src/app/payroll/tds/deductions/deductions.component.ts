import { Component, OnInit, Input } from '@angular/core';
import { PayrollService } from '../../service/payroll.service';
import { TdsService } from '../tds.service';
import { TaxComputationService } from '../service/tax-computation.service';

@Component({
  selector: 'exalt-deductions',
  templateUrl: './deductions.component.html',
  styleUrls: ['./deductions.component.scss']
})
export class DeductionsComponent implements OnInit {
  @Input() empid: string;
  constructor(private tdsService:TaxComputationService) { }
  table80c = false;
  table80d = false;
  c80:c80[]=[];
  d80:d80[]=[];
  new80cAttribute: c80 = {
    narration: '',
    age: '',
    section: '',
    maxlimit: '5000',
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
      maxlimit: '5000',
      gross: '',
      qualifying: '',
      deductable: '',
      proof: '',
      remarks: '',
      }
  section80c: Section80c[] = [
    {value: 'c1', viewValue: '5 years of fixed deposit in scheduled bank'},
    {value: 'c2', viewValue: 'Additional interest on Housing loan'},
    {value: 'c3', viewValue: 'Children tution fees'},
    {value: 'c4', viewValue: 'contribution to NPS 2015'},
    {value: 'c5', viewValue: 'Contribution to Pension Fund'},
    {value: 'c6', viewValue: 'Deposit in NSc'},
    {value: 'c7', viewValue: 'Deposit in NSS'},
    {value: 'c8', viewValue: 'Deposit in Post office saving Schemes'},
    {value: 'c9', viewValue: 'Donation-100% Exemption'},
    {value: 'c10', viewValue: 'Donation-50% Exemption'},
    {value: 'c11', viewValue: 'Donation-Children Education'},
    {value: 'c12', viewValue: 'Donation Political Parties'},
    {value: 'c13', viewValue: 'Equity Linked Savings Scheme(ELSS)'},
    {value: 'c14', viewValue: 'Infrastructure Bonds'},
    {value: 'c15', viewValue: 'Interest on Loan of Higher Self Education'},
    {value: 'c16', viewValue: 'Interset on NSC Reinvested'},
    {value: 'c17', viewValue: 'Kisan Vikas Patra'},
    {value: 'c18', viewValue: 'Life Insurance Premium'},
    {value: 'c19', viewValue: 'Long Term Infrastructure Bonds'},
    {value: 'c20', viewValue: 'Medical Treatment/Insurance of Handicapped Dependant'},
    {value: 'c21', viewValue: 'Medical Treatment/Insurance of Handicapped Dependant(Severe)'},
    {value: 'c22', viewValue: 'Medical Treatment(Specified Disease Only)'},
    {value: 'c23', viewValue: 'Mutual Funds'},
    {value: 'c24', viewValue: 'NABARD Rural Bonds'},
    {value: 'c25', viewValue: 'National Pension Scheme'},
    {value: 'c26', viewValue: 'NHB Scheme'},
    {value: 'c27', viewValue: 'Permanent Physical Disability(Above 40%)'},
    {value: 'c28', viewValue: 'Permanent Physical Disability(Below 40%)'},
    {value: 'c29', viewValue: 'Post Office Time Deposit for 5 Years'},
    {value: 'c30', viewValue: 'Pradhan Mantri Suraksha Bima Yojana'},
    {value: 'c31', viewValue: 'Public Provident Fund'},
    {value: 'c32', viewValue: 'Rajiv Gandhi Equity Scheme'},
    {value: 'c33', viewValue: 'Repayment of Housing Loan(Principal Amount)'},
    {value: 'c34', viewValue: 'Stamp Charges and Registration Charges'},
    {value: 'c35', viewValue: 'Sukanya Samridhi Yojana'},
    {value: 'c36', viewValue: 'Unit Linked Insurance Premium(ULIP)'},
    {value: 'c37', viewValue: 'Interest on Deposits in Savings Account,FDs,Post Office and Cooperative Society'},
    {value: 'c38', viewValue: 'Interest on Deposits in Savings Account,FDs,Post Office and Cooperative Society for Senior Citizen'},
    {value: 'c39', viewValue: 'Medical Treatment(Specified Disease Only)-Senior Citizen'},
    {value: 'c40', viewValue: 'Medical Treatment(Specified Disease Only)-Very Senior Citizen'},
  ];
  section80d: Section80d[] = [
    {value: 'phc', viewValue: 'Preventive Health Check-Up'},
    {value: 'phcp', viewValue: 'Preventive Health Check-Up-Dependant Parents'},
    {value: 'mip', viewValue: 'Medical Insurance Premium'},
    {value: 'mipp', viewValue: 'Medical Insurance Premium-Dependant Parents'},
    {value: 'mb', viewValue: 'Medical Bills-Very Old Citizen'}
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
      maxlimit: '5000',
      gross: '',
      qualifying: '',
      deductable: '',
      proof: '',
      remarks: '',
    }
  }
    on80dAddClick(){
    this.d80.push(this.new80dAttribute);
    this.new80dAttribute = {
      narration: '',
      age: '',
      section: '',
      maxlimit: '5000',
      gross: '',
      qualifying: '',
      deductable: '',
      proof: '',
      remarks: '',
    }
  }
  onSave(){
      this.tdsService.add80c(this.c80,this.empid);
      this.tdsService.add80d(this.d80,this.empid);
  }
  changeDed(){
    if(parseInt(this.new80dAttribute.maxlimit) < parseInt(this.new80dAttribute.deductable)){
      alert("No funds");
      this.new80dAttribute.deductable="";
    }
  }
}
export interface Section80c {
  value: string;
  viewValue: string;
}
export interface Section80d {
  value: string;
  viewValue: string;
}
export interface c80 {
  narration: '',
  age: '',
  section: '',
  maxlimit: '5000',
  gross: '',
  qualifying: '',
  deductable: '',
  proof: '',
  remarks: '',
}
export interface d80 {
  narration: '',
  age: '',
  section: '',
  maxlimit: '5000',
  gross: '',
  qualifying: '',
  deductable: '',
  proof: '',
  remarks: '',
}
