import { Component, OnInit } from '@angular/core';
import { FirestoreClientService } from '../services/firestore.service';

@Component({
  selector: 'exalt-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

   allClients:any=[];

  constructor(private fsClient:FirestoreClientService) { }

  ngOnInit() {
    this.allClients=this.fsClient.getDataForList();
  }


}
