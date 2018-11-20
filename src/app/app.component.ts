import { Component } from '@angular/core';
 import {FirestoreService} from './services/firestore.service';

@Component({
  selector: 'exalt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  

  constructor(private fsService:FirestoreService){}
  
  ngOnInit(){
    
    // this.fsService.add();
    // this.fsService.getDataForList(); 
  }

  
 
}
