import { Component, OnInit, Input } from '@angular/core';
import {Employee} from '../../model/employee.model';
import { FirestoreService } from '../../../services/firestore.service';

@Component({
  selector: 'exalt-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {
  @Input() employee: any;
  imageUrl = 'assets/images/employee.png';
  logoPath = '';

  selected = false;

  constructor(private fsService: FirestoreService) { }

  ngOnInit() {
    this.logoPath = this.employee['logoPath'] ;
      this.fsService.getImageUrl(this.logoPath).subscribe(data => {
        this.imageUrl = data;
      });
  }


  select(event: any) {
    this.selected = true;
  }

  remove() {
    this.fsService.remove(this.employee.emp_id);
  }

  cancel() {
    this.selected = false;
  }

}




