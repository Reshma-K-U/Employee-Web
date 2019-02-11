import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PayrollService } from '../../service/payroll.service';
import { EmployeeDetailComponent } from 'src/app/employees/employee-detail/employee-detail.component';

@Component({
  selector: 'exalt-exemptions',
  templateUrl: './exemptions.component.html',
  styleUrls: ['./exemptions.component.scss']
})
export class ExemptionsComponent implements OnInit {

  checkbox: boolean = false;
  tick: number = 1;
  // inputText:number = 1;
  constructor(private pyService: PayrollService) { }
  @Input() empid: any;
  ngOnInit() {
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
    this.pyService.addExemption(value, this.empid);
  }

}
