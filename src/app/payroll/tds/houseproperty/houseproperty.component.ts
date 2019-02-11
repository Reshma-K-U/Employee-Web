import { Component, OnInit, Input} from '@angular/core';
import { PayrollService } from '../../service/payroll.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'exalt-houseproperty',
  templateUrl: './houseproperty.component.html',
  styleUrls: ['./houseproperty.component.scss']
})
export class HousepropertyComponent implements OnInit {

  house: any = {
    tihp: '',
    ihlso: '',
    tilop: '',
    totexem: '',
  };
  plusopen: boolean = false;
  plusopen2:boolean = false;
  status: number = 1;
  status2:number = 1;
  constructor(private pyService: PayrollService) { }
  @Input() empid: any;
  ngOnInit() {
  }
    plusClick(status) {
      this.status = status + 1;
      if (this.status % 2 === 0) {
              this.plusopen = true;
      }
      else {
        this.plusopen = false;
      }
    }
    plusClick2(status2) {
      this.status2 = status2 + 1;
      if (this.status2 % 2 === 0) {
              this.plusopen2 = true;
      }
      else {
        this.plusopen2 = false;
      }
    }
    onSaveClick(form: NgForm) {
      this.house.tihp = parseInt(this.house.ihlso) + parseInt(this.house.tilop) + parseInt(this.house.totexem);
      console.log(this.house.tihp);
      console.log(this.house.ihlso);
      // const value = form.value;
      // this.pyService.addHousePropertyIncome(value, this.empid);
    }
    autoFill() {
      this.house.tihp = parseInt(this.house.ihlso) + parseInt(this.house.tilop) + parseInt(this.house.totexem);
      console.log(this.house.tihp);
    }
}
