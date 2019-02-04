import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from 'angularfire2/storage';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreClientService {

  task: AngularFireUploadTask;
  downloadURL: Observable<string>;

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { }

  addNewClient(data: any) {
      this.afs.collection('clients').doc(data.client_id).set(
        {
          'client_id': data.client_id,
          'address': data.address,
          'alternative_email': data.alternative_email,
          'city': data.city,
          'company_name': data.company_name,
          'country': data.country,
          'currency': data.currency,
          'email': data.email,
          'fax': data.fax,
          'industry_type': data.industry_type,
          'mob_num': data.mob_num,
          'note': data.note,
          'phone': data.phone,
          'state': data.state,
          'website': data.website,
          'zip_code': data.zip_code,
          'status': 'active',
        }
      );
  }

  getDataForList() {
    const array = [];
    this.afs.collection('clients').ref.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            array.push(doc.data());
        });
    });
    return array;
  }

  getData(id: string) {
    let data: any;
    data = this.afs.collection('clients').doc(id).valueChanges();
    return data;
  }

  remove(id: string) {
    this.afs.collection('clients').doc(id).delete();
  }

  updateField(id: string, field: string, newVal: string) {
    this.afs.collection('clients').doc(id).update({
      ['' + field + '']: newVal
  });
  }

  update(data: any) {
    this.afs.collection('clients').doc(data.client_id).update({
      'address': data.address,
      'alternative_email': data.alternative_email,
      'city': data.city,
      'company_name': data.company_name,
      'country': data.country,
      'currency': data.currency,
      'email': data.email,
      'fax': data.fax,
      'industry_type': data.industry_type,
      'mob_num': data.mob_num,
      'note': data.note,
      'phone': data.phone,
      'state': data.state,
      'website': data.website,
      'zip_code': data.zip_code,
      'status': 'active',
    });
  }

  uploadLogo(file: File , clientid: string) {
    // const path = 'ClientLogos/'${ clientId }'/'${file.name};
    const path = `ClientLogos/${clientid}_${file.name}`;
    console.log(path);
    this.task = this.storage.upload(path, file);
    this.afs.collection('clients').doc(clientid).update({
        'logoPath': path
    });
  }

  getImageUrl(path: string) {
    const ref: AngularFireStorageReference = this.storage.ref(path);
    return ref.getDownloadURL();
  }

  getProjects(clientName: string) {
    const data: any[] = [];
    const docRef = this.afs.collection('project');
    const query = docRef.ref.where('client_company', '==', clientName);
    query.get().then( (querySnapshot) => {
      if (querySnapshot.empty) {
        console.log('not found');
      } else {
        querySnapshot.docs.map( (documentSnapshot) => {
          data.push(documentSnapshot.data());
        });
      }
    });
    return of(data);
  }

  createNewInvoice(details: any, client: any) {
      this.afs.collection('clients').doc(client.data.client_id).collection('invoices')
      .doc(details.invoice_num).set({
        'client_name': client.data.company_name,
        'client_address': client.data.address,
        'invoice_num': details.invoice_num,
        'project_name': details.project,
        'due_on_receipt': details.dueOnR,
        'due_date': details.dueDate,
        'total_hours': details.total_hours,
        'unit_price': details.unit_price,
        'project_description': details.about,
        'line_total': details.line_total,
      });
  }
  getInvoiceDetails(client_id: string, invoice_id: string) {
    return this.afs.collection('clients').doc(client_id).collection('invoices')
    .doc(invoice_id).valueChanges();
  }
}
