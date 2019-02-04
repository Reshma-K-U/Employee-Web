import { Component, OnInit } from '@angular/core';
import { PayrollService } from '../service/payroll.service';
import { ActivatedRoute } from '@angular/router';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'exalt-accountstatement',
  templateUrl: './accountstatement.component.html',
  styleUrls: ['./accountstatement.component.scss']
})
export class AccountstatementComponent implements OnInit {

  payrollDetails: any[];
  totalsal: any = 0;
  date: any;
  constructor(private pyservice: PayrollService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.date = params['date'];
  });
  setTimeout(() => {
    this.pyservice.accountStatement(this.date).subscribe(val => {
      this.payrollDetails = val;
    });
  }, 1000);
  }
  public onDownload()  {
    const data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      const imgWidth = 208;
      const pageHeight = 295;
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
