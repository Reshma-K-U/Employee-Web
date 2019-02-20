import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { NgForm } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';

@Component({
  selector: 'exalt-addaccounts',
  templateUrl: './addaccounts.component.html',
  styleUrls: ['./addaccounts.component.scss']
})
export class AddaccountsComponent implements OnInit {

  onDate: Date = new Date();
  newdebit: number = 2;
  newcredit: number = 4;
  status: number = 1;
  i: number = 0;
  creditTotal: number = 0;
  debitTotal: number = 0;
  creditamount:number = 0;
  credit: Credit[]=[];
  newCreditAttribute: Credit = {
    creditname:"",
    amount:"",
  }
  debit: Debit[] = [];
  newDebitAttribute: Debit = {
    debitname:"",
    amount:"",
  }
  // credit: any = {
  //   bulrent: 0,
  //   elec: 0,
  //   empsal: 0,
  //   foodbev: 0,
  //   totcre: 0,
  // }
  // debit:any = {
  //   projpay: 0,
  //   balance: 0,
  //   totdeb: 0,
  // }
  constructor(private accService: AccountsService) { }

  ngOnInit() {
  }
  // onSave(credit: NgForm, debit: NgForm) {
  //   const value = credit.value;
  //   const value1 = debit.value;
  //   this.accService.addAccounts(this.onDate, value);
  //   this.accService.addDebit(this.onDate,value1);
  // }
  // creditPlusClick() {

  //   this.newcredit++;
  //   var tableRef: HTMLTableElement = <HTMLTableElement> document.getElementById("creditTable");
  //   let newRow = tableRef.insertRow(5+this.i);
  //   newRow.style.height = "40px";
  //   let Cell1 = newRow.insertCell(0);
  //   let Cell2 = newRow.insertCell(1);
  //   let t1 = document.createElement("input");
  //   t1.style.width = "100px";
  //   t1.style.backgroundColor = "white";
  //   t1.style.height = "30px";
  //   t1.style.border = "0px";
  //   Cell1.style.paddingLeft = "90px";
  //   t1.name = "credit_"+this.newcredit;
  //   t1.innerHTML = "input mat input [(ngModel)]='t1.name'";
  //   let t2 = document.createElement("input");
  //   t2.style.width = "100px";
  //   t2.style.backgroundColor = "white";
  //   t2.style.height = "30px";
  //   t2.style.border = "0px";
  //   Cell2.style.paddingLeft = "60px";
  //   t2.name = "credit_value"+this.newcredit;
  //   Cell1.appendChild(t1);
  //   Cell2.appendChild(t2);
  //   this.i = this.i+1;
  // }
  // debitPlusClick() {
  //   this.newdebit++;
  //   var tableRef: HTMLTableElement = <HTMLTableElement> document.getElementById("debitTable");
  //   let newRow = tableRef.insertRow(3);
  //   newRow.style.height = "40px";
  //   let Cell1 = newRow.insertCell(0);
  //   let Cell2 = newRow.insertCell(1);
  //   let t1 = document.createElement("input");
  //   t1.style.width = "100px";
  //   t1.style.backgroundColor = "white";
  //   t1.style.height = "30px";
  //   t1.style.border = "0px";
  //   Cell1.style.paddingLeft = "90px";
  //   t1.name="addcre"+this.i;
  //   t1.name = "credit_"+this.newcredit;
  //   let t2 = document.createElement("input");
  //   t2.style.width = "100px";
  //   t2.style.backgroundColor = "white";
  //   t2.style.height = "30px";
  //   t2.style.border = "0px";
  //   t2.value = "addcreditval"+this.i;
  //   Cell2.style.paddingLeft = "60px";
  //   t2.name = "credit_value"+this.newcredit;
  //   Cell1.appendChild(t1);
  //   Cell2.appendChild(t2);
  // }
  // creditMinusClick(newcrebit){
  //   if(newcrebit>4){
  //     this.newcredit = newcrebit-1;
  //     console.log(this.newcredit);
  //   var tableRef: HTMLTableElement = <HTMLTableElement> document.getElementById('creditTable');
  //   tableRef.deleteRow(newcrebit);
  //   this.i=this.i-1;
  //   }
  // }
  // debitMinusClick(newdebit){
  //   if(newdebit>2){
  //     this.newdebit = newdebit-1;
  //   var tableRef: HTMLTableElement = <HTMLTableElement> document.getElementById('debitTable');
  //   tableRef.deleteRow(newdebit);
  //   }
  // }
  // debitBalance() {
  //   this.debit.balance = parseInt(this.debit.projpay) - parseInt(this.debit.totcre);
  // }
  // debitTotal(){
  //   this.debit.balance = parseInt(this.debit.projpay) - parseInt(this.debit.totcre);
  //   this.credit.totcre = parseInt(this.credit.bulrent) + parseInt(this.credit.elec) + parseInt(this.credit.empsal)+
  //   parseInt(this.credit.foodbev);
  //   this.debit.totdeb = parseInt(this.debit.projpay);
  // }
  // creditTotal(){
  //   console.log("works");
  //   this.credit.totcre = parseInt(this.credit.bulrent) + parseInt(this.credit.elec) + parseInt(this.credit.empsal)+
  //   parseInt(this.credit.foodbev);
  //   console.log(this.credit.totcre);
  // }



  onAdd(){
    this.accService.addCredit(this.onDate,this.credit,this.creditTotal);
    this.accService.addDebit(this.onDate,this.debit,this.debitTotal);
   }
  addCreditField() {
    this.creditTotal = this.creditTotal + parseInt(this.newCreditAttribute.amount);
    this.credit.push(this.newCreditAttribute);
      this.newCreditAttribute={
        creditname:"",
        amount:"",

      }
    }
    addDebitField() {
      this.debitTotal = this.debitTotal + parseInt(this.newDebitAttribute.amount);
      this.debit.push(this.newDebitAttribute);
        this.newDebitAttribute = {
          debitname:"",
          amount:"",

        }
      }
}
export interface Credit {
  creditname: any,
  amount: any,
}
export interface Debit {
  debitname:any,
  amount: any,
}
