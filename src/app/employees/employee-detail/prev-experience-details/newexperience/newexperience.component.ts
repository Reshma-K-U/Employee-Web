import { Component, OnInit ,Inject,Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Prev_Exp } from '../../../model/employee.model';
import {MatDialogRef,MAT_DIALOG_DATA,MatDialog} from '@angular/material';
import { FirestoreService } from '../../../../services/firestore.service';

@Component({
  selector: 'exalt-newexperience',
  templateUrl: './newexperience.component.html',
  styleUrls: ['./newexperience.component.scss']
})
export class NewexperienceComponent implements OnInit {
  newExp:Prev_Exp={
    company_name:" ",
    job_title:" ",
    fromDate:" ",
    toDate:" ",
    job_description:" ",
  }


  constructor(public dialogRef: MatDialogRef<NewexperienceComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,private fsService:FirestoreService) { }

  ngOnInit() {
  }

  addField(){
      this.fsService.addNewExp(this.data.id,this.newExp);
      this.closePopup();
    }

  closePopup(){
    this.dialogRef.close();

  }
}





  
  
  
  

  
  




