import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FirestoreClientService } from '../../services/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'exalt-client-doc',
  templateUrl: './client-doc.component.html',
  styleUrls: ['./client-doc.component.scss']
})
export class ClientDocComponent implements OnInit {
  id: string;
  subscription: Subscription;
  client: any = null;
  selectedFile: File;
  selected = false;

  url: any[] = [];
  constructor(private route: ActivatedRoute,private cd: ChangeDetectorRef, private cfs: FirestoreClientService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.subscription = this.cfs.getdoc(this.id).subscribe(
      (value) => {
        this.client = value;
        this.url = [];
        for( let i = 0; i < this.client.length; i++) {
        const path = this.client[i]['DocPath'];
        this.cfs.getImageUrl(path).subscribe(val => {
        this.url.push({
          'name': this.client[i].name,
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

    this.cfs.uploaddoc(this.id, this.selectedFile );
    }
  }


