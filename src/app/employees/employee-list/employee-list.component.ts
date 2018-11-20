import { Component, OnInit,Output } from '@angular/core';
import {Router} from  '@angular/router';
import {Employee} from '../model/employee.model';
import{EmployeeService} from '../services/employee.services';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'exalt-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  i:number;
  add:boolean=false;
  allEmployees:any= [];
  dataAvailable:boolean=false;

  constructor(private empService:EmployeeService,private fsService:FirestoreService,private router:Router) { 
  }
  
  
  loadAddComponent(){
    this.add=true;
    this.router.navigateByUrl('/add');
  }

 
  ngOnInit() {
    this.allEmployees=this.fsService.getDataForList();
  }

} 







    
      
    
  


