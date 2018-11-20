import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'exalt-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.scss']
})
export class ClientItemComponent implements OnInit {
  
  @Input() client:any;
  
  constructor() { }

  ngOnInit() {
  }

}
