import { Component, OnInit, Input} from '@angular/core';
import { PayrollService } from '../../service/payroll.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'exalt-houseproperty',
  templateUrl: './houseproperty.component.html',
  styleUrls: ['./houseproperty.component.scss']
})
export class HousepropertyComponent implements OnInit {
@Input() empid: string;
  house: any = {
    tihp: '',
    ihlso: '',
    tilop: '',
    totexem: '',
  };
  plusopen = false;
  plusopen2 = false;
  status = 1;
  status2 = 1;
  constructor(private pyService: PayrollService) { }
  ngOnInit() {
  }
    plusClick(status) {
      this.status = status + 1;
      if (this.status % 2 === 0) {
              this.plusopen = true;
      } else {
        this.plusopen = false;
      }
    }
    plusClick2(status2) {
      this.status2 = status2 + 1;
      if (this.status2 % 2 === 0) {
              this.plusopen2 = true;
      } else {
        this.plusopen2 = false;
      }
    }
    onSaveClick(form: NgForm) {
      this.house.tihp = parseInt(this.house.ihlso, 10) + parseInt(this.house.tilop, 10) + parseInt(this.house.totexem, 10);
    }
    autoFill() {
      this.house.tihp = parseInt(this.house.ihlso, 10) + parseInt(this.house.tilop, 10) + parseInt(this.house.totexem, 10);
    }
}
