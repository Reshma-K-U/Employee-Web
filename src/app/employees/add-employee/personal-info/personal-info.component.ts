import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Personal } from '../../model/employee.model';
import { AddemployeeService } from '../addemployee.service';

@Component({
  selector: 'exalt-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  personal:Personal={
    marrital_status:" ",
    address:" ",
    date_of_birth:" ",
    mob_num:" ",
    other_email:" ",
    accnt_num:" ",
    pan_num:" ",
    aadhar_num:" ",
    passport_num:" ",
  }
  nextbutton = false;
  addressmessage = false;
  dobmessage = false;
  mobmessage = false;
  aadharmessage = false;
  constructor(private addService:AddemployeeService) { }
  ngOnInit() {
  }
  saveClick(){
    if(this.personal.date_of_birth === ' '){
      this.dobmessage = true;
    }
    else if(this.personal.address === ' '){
      this.addressmessage = true;
    }
    else if(this.personal.mob_num.length !== 11){
      this.mobmessage = true;
    }
    else if(this.personal.aadhar_num === '' || this.personal.aadhar_num.length !== 13){
      this.aadharmessage = true;
    }
    else{
      this.nextbutton = true;
      this.dobmessage = false;
      this.addressmessage = false;
      this.mobmessage = false;
      this.aadharmessage = false;
       }
      }
  onAdd(){
    this.addService.setPersonal(this.personal);
  }
  dateCheck(){
    if(this.personal.date_of_birth === ' '){
      console.log("no dates");
      this.dobmessage = true;
    }
    else{
      console.log("Selected");
      this.dobmessage = false;
    }
  }
  addressCheck(){
    if(this.personal.address === ' '){
      this.addressmessage = true;
    }
    else{
      this.addressmessage = false;
    }
  }
  mobileCheck(){
    if(this.personal.mob_num.length !== 11){
      this.mobmessage = true;
    }
    else{
            this.mobmessage = false;
    }
  }
  aadharCheck(){
    if(this.personal.aadhar_num === '' || this.personal.aadhar_num.length !== 13){
      this.aadharmessage = true;
    }
    else{
      this.aadharmessage = false;
    }
  }
}
