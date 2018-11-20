import { Component, OnInit,Input } from '@angular/core';
import {Prev_Exp} from '../../model/employee.model';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { NewexperienceComponent } from './newexperience/newexperience.component';
import { FirestoreService } from '../../../services/firestore.service';
@Component({
  selector: 'exalt-prev-experience-details',
  templateUrl: './prev-experience-details.component.html',
  styleUrls: ['./prev-experience-details.component.scss']
})
export class PrevExperienceDetailsComponent implements OnInit {
  @Input() exp:any[];
  @Input() id:string;
  
  editMode:boolean=false;
  constructor(public dialog:MatDialog,private fsService:FirestoreService) { }

  ngOnInit() {
  }

  onEditItem(event:any){
      this.editMode=!this.editMode;
  }

  onNewExperience(){
    this.dialog.open(NewexperienceComponent,{
      data:{id:this.id}
    });
  }

  editName(event:any,index:number){
    
    this.exp[index].company_name=event.target.textContent;
  }

  editTitle(event:any,index:number){
    
    this.exp[index].job_title=event.target.textContent;
  }

  editDescription(event:any,index:number){
    this.exp[index].description=event.target.textContent;
  }

  editFrom(event:any,index:number){
    this.exp[index].from=event.target.textContent;
  }

  editTo(event:any,index:number){
    this.exp[index].to=event.target.textContent;
  }

  save(){

    this.fsService.updateExp(this.id,this.exp);
      this.editMode=false;
  }

}
