import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddemployeeService } from '../addemployee.service';
@Component({
  selector: 'exalt-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about:string=" ";
  constructor(private addService:AddemployeeService) { }

  ngOnInit() {
  }
  onAdd(){
    this.addService.setAbout(this.about);
  }
}
