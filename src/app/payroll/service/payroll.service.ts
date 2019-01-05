import { Injectable, Input } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { ValueTransformer } from '@angular/compiler/src/util';
import { of, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  allemployee:any=[];
  date1:any=[];
  hra1:Number;

  private userDoc:AngularFirestoreDocument<any>;
  constructor(private afs:AngularFirestore,private psService:PayrollService) { }
  
   newEmployeeSalary(value:any){
    
     var employeeDocRef=this.afs.collection("employees").doc(value.empid);
     var hra=parseInt(value.basicpay)*0.5;
     var medallow=parseInt(value.basicpay)*0.4;
     var cedallow=parseInt(value.basicpay)*0.3;
     var speallow=parseInt(value.basicpay)*0.2;
     console.log(hra);
     console.log(medallow);
employeeDocRef.
    set({
        
         'empid': value.empid,
        'empname':value.empname,
        'basicpay': value.basicpay,
         'hra':hra,
        'speallow': speallow,
        'medallow':medallow,
        'cedallow': cedallow,
        'total':"",
         
    }) 
    return true;
} 
moreEmployeeSalary(more:any,date:Date){
    var date1=date.getDate();
    var month=date.getMonth();
    var year=date.getFullYear();
    var employeeDocRef=this.afs.collection("payroll").doc(more.empid).collection("salarydetails").
    ref.doc(year.toString()).collection(month.toString()).doc(date1.toString());
    
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
        'advance':more.advance,
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
        // id=id.replace(/\s/g, "");

        this.userDoc = this.afs.collection('employees').doc(id);
        var data:any
        data = this.userDoc.valueChanges();
         
        return data;
    
}

getPayrollDetails(){

        var col = this.afs.collection('employees');
        var data:any
        // data = col.snapshotChanges();
        data=col.valueChanges();
        return data;
}

/* setDetail(val:any){
    var employeeDocRef=this.afs.collection("payroll").doc(val.emp_id);
    employeeDocRef.
        set({
           'empid': val.emp_id,
           'name':val.name,
           'hra':val.hra,
           'basicpay':val.basicpay,
           'cedallow':val.cedallow,
           'medallow':val.medallow,
           'speallow':val.speallow,
           'total':val.total,
        })

} */
        

    getTotal(){
        var col = this.afs.collection('payroll');
        var data:any
        data = col.snapshotChanges();
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

    salarySlipFill(id:string,d:Date){
        var date= new Date(d);
        var day=date.getDate();
        var month=date.getMonth();
        var year=date.getFullYear();
        //  id=id.replace(/\s/g, "");    
          this.userDoc = this.afs.collection('payroll').doc(id).collection('salarydetails').doc(year.toString())
         .collection(month.toString()).doc(day.toString());
        var data:any
        data = this.userDoc.valueChanges();
        return data;
    }

    empNameDetails(id:string){
        console.log(id);
        var userDoc = this.afs.collection('employees').doc(id);
        var data:any
        data = this.userDoc.valueChanges();
        console.log(data);
        return data;
    }

    getPayrollDetails1(id:any){

        var col = this.afs.collection('employees').doc(id);
        var data:any
        data = col.valueChanges();
        return data;
    } 
}