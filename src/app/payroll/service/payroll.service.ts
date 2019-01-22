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
  totalsal:any=[];

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
        // 'empname':value.empname,
        'basicpay': value.basicpay,
        'hra':hra,
        'speallow': speallow,
        'medallow':medallow,
        'cedallow': cedallow,
        'total':"",
        // this.employees.push(emp);
    }) 
    return true;
}
moreEmployeeSalary(more:any,date:Date){
    console.log(date);
   var date1=date.getDate();
    var month=date.getMonth();
    var year=date.getFullYear();
    var docRef =  this.afs.collection("payroll").doc(more.empid);
    var employeeDocRef=this.afs.collection("payroll").doc(more.empid).collection(year.toString()).
    ref.doc(month.toString());
    
    var updatetotal=parseInt(more.basicpay)+parseInt(more.hra)+parseInt(more.speallow)+
    parseInt(more.medallow)+parseInt(more.cedallow)+parseInt(more.bonus)+parseInt(more.arrears)+
    parseInt(more.gwp)-parseInt(more.esi)-parseInt(more.advance)-parseInt(more.it)-
    parseInt(more.others)-parseInt(more.totded)+parseInt(more.wwf);
    console.log(updatetotal);
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
        'day':date1,
    }) 

    docRef.update({
        'isEdited':true
    })

//     this.afs.collection("payroll").doc(more.empid).update({
//         'total' :  updatetotal,
//         'empid': more.empid,
//         'basicpay': more.basicpay,
//         'hra':more.hra,
//         'speallow': more.speallow,
//         'medallow':more.medallow,
//         'cedallow': more.cedallow,
//   })
  
}



// createMoreDatabase(date:Date){
//     console.log("database request");
//     var date1=date.getDate();
//     var month=date.getMonth();
//     var year=date.getFullYear();
//     this.afs.collection('payroll').valueChanges().subscribe(
//         (value)=>{
//             value.forEach((emp,index)=>{
//                 var employeeDocRef=this.afs.collection("payroll").doc(emp['empid']).collection(year.toString()).
//                 ref.doc(month.toString());
//                 employeeDocRef.
//                 set({
                    
//                     'empid':"",
//                     'basicpay':0,
//                     'hra':0,
//                     'speallow':0,
//                     'medallow':0,
//                     'cedallow':0,
//                     'bonus':0,
//                     'arrears':0,
//                     'gwp':0,
//                     'esi':0,
//                     'wwf':0,
//                     'advance':0,
//                     'it':0,
//                     'others':0,
//                     'totded':0,
//                     'total':0,
//                     'day':date1,
//                 })
                 
//             })
//         }
//     )
//     console.log("database created");
// }




moreEmpFill(id:string){
        // id=id.replace(/\s/g, "");

        this.userDoc = this.afs.collection('payroll').doc(id);
        var data:any
        data = this.userDoc.valueChanges();
         
        return data;
    
}

getPayrollDetails(){

        var col = this.afs.collection('payroll');
        var data:any
        // data = col.snapshotChanges();
        data=col.valueChanges();
        console.log(data);
        return data;
}

totalSalary(){
    var col = this.afs.collection('payroll');
    var data:any
    data=col.valueChanges();
    // totalsal=parseInt(data.total)+(totalsal);
    this.totalsal=data;
    console.log(this.totalsal);
    return this.totalsal;

}

setDetail(val:any){
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

}
        

    getTotal(){
        var col = this.afs.collection('payroll');
        var data:any
        data = col.snapshotChanges();
        return data;
    }

    getAllPayroll(value:any,date:Date){
        var date1=date.getDate();
        var month=date.getMonth();
        var year=date.getFullYear(); 
        var id=value;
        // console.log(id);
        // console.log(year);
        // console.log(month);
        this.userDoc = this.afs.collection('payroll').doc(id).collection(year.toString()).doc(month.toString());
        var data:any
        data = this.userDoc.valueChanges();
        return data;
    }

    // resetEmployeeSalary(){
    //     var query = this.afs.collection('payroll').ref.where('isEdited','==',false);
    //     query.get().then((querySnapshot)=>{
    //         if(querySnapshot.empty){
    //             console.log("no data found");
    //         }
    //         querySnapshot.docs.map( (documentSnapshot) => {
    //             // console.log(documentSnapshot.data());
    //             var result=documentSnapshot.data();
    //             this.psService.salarySlipFill(result.empid,this.date1)
      
    //         });
    //     }
           
            
    //     )
    // } 

    salarySlipFill(id:string,d:Date){
        var date= new Date(d);
        var day=date.getDate();
        var month=date.getMonth();
        var year=date.getFullYear();
        //  id=id.replace(/\s/g, "");    
          this.userDoc = this.afs.collection('payroll').doc(id).collection(year.toString()).doc(month.toString());
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
    formatDate(date:Date){
        var date= new Date(date);
        var day=date.getDate();
        var month=date.getMonth();
        month=month+1;
        var year=date.getFullYear();
        var d=day+"/"+month+"/"+year;
        return d;
    }
}