import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exalt-otherincome',
  templateUrl: './otherincome.component.html',
  styleUrls: ['./otherincome.component.scss']
})
export class OtherincomeComponent implements OnInit {

  plusopen:boolean = false;
  status:number = 1;
  tableon: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  // onAdd() {
  //   this.tableon = true;
  // }
  plusClick(status) {
    console.log(status);
    this.status = status + 1;
    if (this.status % 2 === 0) {
            this.plusopen = true;
    }
    else {
      this.plusopen = false;
    }
  }
}
