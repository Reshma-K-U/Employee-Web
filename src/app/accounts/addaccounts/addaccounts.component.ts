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
  balance: number = 0;
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
  creditconst: any = {
    rent: 0,
    elec: 0,
    empsal: 0,
    foodbev: 0,
  }
  constructor(private accService: AccountsService) { }

  ngOnInit() {
  }

  onAdd(){
    this.accService.addCredit(this.onDate,this.credit,this.creditTotal);
    this.accService.addDebit(this.onDate,this.debit,this.debitTotal,this.balance);
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
        this.balance = this.debitTotal - this.creditTotal;
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
