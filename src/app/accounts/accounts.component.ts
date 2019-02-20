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

  accountDetails:any[];
  creditTotal:any[];
  onDate: Date = new Date();
  constructor(private accService: AccountsService, private router: Router) { }

  ngOnInit() {
    this.accountDetails=[];
    this.accService.getAccountDetails(this.onDate).subscribe(
    (value)=>{
            this.creditTotal=value.creditTotal;
            this.accountDetails=value.credit;
            console.log(this.accountDetails);
            });

  }
  onAddClick(){
        this.router.navigate(['addaccounts']);
  }
  dateChange(){}
}
