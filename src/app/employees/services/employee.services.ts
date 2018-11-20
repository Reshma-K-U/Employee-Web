import {Employee} from '../model/employee.model';
// import {FirestoreService} from '../../services/firestore.service';


export class EmployeeService{

  constructor(){}

  employees : Employee [] = [];
  /* =[
    {
      basic:{firstname:'Reshma',lastname:' K U',emp_id:'em001',gender:'Female',email:'reshmak@exalture.com'},
      personal:{ marrital_status:'Married',address:'Chaithram Palakkad',date_of_birth:'1968-11-16T00:00:00',mob_num:'952455555',other_email:'reshma@xyz.com',accnt_num:'13568988',pan_num:'AZV977636',aadhar_num:'933545544',passport_num:'AZV54887858'},
      work:{department:'Development',location:'Kochi',hire_source:'Job Portals',role:'Web Developer',status:'Probation',joining_date:'1968-11-16T00:00:00',employee_type:'Trainee',},
      prev_exp:[
        {company_name:'Exalture',job_title:'Developer',fromDate:'1968-11-16T00:00:00',toDate:'1968-11-16T00:00:00',job_description:'Angular'},
      ],
      qualification:[
        {course:'Btech',specialization:'Computer Science & Engineering',institute:'gec pkd',university:'calicut',percentage:'75'},
      ],
        about:' Angular ,Firebase etc..',
      dependents:[
        {name:'arjun',relation:'husband',occupation:'sw engineer'},
        {name:'usha',relation:'Mother',occupation:'Teacher'},
      ],
      
    },
 ]; */
  
 
  


  ngOnInit() {
    // this.employees=[];
  }

  addEmployee(emp:Employee){
      this.employees.push(emp);
      console.log('new employee push');
    console.log(this.employees);
  }

  getEmployeeSize(){
    return this.employees.length;
  }

  getEmployee(id:number){
    return this.employees[id];
  }

  getAllEmployees(){
    return this.employees;
  }

}
 

