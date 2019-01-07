import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Rx'
import { FirestoreService } from '../../../services/firestore.service';



@Component({
  selector: 'exalt-employee-leave-detail',
  templateUrl: './employee-leave-detail.component.html',
  styleUrls: ['./employee-leave-detail.component.scss']
})
export class EmployeeLeaveDetailComponent implements OnInit {

  id:string;
  subscription:Subscription;
  data:any;
  
  constructor(private route:ActivatedRoute,private fsService:FirestoreService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    // this.id=this.id.replace(/\s/g, "");
    this.subscription=this.fsService.getData(this.id).subscribe(
      (data)=>{
        this.data=data;
    
        this.subscription.unsubscribe();
      }
    )
  }

}
