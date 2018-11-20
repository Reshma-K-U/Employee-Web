import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'exalt-filtered-leaves',
  templateUrl: './filtered-leaves.component.html',
  styleUrls: ['./filtered-leaves.component.scss']
})
export class FilteredLeavesComponent implements OnInit {

  @Input() data:any[]=[];

  constructor() { }

  ngOnInit() {
    
  }

}
