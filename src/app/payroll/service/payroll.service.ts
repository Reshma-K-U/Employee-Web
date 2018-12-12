import { Injectable, Input } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  allemployee:any=[];
  private userDoc:AngularFirestoreDocument<any>;
  constructor(private afs:AngularFirestore,private psService:PayrollService) { }
  
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
        'total':"",
    }) 

}
moreEmployeeSalary(more:any,date:Date){
    var employeeDocRef=this.afs.collection("payroll").doc(more.empid).collection("salarydetails").ref.doc(date.toString());
    
    var updatetotal=parseInt(more.basicpay)+parseInt(more.hra)+parseInt(more.speallow)+
    parseInt(more.medallow)+parseInt(more.cedallow)+parseInt(more.bonus)+parseInt(more.arrears)+
    parseInt(more.gwp)+parseInt(more.esi)+parseInt(more.advance)+parseInt(more.it)+
    parseInt(more.others)+parseInt(more.totded)+parseInt(more.wwf);
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
        'total':updatetotal,
    }) 

    this.afs.collection("payroll").doc(more.empid).update({
        'total' :  updatetotal,
        'empid': more.empid,
        'basicpay': more.basicpay,
        'hra':more.hra,
        'speallow': more.speallow,
        'medallow':more.medallow,
        'cedallow': more.cedallow,
  })
  
}
moreEmpFill(id:string){
        id=id.replace(/\s/g, "");

        this.userDoc = this.afs.collection('payroll').doc(id);
        var data:any
        data = this.userDoc.valueChanges();
         
        return data;
    
}

getPayrollDetails(){
    var col = this.afs.collection('payroll');
    var data:any
        data = col.valueChanges();
        return data;
    } 



    resetEmployeeSalary(){
        var col = this.afs.collection('payroll');
    col.ref.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        var cityRef = col.doc(doc.id);
        cityRef.update({
            'total':""
        })
    });
});
    } 

    salarySlipFill(id:string,date:string){
        id=id.replace(/\s/g, "");
        this.userDoc = this.afs.collection('payroll').doc(id).collection('salarydetails').doc(date);
        var data:any
        data = this.userDoc.valueChanges();
        return data;

    
}



}
