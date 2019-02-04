import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private afs:AngularFirestore) { }
  addNewProject(data:any){
 
  
    this.afs.collection('project').doc(data.proj_id).set(
      {
        'project_id':data.proj_id,
        'project_name':data.proj_name,
        'project_type':data.proj_type,
        'client_company':data.client_company,
        'start_date':data.startDate,
        'end_date':data.endDate,
        'assigned_emp':data.assigned_emp,
      
      }
    )
}


getDataForList() {
  var array=[];
  this.afs.collection('project').ref.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          array.push(doc.data());
      })
  })
  return array;
}
getData(id:string){
  var data:any
  data = this.afs.collection('project').doc(id).valueChanges();
  return data;
}

remove(id:string){
  this.afs.collection('project').doc(id).delete();
}
}
