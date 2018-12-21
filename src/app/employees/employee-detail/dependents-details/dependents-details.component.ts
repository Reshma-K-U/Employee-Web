import { Component, OnInit,Input } from '@angular/core';
import {Employee, Dependents} from '../../model/employee.model';
import { FirestoreService } from '../../../services/firestore.service';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import {NewdependentComponent} from './newdependent/newdependent.component';


@Component({
  selector: 'exalt-dependents-details',
  templateUrl: './dependents-details.component.html',
  styleUrls: ['./dependents-details.component.scss']
})
export class DependentsDetailsComponent implements OnInit {
  @Input() dep:Dependents[];
  @Input() id:string;
  
  editedDep:Dependents[];
  editMode:boolean=false;
  
  constructor(private fsService:FirestoreService,public dialog:MatDialog) { }

  ngOnInit() {
    this.editedDep=[];
  }

  onEditItem(){
      this.editMode=!this.editMode;
  }

  editName(event:any,index:number){
   this.dep[index].name=event.target.textContent;
  }

  editRelation(event:any,index:number){
    this.dep[index].relation=event.target.textContent;
  }

  editOccupation(event:any,index:number){
    this.dep[index].occupation=event.target.textContent;
  }

  save(){
    this.fsService.updateDep(this.id,this.dep);
    this.editMode=false;
  }

  onNewDependent(){
    this.dialog.open(NewdependentComponent,{
      data:{id:this.id}
    });
  }

}
