import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Prev_Exp } from '../../model/employee.model';
import { AddemployeeService } from '../addemployee.service';
import { EXPANSION_PANEL_ANIMATION_TIMING } from '@angular/material';

@Component({
  selector: 'exalt-prev-exp',
  templateUrl: './prev-exp.component.html',
  styleUrls: ['./prev-exp.component.scss']
})
export class PrevExpComponent implements OnInit {

  experiences: Prev_Exp[] = [];
  newExp: Prev_Exp = {
    company_name: ' ',
    job_title: ' ',
    fromDate: ' ',
    toDate: ' ',
    job_description: ' ',
  };
  constructor(private addService: AddemployeeService) { }

  ngOnInit() {
  }
  addField() {
    console.log(this.newExp);
    this.experiences.push(this.newExp);
      console.log(this.experiences);
      this.newExp = {
        company_name: ' ',
    job_title: ' ',
    fromDate: ' ',
    toDate: ' ',
    job_description: ' ',

      };
    }

    onAdd() {
        this.addService.setPrev_Exp(this.experiences);
    }

  }


