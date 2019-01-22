import { Component, OnInit,Inject, Input } from '@angular/core';
import { AddsalaryComponent } from './addsalary/addsalary.component';
import { MatDialog } from '@angular/material';
import { PayrollService } from './service/payroll.service';
import { NewempsalaryComponent } from './newempsalary/newempsalary.component';
import { AddEmployeeComponent } from '../employees/add-employee/add-employee.component';
import { FirestoreService } from '../services/firestore.service';
import { Subscription } from 'rxjs';
import { Route, Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'exalt-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss'],
})
export class PayrollComponent implements OnInit {

  
  allemployee:any[]=[];
  payrollDetails:any[];
  subscription:Subscription;
  onDate:Date=new Date();
  disable:boolean=true;
  
  constructor(
    public dialog: MatDialog,
    private pyService:PayrollService,
    private fsService:FirestoreService,
    private router:Router
    ) { }

  ngOnInit() {
    
   
  
   this.pyService.getPayrollDetails().subscribe(
    (value)=>{
      this.payrollDetails=[];
        value.forEach(x=>{
          
            this.payrollDetails.push(x.payload.doc.data())
        })
    }) 
  }

  
  openDialogmore(id:string): void {

  const dialogRef = this.dialog.open(AddsalaryComponent,{
      data: {id:id,date:this.onDate},
      width: '750px',
    });
  }
  
  
  onProcessClick(){
  
  }

  onDownload(id:string){
    this.router.navigate(['salaryslip'], { queryParams: {id:id,date:this.onDate}});
  }
}

