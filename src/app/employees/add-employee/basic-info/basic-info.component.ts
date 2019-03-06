import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Basic } from '../../model/employee.model';
import { AddemployeeService} from '../addemployee.service';

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
  nextbutton: boolean = false;
  empidmessage: boolean = false;
  firstmessage: boolean = false;
  lastmessage: boolean = false;
  emailmessage: boolean = false;
  constructor(private addService:AddemployeeService,) { }

  ngOnInit() {
  }

  ngOnChanges(){
    // this.addService.setBasic(this.basic);
  }

  onAdd(){

    this.empidmessage = false;
    this.firstmessage = false;
    this.lastmessage = false;
    this.emailmessage = false;
      this.addService.setBasic(this.basic);
  }
  saveClick(){
    if(this.basic.emp_id === " "){
      this.empidmessage = true;
    }
    else if(this.basic.firstname === " "){
      this.firstmessage = true;
    }
    else if(this.basic.lastname === " "){
      this.lastmessage = true;
    }
    else if(this.basic.email === " "){
      this.emailmessage = true;
    }
    else{
      this.nextbutton = true;
    }

  }
}
