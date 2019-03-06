import { Component, OnInit,Input } from '@angular/core';
import { ProjectService } from 'src/app/project/service/project.service';
import { NgForm } from '@angular/forms';
import {FirestoreClientService } from 'src/app/clients/services/firestore.service';
import { FirestoreService } from 'src/app/services/firestore.service';
@Component({
  selector: 'exalt-proj-info',
  templateUrl: './proj-info.component.html',
  styleUrls: ['./proj-info.component.scss']
})
export class ProjInfoComponent implements OnInit {
 @Input() project:any;
 allclients : any[] = [];
 allemployees :any[] = [];
  constructor(private pfs :ProjectService,private cfs:FirestoreClientService,private fs:FirestoreService) { }

  ngOnInit() {
    console.log(this.project);
    this.project.start_date=this.project.start_date.toDate();
    this.allclients= this.cfs.getDataForList();


   this.allemployees=this.fs.getDataForList();
  }
update(){
  console.log("test");
  this.pfs.update(this.project);
  console.log(this.project);

}
}
