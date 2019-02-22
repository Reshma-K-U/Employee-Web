import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'exalt-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
@Input() empid: string;
  constructor() { }

  ngOnInit() {
  }

}
