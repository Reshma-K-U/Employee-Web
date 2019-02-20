import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreClientService } from '../../services/firestore.service';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'exalt-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.scss']
})
export class NewInvoiceComponent implements OnInit {
invoiceDetails: any = {
'client_id': '',
'invoice_id': '',
'client_address': '',
'client_name' : '',
'client_country' : '',
'client_state' : '',
'due_date': '',
'due_on_receipt': '',
'invoice_num': '',
'project_name': '',
'data': [],
// 'line_total': '',
// 'project_description': '',

// 'total_hours': '',
// 'unit_price' : '',
'subtotal': '',
'igst' : '',
'cgst' : '',
'sgst' : '',
'total' : ''
};
year: string;
month: string;
invoice_id: string;
date: Date = new Date();

  constructor(private route: ActivatedRoute, private fsService: FirestoreClientService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.year = params['year'];
      this.month = params['month'];

      this.invoice_id = params['invoice_id'];
  });
   this.fsService.getInvoiceDetails(this.year, this.month, this.invoice_id).subscribe(
     val => {
       this.invoiceDetails = val;
       console.log(this.invoiceDetails);
       this.invoiceDetails.due_on_receipt = this.invoiceDetails.due_on_receipt.toDate();
       this.invoiceDetails.due_date = this.invoiceDetails.due_date.toDate();
     }
   );
  }
  onDownload() {
    const data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      const imgWidth = 210;
      const pageHeight = 250;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save(this.date + '.pdf'); // Generated PDF
    });
  }

}
