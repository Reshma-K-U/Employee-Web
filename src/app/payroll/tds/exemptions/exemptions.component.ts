import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exalt-exemptions',
  templateUrl: './exemptions.component.html',
  styleUrls: ['./exemptions.component.scss']
})
export class ExemptionsComponent implements OnInit {

  checkbox: boolean = false;
  tick: number = 1;
  constructor() { }

  ngOnInit() {
  }
  checkBoxClick(tick) {
    this.tick = tick + 1;
    if(this.tick %2 == 0) {
    this.checkbox = true;
    }
    else{
      this.checkbox = false;
    }
  }

}
