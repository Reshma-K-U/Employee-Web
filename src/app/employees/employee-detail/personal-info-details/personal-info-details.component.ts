import { Component, OnInit,Input } from '@angular/core';
import {Employee, Personal} from '../../model/employee.model';
import { FirestoreService } from '../../../services/firestore.service';
@Component({
  selector: 'exalt-personal-info-details',
  templateUrl: './personal-info-details.component.html',
  styleUrls: ['./personal-info-details.component.scss']
})
export class PersonalInfoDetailsComponent implements OnInit {
  @Input() employee:any;
  @Input() id:string;
  editMode:boolean=false;
  personal:Personal={
    marrital_status:" ",
    address:" ",
    mob_num:" ",
    pan_num:" ",
    passport_num:" ",
    aadhar_num:" ",
    accnt_num:" ",
    date_of_birth:" ",
    other_email:" ",
  }

  changeMarritalStatus:boolean=false;
changeAddress:boolean=false;
changeDob:boolean=false;
changeMob:boolean=false;
changeEmail:boolean=false;
changeAccount:boolean=false;
changePan:boolean=false;
changeAadhar:boolean=false;
changePassport:boolean=false;
  
constructor(private fsService:FirestoreService) { }

  ngOnInit() {
  }


  onEditItem(){
    this.editMode=!this.editMode;
}



editMarritalStatus(event:any){
this.personal.marrital_status=event.target.textContent;
this.changeMarritalStatus=true;
}
editAddress(event:any){
this.personal.address=event.target.textContent;
this.changeAddress=true;
}
editDob(event:any){
this.personal.date_of_birth=event.target.textContent;
this.personal.date_of_birth=new Date(this.personal.date_of_birth).toDateString();
this.changeDob=true;
}
editMob(event:any){
this.personal.mob_num=event.target.textContent;
this.changeMob=true;
}
editEmail(event:any){
this.personal.other_email=event.target.textContent;
this.changeEmail=true;
}
editAadhar(event:any){
  this.personal.aadhar_num=event.target.textContent;
  this.changeAadhar=true;
}
editAccount(event:any){
  this.personal.accnt_num=event.target.textContent;
  this.changeAccount=true;
}
editPan(event:any){
  this.personal.pan_num=event.target.textContent;
  this.changePan=true;
}
editPassport(event:any){
  this.personal.passport_num=event.target.textContent;
  this.changePassport=true;
}

save(){
if(this.changeMarritalStatus){
this.fsService.update(this.id,'marrital_status',this.personal.marrital_status);
this.changeMarritalStatus=false;}

if(this.changeDob){
this.fsService.update(this.id,'dob',this.personal.date_of_birth);
this.changeDob=false;}

if(this.changeAddress){
this.fsService.update(this.id,'address',this.personal.address);
this.changeAddress=false;}

if(this.changeMob){
this.fsService.update(this.id,'mob_num',this.personal.mob_num); 
this.changeMob=false;}

if(this.changeEmail){
this.fsService.update(this.id,'other_email',this.personal.other_email); 
this.changeEmail=false;}

if(this.changeAadhar){
this.fsService.update(this.id,'aadhar_num',this.personal.aadhar_num);  
this.changeAadhar=false;}

if(this.changePassport){
this.fsService.update(this.id,'passport_num',this.personal.passport_num);  
this.changePassport=false;}

if(this.changeAccount){
this.fsService.update(this.id,'bank_accnt_num',this.personal.accnt_num); 
this.changeAccount=false;}

if(this.changePan){
this.fsService.update(this.id,'pan_num',this.personal.pan_num);  
this.changePan=false;}
this.editMode=false;
}
}
