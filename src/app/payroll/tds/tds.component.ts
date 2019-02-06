import { Component, OnInit } from '@angular/core';
import { PayrollService } from '../service/payroll.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'exalt-tds',
  templateUrl: './tds.component.html',
  styleUrls: ['./tds.component.scss']
})
export class TdsComponent implements OnInit {
  employeeNames: any[];
  navbar: boolean = false;
  navbar2: boolean = false;
  section: boolean = false;
  empid: string;
  selectedOption: string;
  employeeDetails: any = {
    name : '',
    empid: '',
    join_date: '',
    dob: '',
    gender: '',
  };
  subscription: Subscription;
  constructor(private pyService: PayrollService, private fsService: FirestoreService) { }

  ngOnInit() {
    this.employeeNames = this.fsService.getDataForList()
  }
  onNameChange(empid) {
    this.navbar = true;
    this.empid = empid;
    this.subscription = this.fsService.getData(this.empid).subscribe(
      (value) => {
        this.employeeDetails.name = value.name;
        this.employeeDetails.empid = value.emp_id;
        this.employeeDetails.gender = value.gender;
        this.employeeDetails.join_date = value.joining_date.toDate();
        this.employeeDetails.join_date = this.pyService.dateToString(this.employeeDetails.join_date);
        this.employeeDetails.dob = value.dob.toDate();
        this.employeeDetails.dob = this.pyService.dateToString(this.employeeDetails.dob);
        // var day=this.employeeDetails.join_date.getDate();
        // var month=this.employeeDetails.join_date.getMonth();
        // month=month+1;
        // var year=this.employeeDetails.join_date.getFullYear();
        // this.employeeDetails.join_date=day+"/"+month+"/"+year;
        this.subscription.unsubscribe();
      }
    )

  }
}
