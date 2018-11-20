import { Component, OnInit,Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { Qualification } from '../../../model/employee.model';
import { FirestoreService } from '../../../../services/firestore.service';

@Component({
  selector: 'exalt-newqualification',
  templateUrl: './newqualification.component.html',
  styleUrls: ['./newqualification.component.scss']
})
export class NewqualificationComponent implements OnInit {
  
  newAttribute: Qualification={
    course:" ",
    specialization:" ",
    institute:" ",
    university:" ",
    percentage:" ",
  };
  id:string;

  constructor(public dialogRef: MatDialogRef<NewqualificationComponent>,
  @Inject(MAT_DIALOG_DATA) 
  public data:any, 
  private route: ActivatedRoute,
  private location: Location,
  private fsService:FirestoreService) { }

  ngOnInit() {
  }

  addField() {
    this.fsService.addNewQual(this.data.id,this.newAttribute);
    this.closePopup();
  }
 

  closePopup(){
    this.dialogRef.close();
  }

}








  
  
  
  

  


