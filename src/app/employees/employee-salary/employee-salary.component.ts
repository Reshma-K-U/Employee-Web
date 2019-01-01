import { Component, OnInit } from '@angular/core';
import { NewempsalaryComponent } from '../../payroll/newempsalary/newempsalary.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'exalt-employee-salary',
  templateUrl: './employee-salary.component.html',
  styleUrls: ['./employee-salary.component.scss'],
})

export class EmployeeSalaryComponent implements OnInit {
  year: year[] = [
    {value: '2018', viewValue: '2018'},
    {value: '2019', viewValue: '2019'},
    {value: '2020', viewValue: '2020'},
    {value: '2021', viewValue: '2021'},
    {value: '2022', viewValue: '2022'},
    {value: '2023', viewValue: '2023'},
  ];
  month:string[]=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

  constructor(public dialog: MatDialog,) { }
 ngOnInit() {
  }
  onMonthClick(){
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(NewempsalaryComponent,{
      width: '400px',
    });
  }
}
export interface year {
  value: string;
  viewValue: string;
}
