import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Dependents} from '../../model/employee.model';
import { NgForm } from '@angular/forms';
import { AddemployeeService } from '../addemployee.service';

@Component({
  selector: 'exalt-dependents',
  templateUrl: './dependents.component.html',
  styleUrls: ['./dependents.component.scss']
})
export class DependentsComponent implements OnInit {
  
  /* dependents:Dependents[];
  i:number;
  constructor(private addService:AddemployeeService) { }

  ngOnInit() {
    console.log();
   
  }
  onAdd(form:NgForm){
    const value=form.value;
    console.log(value);
    this.dependents=[
      {
        name:value.firstDependentName,
        relation: value.firstDependentRelation,
        occupation: value.firstDependentOccupation,
      },
      {
        name:value.secondDependentName,
        relation: value.secondDependentRelation,
        occupation: value.secondDependentOccupation,
      },
      {
        name:value.thirdDependentName,
        relation: value.thirdDependentRelation,
        occupation: value.thirdDependentOccupation,
      },
    ];
    this.addService.setDependents(this.dependents);
   
} */

dependents:Dependents[]=[];
  newAttribute: Dependents={
    name:" ",
    relation:" ",
    occupation:" ",
  };
  
  
  constructor(private addService:AddemployeeService) { }

  ngOnInit() {
  }


  addField() {
    
    this.dependents.push(this.newAttribute);
      this.newAttribute={
        name:" ",
        relation:" ",
        occupation:" ",

      }

      this.onAdd();
    }

    onAdd(){
      this.addService.setDependents(this.dependents);
    }

}




