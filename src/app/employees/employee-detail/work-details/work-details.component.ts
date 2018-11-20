import { Component, OnInit,Input} from '@angular/core';
import{Employee, Work} from '../../model/employee.model'
import { FirestoreService } from '../../../services/firestore.service';

@Component({
  selector: 'exalt-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.scss']
})
export class WorkDetailsComponent implements OnInit {
  @Input() employee:any;
  @Input() id:string;
  
  editMode:boolean=false;
  work:Work={
    location:" ",
    department:" ",
    joining_date:" ",
    hire_source:" ",
    employee_type:" ",
    status:" ",
    role:" ",
  }
  
  changeDepartment:boolean=false;
  changeLocation:boolean=false;
  changeJoinDate:boolean=false;
  changeHireSource:boolean=false;
  changeEmployeeType:boolean=false;
  changeStatus:boolean=false;
  changeRole:boolean=false;
  
  constructor(private fsService:FirestoreService) { }

  ngOnInit() {
  }

  onEditItem(){
    this.editMode=!this.editMode;}

    editDepartment(event:any){
      this.work.department=event.target.textContent;
      this.changeDepartment=true;
      }
    editLocation(event:any){
      this.work.location=event.target.textContent;
      this.changeLocation=true;
      }
    editHireSource(event:any){
      this.work.hire_source=event.target.textContent;
      this.changeHireSource=true;
      }
    editJoinDate(event:any){
      this.work.joining_date=event.target.textContent;
      this.work.joining_date=new Date(this.work.joining_date).toDateString();
      this.changeJoinDate=true;
      }
    editStatus(event:any){
      this.work.status=event.target.textContent;
      this.changeStatus=true;
      }
    editRole(event:any){
      this.work.role=event.target.textContent;
      this.changeRole=true;
      }
    editEmployeeType(event:any){
      this.work.employee_type=event.target.textContent;
      this.changeEmployeeType=true;
      }

      save(){
          if(this.changeDepartment){
          this.fsService.update(this.id,'department',this.work.department);
          this.changeDepartment=false;}
        
          if(this.changeLocation){
          this.fsService.update(this.id,'work_location',this.work.location);
          this.changeLocation=false;}
        
          if(this.changeHireSource){
          this.fsService.update(this.id,'hire_source',this.work.hire_source);
          this.changeHireSource=false;}
        
          if(this.changeJoinDate){
          this.fsService.update(this.id,'joining_date',this.work.joining_date);
          this.changeJoinDate=false;}
        
          if(this.changeRole){
          this.fsService.update(this.id,'role',this.work.role);
          this.changeRole=false;}
        
          if(this.changeStatus){
          this.fsService.update(this.id,'status',this.work.status);
          this.changeStatus=false;}
        
          if(this.changeEmployeeType){
          this.fsService.update(this.id,'employee_type',this.work.employee_type);
          this.changeEmployeeType=false;}
        
         this.editMode=false;
        }
      
}








