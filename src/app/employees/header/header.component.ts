import { Component, OnInit,Input } from '@angular/core';
import {Employee} from '../model/employee.model';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'exalt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() employee:Employee;
  selected = new FormControl(0);
  constructor() { }

  ngOnInit() {
  }

}
