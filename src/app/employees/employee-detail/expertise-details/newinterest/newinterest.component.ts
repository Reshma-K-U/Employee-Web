import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FirestoreService } from '../../../../services/firestore.service';

@Component({
  selector: 'exalt-newinterest',
  templateUrl: './newinterest.component.html',
  styleUrls: ['./newinterest.component.scss']
})
export class NewinterestComponent implements OnInit {

  newAttribute:string=null;

  constructor(public dialogRef: MatDialogRef<NewinterestComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,private fsService:FirestoreService) { }


  ngOnInit() {
  }

  addField(){
    // this.fsService.addNewInterest(this.newAttribute);
    this.closePopup();
  }

  closePopup(){
    this.dialogRef.close();
  }

}

