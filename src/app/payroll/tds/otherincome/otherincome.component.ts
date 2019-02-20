import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'exalt-otherincome',
  templateUrl: './otherincome.component.html',
  styleUrls: ['./otherincome.component.scss']
})
export class OtherincomeComponent implements OnInit {
  @Input() empid: string;
  otherIncome = {
    'descriptipn': '',
    'maxLimit': '',
    'amount': '',
    'remarks': ''
  };
  shortTermIncome = {
    'descriptipn': '',
    'maxLimit': '',
    'amount': '',
    'remarks': ''
  };
  descriptions = [{viewVal: 'Other income 1'}, {viewVal: 'Other income 2'}];
  constructor() { }

  ngOnInit() {
  }
  onSelectDescription(val: string) {
    console.log(val);
  }
}
