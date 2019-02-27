import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PayrollService } from '../../service/payroll.service';
import { EmployeeDetailComponent } from 'src/app/employees/employee-detail/employee-detail.component';
import { TaxComputationService } from '../service/tax-computation.service';

@Component({
  selector: 'exalt-exemptions',
  templateUrl: './exemptions.component.html',
  styleUrls: ['./exemptions.component.scss']
})
export class ExemptionsComponent implements OnInit {

  checkbox = false;
  showMonthlyRent = false;
  editRent = false;
  totalRent = 0;
  rent = '';
  other = {
    'basicTotal': 0,
    'basic': 0,
    'excessRent': 0,
    'totalhra': 0,
    'hraExemption': 0,
    'totalRent': 0,
  };
  exemptions = {
    'exem': '',
    'lee': '',
    'gex': '',
    'lta': ''
  };
  @Input() empid: string;
  RentDetails: Rent[] = [
    {month: 'April', rent: 0.0},
    {month: 'May', rent: 0.0},
    {month: 'June', rent: 0.0},
    {month: 'July', rent: 0.0},
    {month: 'August', rent: 0.0},
    {month: 'September', rent: 0.0},
    {month: 'October', rent: 0.0},
    {month: 'November', rent: 0.0},
    {month: 'December', rent: 0.0},
    {month: 'January', rent: 0.0},
    {month: 'February', rent: 0.0},
    {month: 'March', rent: 0.0},
  ];
  taxDetails: any;
  showMessage = false;
  constructor(private pyService: PayrollService, private tsService: TaxComputationService) { }

  ngOnInit() {
      this.tsService.getDetails(this.empid).subscribe(data => {
        if (data) {
          if (data.payload.data()['rentDetails']){
            this.RentDetails = data.payload.data()['rentDetails'];
            this.exemptions = data.payload.data()['exemptions'];
            this.calculateTotal();
          }
        } else {
          this.calculateTotal();
        }
      });
      this.tsService.getTaxDetails(this.empid).subscribe( val => {
        if (val) {
          this.taxDetails = val;
        } else {
          this.hraDetails();
        }
        setTimeout(() => {
          this.hraDetails();
        }, 2000);
      });
  }
  checkBoxClick() {
    this.checkbox = !this.checkbox;
  }
  saveRentDetails() {
    this.tsService.saveRentDetails(this.empid, this.RentDetails, this.other, this.exemptions);
  }
  monthlyRent() {
    this.showMonthlyRent = !this.showMonthlyRent;
  }
  onEditRent() {
    this.editRent = !this.editRent;
  }
  editRentValue(ind: number, event: any) {
   this.RentDetails[ind].rent = parseInt(event.target.textContent, 10);
    this.calculateTotal();
  }
  calculateTotal() {
    this.totalRent = 0;
    for (let i = 0; i < this.RentDetails.length; i++) {
      this.totalRent = this.totalRent + this.RentDetails[i].rent;
    }
    this.other.totalRent = this.totalRent;
  }
  addRentDetails() {
    if (this.rent !== '') {
      this.showMessage = false;
      for (let i = 0; i < this.RentDetails.length; i++) {
        this.RentDetails[i].rent = parseInt(this.rent, 10);
        }
        this.calculateTotal();
    } else {
      this.showMessage = true;
    }

  }

  hraDetails() {
    for (let i = 0; i < 12; i++) {
      this.other.basicTotal = this.other.basicTotal +  this.taxDetails[i]['basicpay'];
    this.other.totalhra = this.other.totalhra + this.taxDetails[i]['hra'];
    }
    this.other.excessRent = this.other.totalhra - (.1 * this.other.basicTotal);
  this.other.basic = .4 * this.other.basicTotal;
   this.other.hraExemption = Math.min(this.other.basic, this.other.excessRent, this.other.totalhra);
  }

}
export interface Rent {
  month: string;
  rent: number;
}
