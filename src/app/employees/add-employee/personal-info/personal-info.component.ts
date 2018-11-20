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
  constructor(private addService:AddemployeeService) { }
  ngOnInit() {
  }

  onAdd(){
    this.addService.setPersonal(this.personal);
  }

}
