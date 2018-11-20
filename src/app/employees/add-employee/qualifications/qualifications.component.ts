import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Qualification } from '../../model/employee.model';
import { AddemployeeService } from '../addemployee.service';

@Component({
  selector: 'exalt-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.scss']
})
export class QualificationsComponent implements OnInit {

  qualifications:Qualification[]=[];
  newAttribute: Qualification={
    course:" ",
    specialization:" ",
    institute:" ",
    university:" ",
    percentage:" ",
  };
  
  
  constructor(private addService:AddemployeeService) { }

  ngOnInit() {
  }

  onAdd(){
   this.addService.setQualification(this.qualifications);
  }

  addField() {
    console.log(this.newAttribute);
    this.qualifications.push(this.newAttribute);
      console.log(this.qualifications);
      this.newAttribute={
        course:" ",
        specialization:" ",
        institute:" ",
        university:" ",
        percentage:" ",

      }
    }

}
