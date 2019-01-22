import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private afs:AngularFirestore) { }
  addNewProject(data:any){
    console.log("works");
    console.log(data.client_company);
    console.log(data.company_name);
    this.afs.collection('project').doc(data.proj_id).set(
      {
        'project_id':data.proj_id,
        'project_name':data.proj_name,
        'project_type':data.proj_type,
        'client_company':data.company_name,
        'start_date':data.startDate,
        'end_date':data.endDate,
        'assigned_emp':data.assigned_emp,
      
      }
    )
}
}
