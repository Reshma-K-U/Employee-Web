import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreLeaveService } from '../../../home/leave-details/services/firestore-leave.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'exalt-all-leaves',
  templateUrl: './all-leaves.component.html',
  styleUrls: ['./all-leaves.component.scss']
})
export class AllLeavesComponent implements OnInit {

  id:string;
 // subscription:Subscription;
  cl:any[]=[];
  sl:any[]=[];
  pl:any[]=[];
  ol:any[]=[];
  lop:any[]=[];
  co:any[]=[];
  data:any[]=[];

  constructor(private route:ActivatedRoute,private fsService:FirestoreLeaveService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
<<<<<<< HEAD
    this.fsService.readLeavesTaken(this.id).get().then( (querySnapshot) => {
      if(querySnapshot.empty){
            console.log("not found");
      }
      else
      {
        querySnapshot.docs.map( (documentSnapshot) => {
        this.data.push(documentSnapshot.data());

      });
    }
    console.log(this.data);
});

=======
    /*  this.subscription=this.fsService.readLeavesTaken(this.id).subscribe(
      (data)=>{
          this.data=data;
      })
      this.subscription.unsubscribe();  */
>>>>>>> 8702b807b2f10c421d92c56aba20c72ef3b12d3d
  }
}
