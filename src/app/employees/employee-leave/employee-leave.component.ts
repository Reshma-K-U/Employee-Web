import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


import {AddPrivilageLeaveComponent} from './add-privilage-leave/add-privilage-leave.component'
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';

@Component({
  selector: 'exalt-employee-leave',
  templateUrl: './employee-leave.component.html',
  styleUrls: ['./employee-leave.component.scss']
})
export class EmployeeLeaveComponent implements OnInit {
  id:string;
  constructor(private router:Router,private route:ActivatedRoute,private dialog:MatDialog) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // this.id=this.id.replace(/\s/g, "");
  }

  startNewLeave(){

    const dialogRef = this.dialog.open(ApplyLeaveComponent,{
     data: {id:this.id}
    
    });
  }

  addPrivilageLeave(){
    const dialogRef = this.dialog.open(AddPrivilageLeaveComponent,{
      data: {id:this.id}
    });
  }
}
