import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { ProjectService } from 'src/app/project/service/project.service';
@Component({
  selector: 'exalt-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
id: string;
subscription: Subscription;
project: any = null;
  constructor( private route: ActivatedRoute, private pfs: ProjectService, private location: Location) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.subscription = this.pfs.getData(this.id).subscribe(
    (project) => {
     this.project = project;
    }
    );
  }

  remove() {
  this.pfs.remove(this.id);
}
}
