import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from 'angularfire2/storage';
import {Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  task: AngularFireUploadTask;

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { }
  addNewProject(data: any) {

  console.log(data);
    this.afs.collection('project').doc(data.proj_id).set(
      {
        'project_id': data.proj_id,
        'project_name': data.proj_name,
        'project_type': data.proj_type,
        'client_id': data.client_id,
        'client_company': data.client_company,
        'start_date': data.startDate,
        'assigned_emp': data.assigned_emp,
        'agent_name': data.agent_name,

      }
    )
}


getDataForList() {
  var array = [];
  this.afs.collection('project').ref.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          array.push(doc.data());
      });
  })
  return array;
}
getData(id: string) {
  var data: any;
  data = this.afs.collection('project').doc(id).valueChanges();
  return data;
}
getdoc(id: string) {
   return this.afs.collection('project').doc(id).collection('documents').valueChanges();

}

remove(id: string) {
  this.afs.collection('project').doc(id).delete();
}


update(data: any) {
  console.log(data.project_id);
  this.afs.collection('project').doc(data.project_id).update({

        'project_name': data.project_name,
        'project_type': data.project_type,
        'client_company': data.client_company,
        'start_date': data.start_date,
        'assigned_emp': data.assigned_emp,

  });

}
createNewInvoice(details: any, client: any) {

  const year = new Date().getFullYear();
  const month = new Date().getMonth();
     this.afs.collection('invoices').doc(year.toString()).collection(month.toString())
    .doc(details.invoice_num).set({
      'client_address': client.address,
      'client_country': client.country,
      'client_state': client.state,
      'client_name': details.client_company,
      'project_name': details.project_name,
      'project_id' : details.project_id,
      'invoice_id': details.invoice_num,
      'due_on_receipt': details.due_on_receipt,
      'due_date': details.due_date,
      'data': details.data,
      'subtotal': details.subTotal,
      'igst': details.igst,
      'cgst': details.cgst,
      'sgst': details.sgst,
      'total': details.total
    });
}
getInvoiceDetails(project_id: string, invoice_id: string ) {
  return this.afs.collection('project').doc(project_id).collection('invoices')
  .doc(invoice_id).valueChanges();
}

uploadLogo( project_id: string , file: File ) {
  // const path = 'ClientLogos/'${ clientId }'/'${file.name};

  const path = `Projectdocs/${project_id}/${file.name}`;
  this.task = this.storage.upload(path, file);
  this.afs.collection('project').doc(project_id).collection('documents').doc(file.name).set({
      'DocPath': path,
      'name' : file.name
  });
}
getImageUrl(path: string) {
  const ref: AngularFireStorageReference = this.storage.ref(path);
  return ref.getDownloadURL();
}





}
