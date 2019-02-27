import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'exalt-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  creditAccountDetails:any[];
  debitAccountDetails:any[];
  creditTotal:any[];
  debitTotal:any[];
  balance: any[];
  onDate: Date = new Date();
  constructor(private accService: AccountsService, private router: Router) { }

  ngOnInit() {
    this.creditAccountDetails=[];
    this.accService.getCreditAccountDetails(this.onDate).subscribe(
    (value)=>{
            this.creditTotal=value.creditTotal;
            this.creditAccountDetails=value.credit;
            });
            this.debitAccountDetails=[];
            this.accService.getDebitAccountDetails(this.onDate).subscribe(
            (value)=>{
                    this.debitTotal=value.debitTotal;
                    this.debitAccountDetails=value.debit;
                    this.balance = value.balance;
                    });

  }
  onAddClick(){
        this.router.navigate(['addaccounts']);
  }
  dateChange(){
    this.creditAccountDetails=[];
    this.accService.getCreditAccountDetails(this.onDate).subscribe(
    (value)=>{
            this.creditTotal=value.creditTotal;
            this.creditAccountDetails=value.credit;
            });
            this.debitAccountDetails=[];
            this.accService.getDebitAccountDetails(this.onDate).subscribe(
            (value)=>{
                    this.debitTotal=value.debitTotal;
                    this.debitAccountDetails=value.debit;
                    });
  }
}
