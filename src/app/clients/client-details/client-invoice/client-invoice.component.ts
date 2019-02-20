import { Component, OnInit , Inject} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FirestoreClientService } from '../../services/firestore.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'exalt-client-invoice',
  templateUrl: './client-invoice.component.html',
  styleUrls: ['./client-invoice.component.scss']
})
export class ClientInvoiceComponent implements OnInit {
  invoiceDetails: any = {
    'invoice_num': '',
    'project_name': '',
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
  projects: any[] = [];
  constructor(
    public dialogRef: MatDialogRef<ClientInvoiceComponent>,
    @Inject(MAT_DIALOG_DATA) public client: any, private fsService: FirestoreClientService,
  private router: Router) { }

  ngOnInit() {

    this.fsService.getProjects(this.client.data.company_name).subscribe(val => {
      this.projects = val;
    });
    this.invoiceDetails.data = [];
  }


  onSubmit(form: NgForm) {
    const value = form.value;
   this.invoiceDetails.invoice_num =  value.invoice_num,
   this.invoiceDetails.project_name =  value.project,
   this.invoiceDetails.due_on_receipt =  value.dueOnR,
   this.invoiceDetails.due_date =  value.dueDate,
    this.fsService.createNewInvoice(this.invoiceDetails, this.client);
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
  if (this.client.data.country === 'india') {
    if (this.client.data.state !== 'kerala') {
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
