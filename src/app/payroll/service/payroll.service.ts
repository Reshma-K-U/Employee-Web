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

  private userDoc:AngularFirestoreDocument<any>;
  constructor(private afs:AngularFirestore) { }
  
   newEmployeeSalary(value:any){
    
     var employeeDocRef=this.afs.collection("employees").doc(value.empid);
     var hra=parseInt(value.basicpay)*0.5;
     var medallow=parseInt(value.basicpay)*0.4;
     var cedallow=parseInt(value.basicpay)*0.3;
     var speallow=parseInt(value.basicpay)*0.2;
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
    var docRef =  this.afs.collection("payroll").doc(more.empid);
    var employeeDocRef=docRef.collection(year.toString()).ref.doc(month.toString());
    
    var updatetotal=parseInt(more.basicpay)+parseInt(more.hra)+parseInt(more.speallow)+
    parseInt(more.medallow)+parseInt(more.cedallow)+parseInt(more.bonus)+parseInt(more.arrears)+
    parseInt(more.gwp)-parseInt(more.esi)-parseInt(more.advance)-parseInt(more.it)-
    parseInt(more.others)-parseInt(more.totded)+parseInt(more.wwf);
    
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
        'advance':more.advance,
        'it': more.it,
        'others':more.others,
        'totded': more.totded,
        'total':updatetotal,
        'day':date1,
    }) 

    docRef.update({
        'total':updatetotal
    })


  
}






moreEmpFill(id:string){

        this.userDoc = this.afs.collection('payroll').doc(id);
        var data:any
        data = this.userDoc.valueChanges();
         
        return data;
    
}

getPayrollDetails(){
    this.afs.collection('employees').valueChanges().subscribe(data=>{
    data.forEach(val=>{
        this.afs.collection('payroll').doc(val['emp_id']).set({
            'empid': val['emp_id'],
            'name':val['name'],
            'join_date':val['joining_date'],
            'basicpay': val['basicpay'],
            'hra':val['hra'],
            'speallow': val['speallow'],
            'medallow':val['medallow'],
            'cedallow': val['cedallow'],
            'total':val['total'],
            'conallow':val['conallow'],
        })
    })
    })

    return this.afs.collection('payroll').snapshotChanges();
}


    getAllPayroll(value:any,date:Date){
        var date1=date.getDate();
        var month=date.getMonth();
        var year=date.getFullYear(); 
        var id=value;
        this.userDoc = this.afs.collection('payroll').doc(id).collection(year.toString()).doc(month.toString());
        var data:any
        data = this.userDoc.valueChanges();
        return data;
    }

    accountStatement(date:Date){
        date=new Date(date);
        var month=date.getMonth();
        var year=date.getFullYear();
        var data:any=[];
        this.afs.collection('payroll').valueChanges().subscribe(
            d=>{
                d.forEach(val=>{
                     this.afs.collection('payroll').doc(val['empid']).collection(year.toString())
                    .doc(month.toString()).valueChanges().subscribe(value=>{
                        data.push(value);
                    })
                })
            }
        )
        
        
        // data = this.userDoc.valueChanges();
        return of(data);
    }

   
    salarySlipFill(id:string,month,year){  
        month=month-1;
        this.userDoc = this.afs.collection('payroll').doc(id).collection(year.toString()).doc(month.toString());
        var data:any
        data = this.userDoc.valueChanges();
        return data;
    }
    formatDate(date:Date){
        var date= new Date(date);
        var month=date.getMonth();
        month=month+1;
        var year=date.getFullYear();
        var day=month+"/"+year;
        return day;
    }
}