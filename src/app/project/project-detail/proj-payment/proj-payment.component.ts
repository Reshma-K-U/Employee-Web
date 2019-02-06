import { Component, OnInit,Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProjInvoiceComponent } from '../proj-invoice/proj-invoice.component';

@Component({
  selector: 'exalt-proj-payment',
  templateUrl: './proj-payment.component.html',
  styleUrls: ['./proj-payment.component.scss']
})

export class ProjPaymentComponent implements OnInit {
  @Input() project: any;
  constructor(public dialog: MatDialog ) { }

  ngOnInit() {
  }
  newInvoice(): void {


    const dialogRef = this.dialog.open(ProjInvoiceComponent,{
      data: {data:this.project},
      width: '750px',
    });
    }

}
