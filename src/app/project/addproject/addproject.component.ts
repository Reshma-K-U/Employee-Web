import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router';
import {FirestoreClientService } from 'src/app/clients/services/firestore.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { NgForm } from '@angular/forms';
import { ProjectService } from 'src/app/project/service/project.service';

@Component({
  selector: 'exalt-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.scss']
})
export class AddprojectComponent implements OnInit {
allclients: any[] = [] ;
allemployees: any[] = [];
textbox = false;
agentName = '';
clientId = '';
clientName = '';

  constructor(private cfs: FirestoreClientService , private afs: FirestoreService, private pfs: ProjectService) { }

  ngOnInit() {
   this.allclients = this.cfs.getDataForList();
   console.log(this.allclients);

   this.allemployees = this.afs.getDataForList();
   console.log(this.allemployees);
  }

   onAdd(form: NgForm) {
    const value = form.value;
    value.agent_name = this.agentName;
    value.client_id = this.clientId;
    console.log(value);
    this.pfs.addNewProject(value);



  }
onclick() {
  this.textbox = !this.textbox;
}
selectClient(id: string) {
 for ( let i = 0; i < this.allclients.length; i++) {
   if ( this.allclients[i].company_name === this.clientName) {
    this.clientId = this.allclients[i].client_id;
   }
 }
}
}
