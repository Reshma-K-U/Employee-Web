import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  private userDoc:AngularFirestoreDocument<any>;
  constructor(private afs:AngularFirestore,private asService:AssetsService) { }

  addAssets(form:any,pur_date:Date){
    console.log(pur_date);
    var date= new Date(pur_date);
    var day=date.getDate();
    var month=date.getMonth();
    month=month+1;
    var year=date.getFullYear();
    var d=day+"/"+month+"/"+year;
    var employeeDocRef=this.afs.collection("assets").doc(form.itemid);
employeeDocRef.
   set({
       'itemid':form.itemid,
       'type':form.itemValue,
       'model':form.model,
       'company':form.company,
       'day':d,
       'employee':form.assign,
   })
}

searchAssets(form:any){
  var data:any[]=[];
  var docRef=this.afs.collection('assets');
  var query=docRef.ref.where("company","==",form.company);
  query.get().then( (querySnapshot) => {
    if(querySnapshot.empty){
        console.log("not found");
    }
    else
    {
        querySnapshot.docs.map( (documentSnapshot) => {
          data.push(documentSnapshot.data());
        })
      }
 
    });
    return data;
}

getAssetDetails(){
  var col = this.afs.collection('assets');
  var data:any
  // data = col.snapshotChanges();
  data=col.valueChanges();
  return data;
}

editFill(id){
  this.userDoc = this.afs.collection('assets').doc(id);
        var data:any
        data = this.userDoc.valueChanges();
        return data;
}
reAssign(form:any,date:Date){
  var day=date.getDate();
  var month=date.getMonth();
  month=month+1;
  var year=date.getFullYear();
  var d=day+"/"+month+"/"+year;
  var employeeDocRef=this.afs.collection("assets").doc(form.itemid);
employeeDocRef.
   update({
       'employee':form.assign,
       'day':d,
   })
}
}
