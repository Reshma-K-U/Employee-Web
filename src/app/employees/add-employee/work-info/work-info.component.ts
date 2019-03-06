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

  joindatemessage = false;
  rolemessage = false;
  nextbutton = false;
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
  saveClick(){
    if(this.work.joining_date === ' '){
      this.joindatemessage = true;
    }
    else if(this.work.role === ' '){
      this.rolemessage = true;
    }
    else{
      this.nextbutton = true;
      this.joindatemessage = false;
      this.joindatemessage = false;
    }
  }
  onAdd(){
    this.addService.setWork(this.work);
  }
  dateCheck(){
    if(this.work.joining_date === ' '){
      this.joindatemessage = true;
    }
    else{
      this.joindatemessage = false;
    }
  }
  roleCheck(){
    if(this.work.role === ' '){
      this.rolemessage = true;
    }
    else{
      this.rolemessage = false;
    }
  }

}
