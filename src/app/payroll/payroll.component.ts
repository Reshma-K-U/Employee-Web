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

  moreclick:boolean=false;
  allemployee:any[]=[];
  payrollDetails:any[];
  payrollDetails1:any[]=[];
  total:any[];
  totalsal:any=0;
  // payrollDetailsUpdate:any;
  subscription:Subscription;
  onDate:Date;
  d : Date;
  // totalSalary:number;
  disable:boolean=true;
  constructor(public dialog: MatDialog,private pyService:PayrollService,private fsService:FirestoreService,
    private router:Router
    ) { }

  ngOnInit() {
    // if(this.moreclick=true){
    //   this.payrollDetails=[];
    //   this.pyService.
    // }
    // else{
   this.payrollDetails=[];
   this.total=[];
  this.pyService.getPayrollDetails().subscribe(
  (value)=>{

          this.payrollDetails=value;
          this.payrollDetails.forEach(element => {
            this.totalsal=this.totalsal+element.total;            
          });
        // this.payrollDetails.push(post.payload.doc.data());
        // this.pyService.setDetail(post.payload.doc.data());
  })  
// }
  // this.pyService.getTotal().subscribe(
  //   (value)=>{
  //     value.forEach(
  //       (post)=>{
  //         this.total.push(post.payload.doc.data());
  //       }
  //     )
  //   })


}

getTotalField(id:string){
      for(var j=0;j<this.total.length;j++){
        if(this.total[j].empid==id){
          return this.total[j].total;
        }
      }
}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(NewempsalaryComponent,{
      width: '400px',
    });
  }
  
  openDialogmore(id:string): void {

    console.log(id);
    this.moreclick=true;
    const dialogRef = this.dialog.open(AddsalaryComponent,{
      data: {id:id,date:this.onDate},
      width: '750px',
    });
  }
  disableAll()
  { 
    this.d=this.onDate;     
    this.disable = false;
    // this.pyService.createMoreDatabase(this.onDate);
  }
  
  onProcessClick(){
    // this.pyService.resetEmployeeSalary();
    this.router.navigate(['accountstatement'], { queryParams: {date:this.onDate}});
  }

  onDownload(id:string){
    this.router.navigate(['salaryslip'], { queryParams: {id:id,date:this.onDate}});
  }
}

