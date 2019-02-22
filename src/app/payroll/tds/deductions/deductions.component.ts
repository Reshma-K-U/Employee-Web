import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'exalt-deductions',
  templateUrl: './deductions.component.html',
  styleUrls: ['./deductions.component.scss']
})
export class DeductionsComponent implements OnInit {
  @Input() empid: string;
  constructor() { }
  table80c = false;
  table80d = false;
  array: any[] = [
    {viewValue1: '1'},
  ];
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
    {value: 'c10', viewValue: 'Donation-100% Exemption'}
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
  addRow(j) {
    console.log(j);
    this.array.push({viewValue1: j + 1 });
  }
  onSectionChange(sec) {
    if (sec === '80c') {
    this.table80c = true;
    }
    if (sec === '80d') {
      this.table80d = true;
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
export interface Array {
  viewValue1: string;
}
