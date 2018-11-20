import { Component, OnInit,Inject} from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FirestoreLeaveService } from '../../../home/leave-details/services/firestore-leave.service';

@Component({
  selector: 'exalt-add-privilage-leave',
  templateUrl: './add-privilage-leave.component.html',
  styleUrls: ['./add-privilage-leave.component.scss']
})
export class AddPrivilageLeaveComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddPrivilageLeaveComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fsLeaveService:FirestoreLeaveService ) { }

  ngOnInit() {
  }

  submitLeave(form:NgForm){
    var value=form.value;
    this.fsLeaveService.addPrivilageLeave(this.data.id,value);
    this.dialogRef.close();
  }

  cancel(){
    this.dialogRef.close();
  }

}
