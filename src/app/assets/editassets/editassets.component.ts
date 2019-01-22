import { Component, OnInit,Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { AssetsService } from '../assets.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'exalt-editassets',
  templateUrl: './editassets.component.html',
  styleUrls: ['./editassets.component.scss']
})
export class EditassetsComponent implements OnInit {

  employeeNames:any[];
  assetDetail:any={
    itemid:"",
    type:"",
    company:"",
    model:"",
    date:"",
    assign:"",
  }
  subscription:Subscription;
  constructor(private asService:AssetsService,public dialogRef:MatDialogRef<EditassetsComponent>, 
    @Inject(MAT_DIALOG_DATA) public data:any,private fsService:FirestoreService) { }

  ngOnInit() {
    this.employeeNames=this.fsService.getDataForList()
    console.log(this.employeeNames); 
    this.subscription=this.asService.editFill(this.data.id).subscribe(
      (value)=>{
        this.assetDetail.itemid=value.itemid;
        this.assetDetail.type=value.type;
        this.assetDetail.company=value.company;
        this.assetDetail.model=value.model;
        this.assetDetail.day=value.day;
        this.assetDetail.employee=value.employee;
      }
    )
  }

}
