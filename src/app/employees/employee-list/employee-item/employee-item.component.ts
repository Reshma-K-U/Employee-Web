import { Component, OnInit,Input } from '@angular/core';
import {Employee} from '../../model/employee.model';
import { FirestoreService } from '../../../services/firestore.service';

@Component({
  selector: 'exalt-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {
  
  @Input() employee:any;
  loadEmployee:boolean=false;
  selected:boolean=false;

  constructor(private fsService:FirestoreService) { }

  ngOnInit() { 
  }

  loadDetails(){
      this.loadEmployee=true;
      // this.fsService.getData(this.employee.emp_id);
  }

  select(event:any){
    this.selected=true;
  }

  remove(){
    this.fsService.remove(this.employee.emp_id);
  }

  cancel(){
    this.selected=false;
  }

}




  