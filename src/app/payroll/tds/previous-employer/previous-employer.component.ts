import { Component, OnInit, Input } from '@angular/core';
import { TaxComputationService } from '../service/tax-computation.service';

@Component({
  selector: 'exalt-previous-employer',
  templateUrl: './previous-employer.component.html',
  styleUrls: ['./previous-employer.component.scss']
})
export class PreviousEmployerComponent implements OnInit {
  @Input() empid;
  months = [
    {value: 'jan', viewVal: 'January' },
    {value: 'feb', viewVal: 'February' },
    {value: 'mar', viewVal: 'March' },
    {value: 'apr', viewVal: 'April' },
    {value: 'may', viewVal: 'May' },
    {value: 'jun', viewVal: 'June' },
    {value: 'jul', viewVal: 'July' },
    {value: 'aug', viewVal: 'August' },
    {value: 'sep', viewVal: 'September' },
    {value: 'oct', viewVal: 'October' },
    {value: 'nov', viewVal: 'November' },
    {value: 'dec', viewVal: 'December' },

  ];

  details = {
    'month': '',
    'incAfterExemption': '',
    'profTax': '',
    'pf': '',
    'totalTax': '',
    'incomeTax': '',
    'surCharge': '',
    'cess': '',
    'ltaExemption': ''
  };

  constructor(private tdService: TaxComputationService) { }

  ngOnInit() {
    this.tdService.getDetails(this.empid).subscribe(data => {
      if (data) {
        if (data.payload.data()['previousEmployerDetails']) {
          this.details = data.payload.data()['previousEmployerDetails'];
        }
      }
    });
  }

  onSave() {
    this.tdService.savePreviousEmployerDetails(this.empid, this.details);
  }

  onSelectMonth(month: string) {
    this.details.month = month;
  }

}
