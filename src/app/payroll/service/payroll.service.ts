import { Injectable } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  allemployee:any=[];
  private userDoc:AngularFirestoreDocument<any>;
  constructor(private fsService:FirestoreService,private afs:AngularFirestore,private psService:PayrollService,) { }
  
  getDataForList() {
    var docRef=this.afs.collection('employees');
    var array =[];
    docRef.ref.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            array.push(doc.data());
        })
    })
    return array;
};

  newEmployeeSalary(value:any){
    
     var employeeDocRef=this.afs.collection("payroll").doc(value.empid);
employeeDocRef.
    set({
        
        'empid': value.empid,
        'empname':value.empname,
        'basicpay': value.basicpay,
        'hra':value.hra,
        'speallow': value.speallow,
        'medallow':value.medallow,
        'cedallow': value.cedallow,
    }) 

}
moreEmployeeSalary(more:any){
     console.log(more);
    var employeeDocRef=this.afs.collection("payroll").doc(more.empid);
employeeDocRef.
    set({
        
        'empid': more.empid,
        'basicpay': more.basicpay,
        'hra':more.hra,
        'speallow': more.speallow,
        'medallow':more.medallow,
        'cedallow': more.cedallow,
        'bonus': more.bonus,
        'arrears':more.arrears,
        'gwp': more.gwp,
        'esi':more.esi,
        'wwf': more.wwf,
        'adavnce':more.advance,
        'it': more.it,
        'others':more.others,
        'totded': more.totded,
    }) 
}
moreEmpFill(id:string){
        id=id.replace(/\s/g, "");

        this.userDoc = this.afs.collection('payroll').doc(id);
        var data:any
        data = this.userDoc.valueChanges();
         console.log(data);
        return data;
    
}
}
