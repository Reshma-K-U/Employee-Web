import { Component, OnInit} from '@angular/core';
import {Employee} from '../model/employee.model';
import {FormControl} from '@angular/forms';
import { FirestoreService } from '../../services/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'exalt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  employee: Employee;
  id: string;
  imageUrl = 'assets/images/employee.png';
  selectedFile: File;
  logoPath = '';
  constructor(private fsService: FirestoreService,  private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fsService.getData(this.id).subscribe(val => {
      this.logoPath = val['logoPath'] ;
      this.fsService.getImageUrl(this.logoPath).subscribe(data => {
        this.imageUrl = data;
      });

    });
  }

  onSelectFile(event) {
    this.selectedFile = event.target.files[0];
    this.fsService.uploadLogo(this.selectedFile, this.id);
  }
}
