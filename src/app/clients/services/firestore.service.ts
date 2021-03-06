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

    this.task = this.storage.upload(path, file);
    this.afs.collection('clients').doc(clientid).update({
        'logoPath': path
    });
  }
  uploaddoc( clientid: string , file: File ) {
    // const path = 'ClientLogos/'${ clientId }'/'${file.name};

    const path = `Projectdocs/${clientid}/${file.name}`;
    this.task = this.storage.upload(path, file);
    this.afs.collection('clients').doc(clientid).collection('documents').doc(file.name).set({
        'DocPath': path,
        'name' : file.name
    });
  }
  uploadinvoice(file: File , invoice_id: string ){
    const year= new Date().getFullYear();
    const month= new Date().getMonth();
    const path = `invoicedocs/${year}/${invoice_id}`;
    this.task = this.storage.upload(path, file);
    this.afs.collection('invoices').doc(year.toString()).collection(month.toString())
      .doc(invoice_id).update({
        'DocPath': path,
        'name' : invoice_id
    });

  }
  getdoc(id: string) {
    return this.afs.collection('clients').doc(id).collection('documents').valueChanges();

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
      const year = new Date().getFullYear();
      const month = new Date().getMonth();
       this.afs.collection('invoices').doc(year.toString()).collection(month.toString())
      .doc(details.invoice_num).set({
        'client_name': client.data.company_name,
        'client_address': client.data.address,
        'client_country': client.data.country,
        'client_state': client.data.state,
        'invoice_num': details.invoice_num,
        'project_name': details.project_name,
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
  getInvoiceDetails(year: string, month: string, invoice_id: string) {
    return this.afs.collection('invoices').doc(year).collection(month)
    .doc(invoice_id).valueChanges();
  }
}
