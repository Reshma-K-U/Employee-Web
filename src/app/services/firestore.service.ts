import { Injectable } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import 'rxjs/Rx'
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { Subscription } from 'rxjs/Rx';

import {Employee, Prev_Exp, Qualification, Dependents,Salary} from '../employees/model/employee.model';
import { FirestoreLeaveService } from '../home/leave-details/services/firestore-leave.service';


@Injectable()
export class FirestoreService {
    length:number;
    id:number;
    private userDoc:AngularFirestoreDocument<any>;
    private subscription:Subscription;
    constructor(private afs:AngularFirestore,private fsLeaveService:FirestoreLeaveService) {}
 
    ngOnInit(){}


    addEmployee(employee:Employee){
    var employeeDocRef=this.afs.collection("employees").doc(employee.basic.emp_id);
    employeeDocRef.
        set({
            
            /* 'firstname':  employee.basic.firstname,
            'lastname':   employee.basic.lastname, */
            'name':employee.basic.firstname.concat(" ",employee.basic.lastname),
            'emp_id': employee.basic.emp_id,
            'gender': employee.basic.gender,
            'email':employee.basic.email,
            'marrital_status':  employee.personal.marrital_status,
            'dob':   new Date(employee.personal.date_of_birth).toDateString(),
            'address': employee.personal.address,
            'mob_num': employee.personal.mob_num,
            'other_email':employee.personal.other_email,
            'aadhar_num':employee.personal.aadhar_num,
            'bank_accnt_num':employee.personal.accnt_num,
            'pan_num':employee.personal.pan_num,
            'passport_num':employee.personal.passport_num,
            'department':  employee.work.department,
            'work_location':   employee.work.location,
            'hire_source': employee.work.hire_source,
            'joining_date': new Date(employee.work.joining_date).toDateString(),
            'role':employee.work.role,
            'employee_type':employee.work.employee_type,
            'status':employee.work.status,
            'about':employee.about,
            'maxcl':12,
            'maxsl':8,
            'maxol':2,
            'maxpl':0,
            'maxlop':365,
            'maxco':365,
            'cl':0,
            'sl':0,
            'ol':0,
            'pl':0,
            'lop':0,
            'co':0,

            'hra':employee.salary.hra,
            'basicpay':employee.salary.basicpay,
            'cedallow':employee.salary.cedallow,
            'medallow':employee.salary.medallow,
            'speallow':employee.salary.speallow,
            'total':employee.salary.total,


     })
     var employeeDocRef=this.afs.collection("payroll").doc(employee.basic.emp_id);
     employeeDocRef.
         set({
            'empid': employee.basic.emp_id,
            'name':employee.basic.firstname.concat(" ",employee.basic.lastname),
            'hra':employee.salary.hra,
            'basicpay':employee.salary.basicpay,
            'cedallow':employee.salary.cedallow,
            'medallow':employee.salary.medallow,
            'speallow':employee.salary.speallow,
            'total':employee.salary.total,
         })




        employee.dependents.forEach(function (value,index){
        employeeDocRef.collection('dependents').doc('dependent' +index).set({
            'name':value.name,
            'relation':value.relation,
            'occupation':value.occupation,
         })
        })

        employee.qualification.forEach(function (value,index){
            employeeDocRef.collection('qualifications').doc('qual' +index).set({
                'course':value.course,
                'specialization':value.specialization,
                'institute':value.institute,
                'university':value.university,
                'percentage':value.percentage,
             })
            })

            // employee.salary.forEach(function (value,index){
            //     employeeDocRef.collection('salary').doc('qual' +index).set({
            //         'hra':value.hra,
            //         'basicpay':value.basicpay,
            //         'cedallow':value.cedallow,
            //         'medallow':value.medallow,
            //         'speallow':value.speallow,
            //      })
            //     })

            employee.prev_exp.forEach(function (value,index){
                employeeDocRef.collection('prev_experience').doc('exp' +index).set({
                    'company_name':value.company_name,
                    'job_title':value.job_title,
                    'from':new Date(value.fromDate).toDateString(),
                    'to':new Date(value.toDate).toDateString(),
                    'description':value.job_description,
                 })
                })
    }
  
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

    getData(id:string){
        // console.log(id);
        this.userDoc = this.afs.collection('employees').doc(id);
        var data:any
        data = this.userDoc.valueChanges();
        return data;
    }


    getData1(id:string){
        // console.log(id);
        this.userDoc = this.afs.collection('employees').doc(id);
        var data:any
        data = this.userDoc.valueChanges();
        return data;
    }



    getQual(id:string){
        this.userDoc = this.afs.collection('employees').doc(id);
        var data:any
        data=this.userDoc.collection('qualifications').valueChanges();
        return data;
    }


    getSal(id:string){
        this.userDoc = this.afs.collection('employees').doc(id);
        var data:any
        data=this.userDoc.valueChanges();
        return data;
    }

    getDep(id:string){
        this.userDoc = this.afs.collection('employees').doc(id);
        var data:any
        data=this.userDoc.collection('dependents').valueChanges();
        return data;
    }

    getExp(id:string){
        this.userDoc = this.afs.collection('employees').doc(id);
        var data:any
        data=this.userDoc.collection('prev_experience').valueChanges();
        return data;
    }

    addNewExp(id:string,newExp:Prev_Exp){
        let count = this.afs.collection('employees').doc(id).collection('prev_experience').snapshotChanges().map(c => {
            return c.length;
          });
         this.subscription=count.subscribe(
                    (len)=>{
                        this.afs.collection('employees').doc(id).collection('prev_experience').doc('exp'+len).set({
                            'company_name':newExp.company_name,
                        'job_title':newExp.job_title,
                        'from':new Date(newExp.fromDate).toDateString(),
                        'to':new Date(newExp.toDate).toDateString(),
                        'description':newExp.job_description,
                         })
                        this.subscription.unsubscribe();
                    }
                )
    }
    
    addNewDep(id:string,newDep:Dependents){
        let count = this.afs.collection('employees').doc(id).collection('dependents').snapshotChanges().map(c => {
            return c.length;
          });
         this.subscription=count.subscribe(
                    (len)=>{
                        this.afs.collection('employees').doc(id).collection('dependents').doc('dep'+len).set({
                            'name':newDep.name,
                        'relation':newDep.relation,
                        'occupation':newDep.occupation
                         })
                        this.subscription.unsubscribe();
                    }
                )
    }


    addNewQual(id:string,newQual:Qualification){
        let count = this.afs.collection('employees').doc(id).collection('qualifications').snapshotChanges().map(c => {
            return c.length;
          });
         this.subscription=count.subscribe(
                    (len)=>{
                        this.afs.collection('employees').doc(id).collection('qualifications').doc('qual'+len).set({
                            'course':newQual.course,
                            'specialization':newQual.specialization,
                            'institute':newQual.institute,
                            'university':newQual.university,
                            'percentage':newQual.percentage,
                         })
                        this.subscription.unsubscribe();
                    }
                )
        }
        update(id:string,field:string,newVal:string){
            this.afs.collection('employees').doc(id).update({
                [""+field+""]:newVal
            })
        }

        updateDep(id:string,dep:Dependents[]){
            var userDoc=this.afs.collection('employees').doc(id);
            dep.forEach(function(value,index){
                userDoc.collection('dependents').doc('dep' +index).set({
                    'name':value.name,
                    'relation':value.relation,
                    'occupation':value.occupation,
                 })
            })
        }
        updateSal(id:string,field:string,newVal:string){
            this.afs.collection('employees').doc(id).update({
                [""+field+""]:newVal
            })
            this.afs.collection('payroll').doc(id).update({
                [""+field+""]:newVal
            })
        }
        // updateSal(id:string,sal:Salary[]){
        //     console.log(sal);
        //     var userDoc=this.afs.collection('employees').doc(id);
        //     sal.forEach(function(value){
        //         console.log(value.basicpay);
        //         userDoc.set({
        //                 'basicpay':value.basicpay,
        //                 'hra':value.hra,
        //                 'medallow':value.medallow,
        //                 'cedallow':value.cedallow,
        //                 'specallow':value.speallow,
        //                 'total':parseInt(value.basicpay)+parseInt(value.hra)+parseInt(value.cedallow)
        //                 +parseInt(value.medallow)+parseInt(value.speallow)
        //          })
        //     })
        // }

        updateQual(id:string,qual:Qualification[]){
            var userDoc=this.afs.collection('employees').doc(id);
            qual.forEach(function(value,index){
                userDoc.collection('qualifications').doc('qual' +index).set({
                        'course':value.course,
                        'specialization':value.specialization,
                        'institute':value.institute,
                        'university':value.university,
                        'percentage':value.percentage,
                     })
                 })
            }

            updateExp(id:string,exp:any[]){
                var userDoc=this.afs.collection('employees').doc(id);
                exp.forEach(function(value,index){
                    console.log('update',index,value);
                    userDoc.collection('prev_experience').doc('exp' +index).set({
                        'company_name':value.company_name,
                        'job_title':value.job_title,
                        'from':new Date(value.from).toDateString(),
                        'to':new Date(value.to).toDateString(),
                        'description':value.description,
                     })
                })
            }

            remove(id:string){
                this.userDoc=this.afs.collection('employees').doc(id);
                var depCol:AngularFirestoreCollection;
                var expCol:AngularFirestoreCollection;
                var qualCol:AngularFirestoreCollection;
                
                depCol=this.userDoc.collection('dependents');
                depCol.ref.get().then(function(querySnapshot) {
                    querySnapshot.forEach(function(dep) {
                        depCol.doc(dep.id).delete();
                    })
                })

                expCol=this.userDoc.collection('prev_experience');
                expCol.ref.get().then(function(querySnapshot) {
                    querySnapshot.forEach(function(exp) {
                        depCol.doc(exp.id).delete();
                    })
                })

                qualCol=this.userDoc.collection('qualifications');
                qualCol.ref.get().then(function(querySnapshot) {
                    querySnapshot.forEach(function(qual) {
                        qualCol.doc(qual.id).delete();
                    })
                })

                
                this.userDoc.delete();
            }
          
            setLeave(data:any){
                
            }
        
}