import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Work } from '../../model/employee.model';
import { AddemployeeService } from '../addemployee.service';

@Component({
  selector: 'exalt-work-info',
  templateUrl: './work-info.component.html',
  styleUrls: ['./work-info.component.scss']
})
export class WorkInfoComponent implements OnInit {

  work:Work={
    department:" ",
    location:" ",
    hire_source:" ",
    role:" ",
    status:" ",
    joining_date:" ",
    employee_type:" ",
  }
  
  constructor(private addService:AddemployeeService) { }

  ngOnInit() {
  }

  onAdd(){
    this.addService.setWork(this.work);
  }

}
