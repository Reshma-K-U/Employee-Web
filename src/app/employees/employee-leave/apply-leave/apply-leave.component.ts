import { Component, OnInit ,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NgForm } from '@angular/forms';
import { FirestoreLeaveService } from '../../../home/leave-details/services/firestore-leave.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FirestoreService } from '../../../services/firestore.service';

@Component({
  selector: 'exalt-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss']
})
export class ApplyLeaveComponent implements OnInit {

  id:string; 
  apply:boolean=true; 
  subscription:Subscription;
  
  constructor(public dialogRef: MatDialogRef<ApplyLeaveComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public dat:any, private fsLeaveService:FirestoreLeaveService,private route:ActivatedRoute,
  private fsService:FirestoreService) { }


  ngOnInit() {
    // this.id = this.route.snapshot.paramMap.get('id');
    
     this.id=this.dat.id.replace(/\s/g, "");
     console.log(this.id);
  }

  applyLeave(form:NgForm){
   var value=form.value;
  this.subscription=this.fsService.getData(this.dat.id).subscribe(
      (data)=>{
        console.log(data);
        var field=value.leaveType;
        if(data[field]<data['max'+field]){
          this.fsLeaveService.applyLeave(this.dat.id,data['name'],value,data[field]);
        }
        else{
          this.apply=false;
        }
        this.subscription.unsubscribe();
      } 
  )
  this.dialogRef.close();
/* var diff = Math.abs(value.toDate.getTime() - value.fromDate.getTime());
   var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
   console.log(diffDays); */
    
  }

  applyStatus(){
    this.apply=true;
    this.dialogRef.close();
    }

}
