import { Component, OnInit, Input} from '@angular/core';
import { Salary } from '../../model/employee.model';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'exalt-salary-details',
  templateUrl: './salary-details.component.html',
  styleUrls: ['./salary-details.component.scss']
})
export class SalaryDetailsComponent implements OnInit {

  @Input() employee: any;
  @Input() id: string;

  editMode: boolean = false;
  salary: Salary = {
    basicpay: '',
    hra: '',
    cedallow: '',
    medallow: '',
    speallow: '',
    conallow: '',
    wwf: '',
    esi: '',
    pt: '',
    total: '',
  }

  changebasicpay:boolean=false;
  changehra:boolean=false;
  changecedallow:boolean=false;
  changemedallow:boolean=false;
  changespeallow:boolean=false;
  changetotal:boolean=false;
  changewwf:boolean=false;
  changeesi:boolean=false;
  changept:boolean=false;

  constructor(private fsService: FirestoreService) { }

  ngOnInit() {
  }
  onEditItem() {
    this.editMode =! this.editMode;
  }
  editBasicpay(event: any) {
    this.salary.basicpay = event.target.textContent;
    this.changebasicpay = true;
    }
    editHra(event: any) {
      this.salary.hra = event.target.textContent;
      this.changehra = true;
    }
    editMedallow(event: any) {
      this.salary.medallow = event.target.textContent;
      this.changemedallow = true;
    }
    editCedallow(event: any) {
      this.salary.cedallow = event.target.textContent;
      this.changecedallow = true;
   }
    editSpeallow(event: any) {
      this.salary.speallow = event.target.textContent;
      this.changespeallow = true;
    }
    editWwf(event: any) {
      this.salary.wwf = event.target.textContent;
      this.changewwf = true;
    }
    editEsi(event: any) {
      this.salary.esi = event.target.textContent;
      this.changeesi = true;
    }
    editPt(event: any) {
      this.salary.pt = event.target.textContent;
      this.changept = true;
    }
    save() {
    if (this.changebasicpay) {
      this.fsService.updateSal(this.id, 'basicpay', this.salary.basicpay);
      this.changebasicpay = false;
    }
    if (this.changehra) {
        this.fsService.updateSal(this.id, 'hra', this.salary.hra);
        this.changehra = false;
    }
    if (this.changemedallow) {
          this.fsService.updateSal(this.id, 'medallow', this.salary.medallow);
          this.changemedallow = false;
    }
    if (this.changecedallow) {
            this.fsService.updateSal(this.id, 'cedallow', this.salary.cedallow);
            this.changecedallow = false;
    }
    if (this.changespeallow) {
              this.fsService.updateSal(this.id, 'speallow', this.salary.speallow);
              this.changespeallow = false;
    }
    if (this.changewwf) {
      this.fsService.updateSal(this.id, 'wwf', this.salary.wwf);
      this.changewwf = false;
    }
    if (this.changeesi) {
      this.fsService.updateSal(this.id, 'esi', this.salary.esi);
      this.changeesi = false;
    }
    if (this.changept) {
      this.fsService.updateSal(this.id, 'pt', this.salary.pt);
      this.changept = false;
    }
      this.editMode = false;
}
}
