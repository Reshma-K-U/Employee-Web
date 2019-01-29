import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'exalt-searchassets',
  templateUrl: './searchassets.component.html',
  styleUrls: ['./searchassets.component.scss']
})
export class SearchassetsComponent implements OnInit {

  data:any[];
  name:string;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.data = params['data'];
      this.name=params['name'];
      console.log(this.name);
      console.log(this.data);
  });
  }

}
