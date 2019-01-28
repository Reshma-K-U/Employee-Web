import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreClientService {

  task: AngularFireUploadTask;
  downloadURL: Observable<string>;

  constructor(private afs:AngularFirestore,private storage: AngularFireStorage) { }

  addNewClient(data:any){
      this.afs.collection('clients').doc(data.client_id).set(
        {
          'client_id':data.client_id,
          'address':data.address,
          'alternative_email':data.alternative_email,
          'city':data.city,
          'company_name':data.company_name,
          'country':data.country,
          'currency':data.currency,
          'email':data.email,
          'fax':data.fax,
          'industry_type':data.industry_type,
          'mob_num':data.mob_num,
          'note':data.note,
          'phone':data.phone,
          'state':data.state,
          'website':data.website,
          'zip_code':data.zip_code,
          'status':'active',
        }
      )
  }

  getDataForList() {
    var array=[];
    this.afs.collection('clients').ref.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            array.push(doc.data());
        })
    })
    return array;
  }

  getData(id:string){
    var data:any
    data = this.afs.collection('clients').doc(id).valueChanges();
    return data;
  }

  remove(id:string){
    this.afs.collection('clients').doc(id).delete();
  }

  updateField(id:string,field:string,newVal:string){
    this.afs.collection('clients').doc(id).update({
      [""+field+""]:newVal
  })
  }

  update(data:any){
    this.afs.collection('clients').doc(data.client_id).update({
      'address':data.address,
      'alternative_email':data.alternative_email,
      'city':data.city,
      'company_name':data.company_name,
      'country':data.country,
      'currency':data.currency,
      'email':data.email,
      'fax':data.fax,
      'industry_type':data.industry_type,
      'mob_num':data.mob_num,
      'note':data.note,
      'phone':data.phone,
      'state':data.state,
      'website':data.website,
      'zip_code':data.zip_code,
      'status':'active',
    })
  }

  uploadLogo(file:File){
    console.log(file.name);
    var path= `test/${file.name}`;
    console.log(path);

    this.task=this.storage.upload(path,file);
    this.afs.collection('clients').doc('client001').update({
        'logoPath':path
    })
  }

  getImageUrl(id:string){
    var url :string
    var image:string;
    var ref;
    this.afs.collection('clients').doc(id).valueChanges().subscribe(
      data=>{
        url = data['logoPath'];
        ref = this.storage.ref(url);
        /* const downloadURL = ref.getDownloadURL().subscribe(url => { 
        console.log('hfhf',url); */
       
      })
      return ref.getDownloadURL();
}
}