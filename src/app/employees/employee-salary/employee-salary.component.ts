import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../../services/firestore.service';
import {  PageChangeEvent,GridDataResult } from '@progress/kendo-angular-grid';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'exalt-employee-salary',
  templateUrl: './employee-salary.component.html',
  styleUrls: ['./employee-salary.component.scss'],
})

export class EmployeeSalaryComponent implements OnInit {
  
  id:string;
  pageSize:number=10;
  skip = 0;
  public gridView: GridDataResult;
  private items: any[];
  constructor(private route:ActivatedRoute,
    private fsService:FirestoreService,
    private router:Router
    ) {  }
  
  ngOnInit() { 
  this.id = this.route.snapshot.paramMap.get('id');
  this.items=this.fsService.getPayrollDetails(this.id);
  setTimeout(() => {
    this.loadItems();
  }, 5000);
 console.log(this.items);
 }

 public pageChange(event: PageChangeEvent): void {
  this.skip = event.skip;
  this.loadItems();
}

private loadItems(): void {
  this.gridView = {
      data: this.items.slice(this.skip, this.skip + this.pageSize),
      total: this.items.length
  };
}
onView(year:any,month:any){
  month=month+1;
  this.router.navigate(['salaryslip'], { queryParams: {id:this.id,month,year}});
}


}




