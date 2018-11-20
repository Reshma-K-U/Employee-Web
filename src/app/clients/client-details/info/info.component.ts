import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirestoreClientService } from '../../services/firestore.service';

@Component({
  selector: 'exalt-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  
  @Input() client:any;
  constructor(private fsClient:FirestoreClientService) { }

  ngOnInit() {
  }
  update(){
    this.fsClient.update(this.client);
  }
}
