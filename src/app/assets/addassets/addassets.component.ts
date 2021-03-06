import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PayrollService } from 'src/app/payroll/service/payroll.service';
import { MatDialogRef } from '@angular/material';
import { AssetsService } from '../assets.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'exalt-addassets',
  templateUrl: './addassets.component.html',
  styleUrls: ['./addassets.component.scss']
})
export class AddassetsComponent implements OnInit {
  constructor(private asService:AssetsService,public dialogRef:MatDialogRef<AddassetsComponent>,
    private fsService:FirestoreService) { }
  onDate:Date;
  employeeNames:any[];
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
  model:model[]=[
    {value:'A1',viewValue:'A1'},
    {value:'A2',viewValue:'A2'},
    {value:'A3',viewValue:'A3'},
    {value:'B1',viewValue:'B1'},
    {value:'B2',viewValue:'B2'},
    {value:'C1',viewValue:'C1'},
  ]

  ngOnInit() {
    this.employeeNames=this.fsService.getDataForList()
    console.log(this.employeeNames); 
  }
  onSave(form:NgForm){
    var value=form.value;    
    this.asService.addAssets(value,this.onDate);
    this.dialogRef.close();
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
export interface model {
  value: string;
  viewValue: string;
}
