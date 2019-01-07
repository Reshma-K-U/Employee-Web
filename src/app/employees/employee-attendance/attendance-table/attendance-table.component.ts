import { Component, OnInit } from '@angular/core';
import { FirestoreLeaveService } from '../../../home/leave-details/services/firestore-leave.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'exalt-attendance-table',
  templateUrl: './attendance-table.component.html',
  styleUrls: ['./attendance-table.component.scss']
})
export class AttendanceTableComponent implements OnInit {
<<<<<<< HEAD
  
  id:string;
  totalLeavesTaken:number;
=======
>>>>>>> 8702b807b2f10c421d92c56aba20c72ef3b12d3d

  constructor() { }

  ngOnInit() {

    /* this.id = this.route.snapshot.paramMap.get('id');
    this.fsLeaveService.readLeavesTaken(this.id).subscribe(
      (value)=>{
        this.totalLeavesTaken=value.length;
      }
    )
 */
  }

}
