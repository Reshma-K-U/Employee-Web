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
  allemployee: any[] = [];
  payrollDetails: any[];
  subscription: Subscription;
  onDate: Date = new Date();
  disable: boolean = true;
  totalsal: number = 0;

  constructor(
    public dialog: MatDialog,
    private pyService: PayrollService,
    private fsService: FirestoreService,
    private router: Router
    ) { }

  ngOnInit() {
   this.pyService.getPayrollDetails().subscribe(
    (value) => {
      this.payrollDetails = [];
        value.forEach(x => {
            this.payrollDetails.push(x.payload.doc.data());
            this.totalsal = this.totalsal + parseInt(x.payload.doc.data()['total']);
        });
    });
  }


  openDialogmore(id: string): void {

  const dialogRef = this.dialog.open(AddsalaryComponent, {
      data: {id: id, date: this.onDate},
    });
  }


  onProcessClick() {
    this.router.navigate(['accountstatement'], { queryParams: {date: this.onDate}});
  }

  onDownload(id: string) {
    var date = new Date(this.onDate);
    var month = date.getMonth();
    month = month + 1;
    var year = date.getFullYear();
    this.router.navigate(['salaryslip'], { queryParams: {id: id, month, year}});
  }
  onTdsClick() {
    this.router.navigate(['tds']);
  }
}

