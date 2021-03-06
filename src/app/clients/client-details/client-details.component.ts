import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { FirestoreClientService } from '../services/firestore.service';

@Component({
  selector: 'exalt-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: any = null;
  subscription: Subscription;
  active: boolean;
  label: string;
  imageUrl = 'assets/images/clientLogo.jpeg';
  selectedFile: File;
  constructor(private route: ActivatedRoute, private location: Location, private fsClient: FirestoreClientService) { }

 public ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    this.subscription = this.fsClient.getData(this.id).subscribe(
     (client) => {
        this.client = client;
        const path = this.client['logoPath'];
        this.fsClient.getImageUrl(path).subscribe(val => {
          this.imageUrl = val;
        });
        if (this.client.status = 'active') {
          this.active = true;
          this.label = 'Mark as Inactive';
        } else {
          this.active = false;
          this.label = 'Mark as Active';
        }
        this.subscription.unsubscribe();
     }
    );

  }

  statusChange() {
    this.active = ! this.active;
    if (this.active = true) {
      this.fsClient.updateField(this.id, 'status', 'active');
      this.label = 'Mark as Inavctive';
      } else {
      this.fsClient.updateField(this.id, 'status', 'inactive');
      this.label = 'Mark as Active';
    }
  }

  remove() {
    this.fsClient.remove(this.id);
  }
  onSelectFile(event) {
    this.selectedFile = event.target.files[0];
    this.fsClient.uploadLogo(this.selectedFile, this.id);
  }

}
