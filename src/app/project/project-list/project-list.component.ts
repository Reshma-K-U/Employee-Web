import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router';

import { ProjectService } from 'src/app/project/service/project.service';
@Component({
  selector: 'exalt-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
 allproject:any [] =[];
  constructor(private router:Router,private pfs:ProjectService) { }

  ngOnInit() {
    this.allproject=this.pfs.getDataForList();
  
    
  }
 
}
