import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/'
@Component({
  selector: 'exalt-employee-term',
  templateUrl: './employee-term.component.html',
  styleUrls: ['./employee-term.component.scss']
})
export class EmployeeTermComponent implements OnInit {
  id: string;
  subscription: Subscription;
  employee: any = null;
  constructor(private route: ActivatedRoute,  private emp: FirestoreService ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.subscription = this.emp.getData(this.id).subscribe(
      (value) => {
       this.employee= value;
  });

}
}
