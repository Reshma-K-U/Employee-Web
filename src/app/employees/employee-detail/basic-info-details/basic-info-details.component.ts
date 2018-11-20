import { Component, OnInit,Input } from '@angular/core';
import {Employee, Basic} from '../../model/employee.model'
import { Subscription } from 'rxjs/Subscription';
import { FirestoreService } from '../../../services/firestore.service';

@Component({
  selector: 'exalt-basic-info-details',
  templateUrl: './basic-info-details.component.html',
  styleUrls: ['./basic-info-details.component.scss']
})
export class BasicInfoDetailsComponent implements OnInit {

  editMode:boolean=false;
  @Input() employee:any;
  @Input() id:string;
  
  basic:any={
    name:" ",
    emp_id:" ",
    gender:" ",
    email:" ",
  }
  changeName:boolean=false;
  changeGender:boolean=false;
  changeEmail:boolean=false;

  constructor(private fsService:FirestoreService) { }
  
  ngOnInit() {
  }

  onEditItem(){
    this.editMode=!this.editMode;
}


editName(event:any){
  this.basic.name=event.target.textContent;
  this.changeName=true;
}
editGender(event:any){
  this.basic.gender=event.target.textContent;
  this.changeGender=true;
}
editEmail(event:any){
  this.basic.email=event.target.textContent;
  this.changeEmail=true;
}

save(){
  if(this.changeName){
  this.fsService.update(this.id,'name',this.basic.name);
  this.changeName=false;}
  if(this.changeGender){
  this.fsService.update(this.id,'gender',this.basic.gender);
  this.changeGender=false;}
  if(this.changeEmail){
  this.fsService.update(this.id,'email',this.basic.email);
  this.changeEmail=false;}
  this.editMode=false;
}

delete(){
  
}
}
