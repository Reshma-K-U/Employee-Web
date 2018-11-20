import { Component, OnInit,Input } from '@angular/core';
import {Qualification} from '../../model/employee.model';
import {NewqualificationComponent} from './newqualification/newqualification.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FirestoreService } from '../../../services/firestore.service';

@Component({
  selector: 'exalt-qualification-details',
  templateUrl: './qualification-details.component.html',
  styleUrls: ['./qualification-details.component.scss']
})
export class QualificationDetailsComponent implements OnInit {
  @Input() qual:Qualification[];
  @Input() id:string;

  editMode:boolean=false;
  
  constructor(public dialog:MatDialog,private fsService:FirestoreService) { }

  ngOnInit() {

  }

  onEditItem(){
    this.editMode=!this.editMode;
  }

  onAddqualification(event:any){
    const dialogRef = this.dialog.open(NewqualificationComponent,{
      data: {id:this.id}
    });

  }

  editCourse(event:any,index:number){
    this.qual[index].course=event.target.textContent;
  }

  editSpecialization(event:any,index:number){
    this.qual[index].specialization=event.target.textContent;
  }

  editInstitute(event:any,index:number){
    this.qual[index].institute=event.target.textContent;
  }

  editUniversity(event:any,index:number){
    this.qual[index].university=event.target.textContent;
  }

  editPercentage(event:any,index:number){
    this.qual[index].percentage=event.target.textContent;
  }

  save(){
    this.fsService.updateQual(this.id,this.qual);
    this.editMode=false;
  }


}



