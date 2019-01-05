import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'exalt-allsalaryslips',
  templateUrl: './allsalaryslips.component.html',
  styleUrls: ['./allsalaryslips.component.scss']
})
export class AllsalaryslipsComponent implements OnInit {


  src = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  constructor() { }

  ngOnInit() {
  console.log("opening");
  }

}
