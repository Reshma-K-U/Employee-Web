import { Injectable } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  allemployee:any=[];
  totalsalary:number=0;
  private userDoc:AngularFirestoreDocument<any>;
  constructor(private afs:AngularFirestore,private psService:PayrollService) { }
  
  newEmployeeSalary(value:any){
    
     var employeeDocRef=this.afs.collection("payroll").doc(value.empid);
     var total=parseInt(value.basicpay)+parseInt(value.hra)+parseInt(value.speallow)+
     parseInt(value.medallow)+parseInt(value.cedallow);
    
employeeDocRef.
    set({
        
        'empid': value.empid,
        'empname':value.empname,
        'basicpay': value.basicpay,
        'hra':value.hra,
        'speallow': value.speallow,
        'medallow':value.medallow,
        'cedallow': value.cedallow,
        'total':total
    }) 

}
moreEmployeeSalary(more:any){
    var employeeDocRef=this.afs.collection("payroll").doc(more.empid).collection("salarydetails").ref.doc();
employeeDocRef.
    set({
        
        'empid': more.empid,
        'name':more.name,
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
         
        return data;
    
}
<<<<<<< HEAD
addtotalsalary(more){
    this.totalsalary=parseInt(more.basicpay)+parseInt(more.hra);
    // console.log(this.totalsalary);
    return this.totalsalary;
=======

getPayrollDetails(){
    var col = this.afs.collection('payroll');
        var data:any
        data = col.valueChanges();
         
        return data;
}
>>>>>>> aa6f29e52644d8bf457f5be3a187ce3b48e2fbce
}

}