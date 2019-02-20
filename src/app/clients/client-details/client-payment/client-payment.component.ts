import { Component, OnInit , Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import {ClientInvoiceComponent} from '../client-invoice/client-invoice.component';


@Component({
  selector: 'exalt-client-payment',
  templateUrl: './client-payment.component.html',
  styleUrls: ['./client-payment.component.scss']
})
export class ClientPaymentComponent implements OnInit {

  @Input() client: any;

  constructor( public dialog: MatDialog) { }

  ngOnInit() {

  }

  newInvoice(): void {

    const dialogRef = this.dialog.open(ClientInvoiceComponent, {
        data: {data: this.client},
        width: '945px',
      });
    }


}
