import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Basic } from '../../model/employee.model';
import { AddemployeeService} from '../addemployee.service'

@Component({
  selector: 'exalt-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  basic:Basic={
    firstname:" ",
    lastname:" ",
    emp_id:" ",
    gender:"male",
    email:" ",
  }
  constructor(private addService:AddemployeeService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    // this.addService.setBasic(this.basic);
  }

  onAdd(){
    console.log(this.basic.firstname);
    this.addService.setBasic(this.basic);
  }

}
