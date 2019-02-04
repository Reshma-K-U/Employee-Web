import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'exalt-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
@Input() project:any;
  constructor() { }

  ngOnInit() {
  }

}
