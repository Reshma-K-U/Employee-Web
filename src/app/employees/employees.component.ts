import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './services/employee.services';
// import {FirestoreService} from '../services/firestore.service';
import {Employee} from './model/employee.model';

@Component({
  selector: 'exalt-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

    employee:Employee;
    i:number;
  constructor(private empService:EmployeeService) { }

  ngOnInit() {
    // this.employee= this.empService.getEmployee(1);
    // this.fsService.addEmployee(this.employee);
    //  this.fsService.getData('em002');
      
   }

  
}