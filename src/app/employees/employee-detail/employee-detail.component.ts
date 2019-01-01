import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

import { FirestoreService } from '../../services/firestore.service';
import { Qualification,Dependents, Prev_Exp, Salary} from '../model/employee.model';
import { PayrollService } from 'src/app/payroll/service/payroll.service';

@Component({
  selector: 'exalt-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  
  employee:any=null;
  qual:Qualification[]=[];
  dep:Dependents[]=[];
  exp:Prev_Exp[]=[];
  sal:Salary[]=[];
  id:string;
  private subscription:Subscription;
  private qualSubscription:Subscription;
  private depSubscription:Subscription;
  private expSubscription:Subscription;
  private salSubscription:Subscription;

  constructor( private route: ActivatedRoute,private location: Location,private fsService:FirestoreService,
    pyService:PayrollService) {}

  ngOnInit() {
    
    this.id = this.route.snapshot.paramMap.get('id');
    this.subscription=this.fsService.getData(this.id).subscribe(
      (emp)=>{
        this.employee=emp;
      }
    )
    this.qualSubscription=this.fsService.getQual(this.id).subscribe(
      (qual)=>{
        this.qual=qual;
      }
    )
    this.depSubscription=this.fsService.getDep(this.id).subscribe(
      (dep)=>{
        this.dep=dep;
      }
    )


    // this.id = this.route.snapshot.paramMap.get('id');
    this.salSubscription=this.fsService.getSal(this.id).subscribe(
      (sal)=>{
        this.employee=sal;
      }
    )


    this.expSubscription=this.fsService.getExp(this.id).subscribe(
      (exp)=>{
        this.exp=exp;
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.qualSubscription.unsubscribe();
    this.depSubscription.unsubscribe();
    this.expSubscription.unsubscribe();
    this.salSubscription.unsubscribe();
  }

  
  

}
