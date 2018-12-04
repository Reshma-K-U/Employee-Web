import { Injectable } from '@angular/core';
import { FirestoreService} from '../../services/firestore.service';
import { AngularFirestore } from 'angularfire2/firestore';
import {of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  allEmployees:any= [];
  onDate:Date;


  constructor(private fsService:FirestoreService, private afs:AngularFirestore) { }

getLeaveDetails(date:Date){
    var data:any[]=[];
    this.afs.collection('leaves').ref.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(leaveDoc) {
        var value=leaveDoc.data();
    
        if(date.getTime()==value.on.toDate().getTime()){
        
            data.push(value);
        }
    })
    })
    return of(data);
}

}



