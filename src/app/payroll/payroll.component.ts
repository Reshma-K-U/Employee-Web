import { Component, OnInit,Inject, Input } from '@angular/core';
import { AddsalaryComponent } from './addsalary/addsalary.component';
import { MatDialog } from '@angular/material';
import { PayrollService } from './service/payroll.service';
import { NewempsalaryComponent } from './newempsalary/newempsalary.component';
import { AddEmployeeComponent } from '../employees/add-employee/add-employee.component';
import { FirestoreService } from '../services/firestore.service';
import { Subscription } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'exalt-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss'],
})
export class PayrollComponent implements OnInit {

  allemployee:any[]=[];
  payrollDetails:any[]=[];
  payrollDetails1:any[]=[];
  // payrollDetailsUpdate:any;
  subscription:Subscription;
  onDate:Date;
  d : string;
  // totalSalary:number;
  disable:boolean=true;
  constructor(public dialog: MatDialog,private pyService:PayrollService,private fsService:FirestoreService,
    private router:Router
    ) { }

  ngOnInit() {
   
  this.subscription=this.pyService.getPayrollDetails().subscribe(
  (value)=>{
    this.payrollDetails=value;
    this.subscription.unsubscribe();
  })
}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(NewempsalaryComponent,{
      width: '400px',
    });
  }
  
  openDialogmore(id:string): void {
    const dialogRef = this.dialog.open(AddsalaryComponent,{
      data: {id:id,date:this.onDate},
      width: '750px',
    });
  }
  disableAll()
  { this.d=this.onDate.toDateString();

    this.disable = false;
  }
  
  onProcessClick(){
    this.pyService.resetEmployeeSalary();
  }

  onDownload(id:string){
    this.router.navigate(['salaryslip'], { queryParams: {id:id,date:this.onDate}});
  }
}

