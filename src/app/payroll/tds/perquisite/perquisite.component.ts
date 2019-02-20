import { Component, OnInit, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { PayrollService } from '../../service/payroll.service';
import { TdsService } from '../tds.service';

@Component({
  selector: 'exalt-perquisite',
  templateUrl: './perquisite.component.html',
  styleUrls: ['./perquisite.component.scss']
})
export class PerquisiteComponent implements OnInit {

  constructor(private tdsService: TdsService) { }
  @Input() empid: any;
  ngOnInit() {
  }
  onSaveClick(form: NgForm) {
    const value = form.value;
  this.tdsService.addPerquisite(value, this.empid);
  }
}
