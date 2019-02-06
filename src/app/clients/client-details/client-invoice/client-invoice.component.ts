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
    'total_hours': '',
    'unit_price': '',
    'project_description': '',
    'line_total': '',
    'igst' : '',
    'cgst' : '',
    'gst' : '',
    'total' : '',
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
    if (this.client.data.country === 'india') {
      console.log('india');
    }
    this.invoiceDetails.line_total = this.invoiceDetails.total_hours * this.invoiceDetails.unit_price;
    this.invoiceDetails.igst = (this.invoiceDetails.line_total * 18 ) / 100;
    this.invoiceDetails.cgst = (this.invoiceDetails.line_total * 9 ) / 100;
    this.invoiceDetails.gst = (this.invoiceDetails.line_total * 9 ) / 100;
    const total = this.invoiceDetails.line_total - this.invoiceDetails.igst ;
    // - this.invoiceDetails.cgst - this.invoiceDetails.gst;
    this.invoiceDetails.total = total;
    console.log(this.client.data);
  }


  onSubmit(form: NgForm) {
    const value = form.value;
    this.fsService.createNewInvoice(value, this.client);
    this.dialogRef.close();
    this.router.navigate(['newinvoice'],
    { queryParams: {client_id: this.client.data.client_id, invoice_id: value.invoice_num}});
  }

  onCancel() {
    this.dialogRef.close();
  }


}
