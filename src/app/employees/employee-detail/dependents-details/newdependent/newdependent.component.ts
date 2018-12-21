import { Component, OnInit ,Inject } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import { Dependents } from '../../../model/employee.model';
import { FirestoreService } from '../../../../services/firestore.service';

@Component({
  selector: 'exalt-newdependent',
  templateUrl: './newdependent.component.html',
  styleUrls: ['./newdependent.component.scss']
})
export class NewdependentComponent implements OnInit {

  newDep: Dependents={
    name:" ",
    relation:" ",
    occupation:" ",
  };

  constructor(public dialogRef: MatDialogRef<NewdependentComponent>, 
    @Inject(MAT_DIALOG_DATA) public data:any,private fsService:FirestoreService) { }

  ngOnInit() {
  }

  onAdd(){
    
    this.fsService.addNewDep(this.data.id,this.newDep);
    this.closePopup();
    
  }

  closePopup(){
    this.dialogRef.close();
  }


}
