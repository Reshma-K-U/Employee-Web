import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirestoreClientService } from '../services/firestore.service';
import { Url } from 'url';
import { FirebaseStorage } from 'angularfire2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'exalt-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

selectedFile:File;
  
  constructor(private fsClient:FirestoreClientService,private http:HttpClient) { }
  
  ngOnInit() {}
  

  onAdd(form:NgForm){
    var value=form.value;
    this.fsClient.addNewClient(value);
  }

  onSelectFile(event) {
    this.selectedFile=event.target.files[0];
  }

  onUpload(){
      this.fsClient.uploadLogo(this.selectedFile);
  }

}
