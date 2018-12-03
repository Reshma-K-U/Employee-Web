import { Component, OnInit } from '@angular/core';
import { AddsalaryComponent } from './addsalary/addsalary.component';
import { MatDialog } from '@angular/material';
import { PayrollService } from './service/payroll.service';
import { NewempsalaryComponent } from './newempsalary/newempsalary.component';
import { AddEmployeeComponent } from '../employees/add-employee/add-employee.component';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'exalt-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class PayrollComponent implements OnInit {

  allemployee:any[]=[];
  constructor(public dialog: MatDialog,private pyService:PayrollService,fsService:FirestoreService,) { }

  ngOnInit() {

this.allemployee=this.pyService.getDataForList();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(NewempsalaryComponent,{
      width: '400px',
    });
  }
  openDialogmore(id:string): void {
    console.log(id);
    const dialogRef = this.dialog.open(AddsalaryComponent,{
      data: {id:id},
      width: '750px',
    });
  }
}
