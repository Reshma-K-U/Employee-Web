import { Component, OnInit, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { PayrollService } from '../../service/payroll.service';
import { TaxComputationService } from '../service/tax-computation.service';

@Component({
  selector: 'exalt-perquisite',
  templateUrl: './perquisite.component.html',
  styleUrls: ['./perquisite.component.scss']
})
export class PerquisiteComponent implements OnInit {
  perquisites = {
    'vehper': '',
    'hoper': '',
    'assres': '',
    'loanper': '',
    'total': 0,
  };

  constructor(private tdService: TaxComputationService) { }
  @Input() empid: any;
  ngOnInit() {
    this.tdService.getDetails(this.empid).subscribe(data => {
      if (data) {
        if (data.payload.data()['perquisites']) {
          this.perquisites = data.payload.data()['perquisites'];
        }
      }
    });
  }
  onChange(field) {
    this.perquisites.total = this.perquisites.total +  parseInt(this.perquisites[field], 10);
  }
  onSaveClick() {
    this.tdService.savePerquisites(this.empid, this.perquisites);
  }
}
