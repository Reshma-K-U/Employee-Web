import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'exalt-employee-documents',
  templateUrl: './employee-documents.component.html',
  styleUrls: ['./employee-documents.component.scss']
})

export class EmployeeDocumentsComponent{


  id: string;
  subscription: Subscription;
  employee: any = null;
  selectedFile: File;
  selected = false;
  url: any[] = [];
  constructor( private route: ActivatedRoute,private cd: ChangeDetectorRef, private emp: FirestoreService ) {}
  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');

    this.subscription = this.emp.getdoc(this.id).subscribe(
      (value) => {
        this.employee = value;
        this.url = [];
        for( let i = 0; i < this.employee.length; i++) {
        const path = this.employee[i]['DocPath'];
        this.emp.getImageUrl(path).subscribe(val => {
        this.url.push({
          'name': this.employee[i].name,
          'url': val
        });
        console.log(val);
      });
      }
      this.cd.markForCheck();
      });
  }
  onSelectFile(event) {
    this.selectedFile = event.target.files[0];
    this.selected = true;


  }
  upload() {

    this.emp.uploaddoc(this.id, this.selectedFile );
    }
  }
