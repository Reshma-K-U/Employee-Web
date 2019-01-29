import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddassetsComponent } from './addassets/addassets.component';
import { AssignassetsComponent } from './assignassets/assignassets.component';
import { Router } from '@angular/router';
import { AssetsService } from './assets.service';
import { FirestoreService } from '../services/firestore.service';
import { FocusService } from '@progress/kendo-angular-buttons/dist/es2015/focusable/focus.service';
import { EditassetsComponent } from './editassets/editassets.component';


@Component({
  selector: 'exalt-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {

  assetDetails:any[];

  constructor(public dialog: MatDialog,private router:Router,private asService:AssetsService,
    private fsService:FirestoreService) { }

  ngOnInit() {
    this.assetDetails=[];
    this.asService.getAssetDetails().subscribe(
    (value)=>{
            this.assetDetails=value;
            });         
   }
  
  onAddClick(): void {

    const dialogRef = this.dialog.open(AddassetsComponent,{
      width: '300px',
    });
  }
  onEditClick(id){
    const dialogRef = this.dialog.open(EditassetsComponent,{
      data: {id},
      width: '450px',
    });
    // this.router.navigate(['editassets'], { queryParams: {id}});
  }
}
