import { Component, OnInit,Input} from '@angular/core';
import { Salary } from '../../model/employee.model';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'exalt-salary-details',
  templateUrl: './salary-details.component.html',
  styleUrls: ['./salary-details.component.scss']
})
export class SalaryDetailsComponent implements OnInit {

  @Input() employee:any;
  @Input() id:string;
  
  editMode:boolean=false;
  salary:Salary={
    basicpay:"",
    hra:"",
    cedallow:"",
    medallow:"",
    speallow:"",
    conallow:"",
    total:"",

  }
  
  changebasicpay:boolean=false;
  changehra:boolean=false;
  changecedallow:boolean=false;
  changemedallow:boolean=false;
  changespeallow:boolean=false;
  changetotal:boolean=false;

  constructor(private fsService:FirestoreService) { }

  ngOnInit() {
  }
  onEditItem(){
    this.editMode=!this.editMode;
  }
  editBasicpay(event:any){
    this.salary.basicpay=event.target.textContent;
    this.changebasicpay=true;
    }
    editHra(event:any){
      this.salary.hra=event.target.textContent;
      this.changehra=true;
      }
      editMedallow(event:any){
        this.salary.medallow=event.target.textContent;
        this.changemedallow=true;
        }
        editCedallow(event:any){
          this.salary.cedallow=event.target.textContent;
          this.changecedallow=true;
          }
          editSpeallow(event:any){
            this.salary.speallow=event.target.textContent;
            this.changespeallow=true;
            }    
    save(){
    if(this.changebasicpay){
      this.fsService.updateSal(this.id,'basicpay',this.salary.basicpay);
      this.changebasicpay=false;}
    if(this.changehra){
        this.fsService.updateSal(this.id,'hra',this.salary.hra);
        this.changehra=false;}
    if(this.changemedallow){
          this.fsService.updateSal(this.id,'medallow',this.salary.medallow);
          this.changemedallow=false;}
    if(this.changecedallow){
            this.fsService.updateSal(this.id,'cedallow',this.salary.cedallow);
            this.changecedallow=false;}
    if(this.changespeallow){
              this.fsService.updateSal(this.id,'speallow',this.salary.speallow);
              this.changespeallow=false;}
      this.editMode=false;
}
}
