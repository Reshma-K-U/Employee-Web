import { Injectable } from '@angular/core';
import { Basic, Personal, Work, Prev_Exp, Qualification, Dependents,Salary} from '../model/employee.model';
import {EmployeeService} from '../services/employee.services';
import {Employee} from '../model/employee.model';
import { FirestoreService } from '../../services/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class AddemployeeService {

  newEmp:Employee={
    basic:{firstname:'',lastname:'',emp_id:'',gender:'',email:''},
    personal:{ marrital_status:'',address:'',date_of_birth:'',mob_num:'',other_email:'',accnt_num:'13568988',pan_num:'AZV977636',aadhar_num:'933545544',passport_num:'AZV54887858'},
    work:{department:'',location:'',hire_source:'',role:'',status:'',joining_date:'',employee_type:'',},
    prev_exp:[
      {company_name:'',job_title:'',fromDate:'',toDate:'',job_description:''},
    ],
    qualification:[
      {course:'',specialization:'',institute:'',university:'',percentage:''},
    ],
     salary:
       {basicpay:'',hra:'',cedallow:'',medallow:'',speallow:'',conallow:'',total:'0'},

      about:'',
    dependents:[
      {name:'',relation:'',occupation:''},
      {name:'',relation:'',occupation:''},
      {name:'',relation:'',occupation:''},
    ],
    
  }
  public basic:Basic;
  public personal:Personal;
  public work:Work;
  public prev_exp:Prev_Exp[];
  public qual:Qualification[];
  public dependents:Dependents[];
  public sal:Salary;
  about:string;
  constructor(private empService:EmployeeService,private fsService:FirestoreService) { }
  ngOnInit(){}

  setBasic(bas:Basic){
    this.newEmp.basic=bas;
  }
  setPersonal(pers:Personal){
    this.newEmp.personal=pers;
}
setWork(work:Work){
  this.newEmp.work=work;
}
setPrev_Exp(exp:Prev_Exp[]){
  this.newEmp.prev_exp=exp;
}
setQualification(qual:Qualification[]){
  this.newEmp.qualification=qual;
}
setDependents(dep:Dependents[]){
  this.newEmp.dependents=dep;
}
setAbout(abt:string){
  this.newEmp.about=abt;
  this.empService.addEmployee(this.newEmp);
  this.fsService.addEmployee(this.newEmp);
}
setSalary(sal:Salary){
  this.newEmp.salary=sal;
}


}

