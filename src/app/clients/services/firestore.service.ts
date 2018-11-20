import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreClientService {

  constructor(private afs:AngularFirestore) { }

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
}
