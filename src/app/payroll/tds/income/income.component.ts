import { Component, OnInit, Input } from '@angular/core';
import { PayrollService } from '../../service/payroll.service';


@Component({
  selector: 'exalt-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
  @Input() id: string;
  Details: any[] = [] ;
  startMonth: number;
  months: string[] = ['Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
  basicTotal = 0;
  cedTotal =  0;
  speTotal =  0;
  medTotal =  0;
  conTotal =  0;
  constructor(private pyService: PayrollService) { }

  ngOnInit() {
    this.pyService.getTaxDetails(this.id).subscribe(val => {
      this.Details = val;
      console.log(this.Details);
    });

    setTimeout(() => {
      for (let i = 0; i < this.Details.length; i++) {
        const element = this.Details[i];
        this.basicTotal = this.basicTotal + element.basicpay;
        this.cedTotal = this.cedTotal + element.cedallow;
        this.speTotal = this.speTotal + element.speallow;
        this.medTotal = this.medTotal + element.medallow;
        this.conTotal = this.conTotal + element.conallow;
      }
    }, 2000);
  }



}
