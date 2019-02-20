import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PayrollService } from '../../service/payroll.service';
import { EmployeeDetailComponent } from 'src/app/employees/employee-detail/employee-detail.component';
import { TdsService } from '../tds.service';

@Component({
  selector: 'exalt-exemptions',
  templateUrl: './exemptions.component.html',
  styleUrls: ['./exemptions.component.scss']
})
export class ExemptionsComponent implements OnInit {

  checkbox: boolean = false;
  tick: number = 1;
  constructor(private tdsService: TdsService) { }
  @Input() empid: any;
  ngOnInit() {
    console.log(this.empid);
  }
  checkBoxClick(tick) {
    this.tick = tick + 1;
    if (this.tick % 2 === 0) {
    this.checkbox = true;
    }
    else{
      this.checkbox = false;
    }
  }
  onSaveClick(form: NgForm) {
    const value = form.value;
    this.tdsService.addExemption(value, this.empid);
  }

}
