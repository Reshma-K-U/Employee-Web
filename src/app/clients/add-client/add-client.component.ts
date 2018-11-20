import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirestoreClientService } from '../services/firestore.service';
import { Url } from 'url';

@Component({
  selector: 'exalt-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  url:Url;
  
  constructor(private fsClient:FirestoreClientService) { }
  
  ngOnInit() {}
  

  onAdd(form:NgForm){
    var value=form.value;
    this.fsClient.addNewClient(value);
  }

  detectFiles(event) {
    console.log(event);
    var selectedFile:File=event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event: any) => {
    this.url = event.target.result;
  }
  reader.readAsDataURL(event.target.files[0]);
  }

}
