import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FirestoreClientService } from 'src/app/clients/services/firestore.service';
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'exalt-proj-invoice',
  templateUrl: './proj-invoice.component.html',
  styleUrls: ['./proj-invoice.component.scss']
})
export class ProjInvoiceComponent implements OnInit {
  invoiceDetails: any = {
    'invoice_num': '',
    'client_name': '',
    'due_on_receipt': '',
    'due_date': '',
    'total_hours': '',
    'unit_price': '',
    'project_name': '',
    'project_description': '',
    'line_total': '',
    'igst' : '',
    'cgst' : '',
    'gst' : '',
    'total' : '',
  };
  constructor(public dialogRef: MatDialogRef<ProjInvoiceComponent>,
    @Inject(MAT_DIALOG_DATA) public project: any, private cfs: FirestoreClientService,
    private router: Router ) { }

  ngOnInit() {
    console.log('project', this.project.data);



  }

}
