import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FirestoreClientService } from 'src/app/clients/services/firestore.service';
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscription} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/project/service/project.service';

@Component({
  selector: 'exalt-proj-invoice',
  templateUrl: './proj-invoice.component.html',
  styleUrls: ['./proj-invoice.component.scss']
})
export class ProjInvoiceComponent implements OnInit {
  invoiceDetails: any = {
    'invoice_num': '',
    'project_name': '',
    'project_id': '',
    'client_company': '',
    'due_on_receipt': '',
    'due_date': '',
    'data': [],
    'subTotal': 0,
    'igst': 0,
    'cgst': 0,
    'sgst': 0,
    'total' : 0,
  };

  newRow: any = {
    'total_hours': '',
      'unit_price': '',
      'project_description': '',
      'line_total': '',
  };
  data: any[] = [];
  id: string;
  subscribe: Subscription;
  client_detail: any;
  constructor(public dialogRef: MatDialogRef<ProjInvoiceComponent>,
    @Inject(MAT_DIALOG_DATA) public project: any, private cfs: FirestoreClientService,
    private router: Router, private pfs: ProjectService ) { }

  ngOnInit() {

this.invoiceDetails.project_id = this.project.data.project_id;
    this.cfs.getData(this.project.data.client_id).subscribe(val => {
      this.client_detail = val;
      console.log(this.client_detail);
      this.invoiceDetails.data = [];
    });





  }
  onSubmit(form: NgForm) {
    const value = form.value;
    console.log('value', value);
   this.invoiceDetails.invoice_num =  value.invoice_num,
   this.invoiceDetails.client_company =  value.client_company,
   this.invoiceDetails.project_name =  value.project_name,
   this.invoiceDetails.due_on_receipt =  value.dueOnR,
   this.invoiceDetails.due_date =  value.dueDate,
this.pfs.createNewInvoice(this.invoiceDetails, this.client_detail);
this.dialogRef.close();
   this.router.navigate(['newinvoice'],
   { queryParams: {year: new Date().getFullYear(), month: new Date().getMonth(), invoice_id: value.invoice_num}});

}

onCancel() {
  this.dialogRef.close();
}

onChange() {
  this.newRow.line_total = parseInt(this.newRow.total_hours) * parseInt(this.newRow.unit_price);
}
addNewRow() {
  this.invoiceDetails.data.push(this.newRow);
  this.invoiceDetails.subTotal = this.invoiceDetails.subTotal + parseInt(this.newRow.line_total);
  if (this.client_detail['country'] === 'india') {
    if (this.client_detail['state'] !== 'kerala') {
      this.invoiceDetails.igst = this.invoiceDetails.subTotal * 18 / 100;
    } else {
      this.invoiceDetails.cgst = this.invoiceDetails.subTotal * 9 / 100;
      this.invoiceDetails.sgst = this.invoiceDetails.subTotal * 9 / 100;
    }
  }
  this.invoiceDetails.total = this.invoiceDetails.subTotal + this.invoiceDetails.igst;
  this.invoiceDetails.total = this.invoiceDetails.total + this.invoiceDetails.cgst;
  this.invoiceDetails.total = this.invoiceDetails.total + this.invoiceDetails.sgst;
  this.newRow = {
    'total_hours': '',
      'unit_price': '',
      'project_description': '',
      'line_total': '',
  };
}

}
