import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { PayrollService } from 'src/app/payroll/service/payroll.service';
import { AssetsService } from '../assets.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'exalt-assignassets',
  templateUrl: './assignassets.component.html',
  styleUrls: ['./assignassets.component.scss']
})
export class AssignassetsComponent implements OnInit {

  name:string='joel';
  constructor(public asService:AssetsService,public dialogRef:MatDialogRef<AssignassetsComponent>,
    private router:Router) { }
  item: item[] = [
    {value: 'laptop', viewValue: 'Laptop'},
    {value: 'mobile', viewValue: 'Mobile'},
    {value: 'harddisk', viewValue: 'Hard Disk'},
    {value: 'others', viewValue: 'Others'},
  ];
  company: company[] = [
    {value: 'apple', viewValue: 'Apple'},
    {value: 'lenovo', viewValue: 'Lenovo'},
    {value: 'hp', viewValue: 'HP'},
    {value: 'dell', viewValue: 'Dell'},
    {value: 'samsung', viewValue: 'Samsung'},
    {value: 'lg', viewValue: 'LG'},
    {value: 'motorola', viewValue: 'Motorola'},
    {value: 'redmi', viewValue: 'Redmi'},
  ];


  ngOnInit() {
  }
  onSearch(form:NgForm){
    var value=form.value;
    var data=this.asService.searchAssets(value);
    this.dialogRef.close();
    this.router.navigate(['searchassets'], { queryParams: {data,name}});
  }
  onCancel(){
    this.dialogRef.close();
  }
}
export interface item {
  value: string;
  viewValue: string;
}
export interface company {
  value: string;
  viewValue: string;
}
