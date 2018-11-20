import { Component, OnInit,Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {NewinterestComponent} from './newinterest/newinterest.component';
import { FirestoreService } from '../../../services/firestore.service';

@Component({
  selector: 'exalt-expertise-details',
  templateUrl: './expertise-details.component.html',
  styleUrls: ['./expertise-details.component.scss']
})

export class ExpertiseDetailsComponent implements OnInit {
  
  @Input() employee:any;
  @Input() id:string;
  newInterest:string;
  editMode:boolean=false;
  about:string;
  
  constructor(public dialog:MatDialog,private fsService:FirestoreService) { }

  ngOnInit() {
  }

  onEditItem(){
    this.editMode=!this.editMode;
  }

  onAddInterest(){
    const dialogRef = this.dialog.open(NewinterestComponent);
  }

  editAbout(event:any){
    this.about=event.target.textContent;
    }

    save(){
      this.fsService.update(this.id,'about',this.about);
      this.editMode=false;
    }

}
