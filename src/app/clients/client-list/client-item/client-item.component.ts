import { Component, OnInit, Input } from '@angular/core';
import { FirestoreClientService } from '../../services/firestore.service';

@Component({
  selector: 'exalt-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.scss']
})
export class ClientItemComponent implements OnInit {
  imageUrl = 'assets/images/clientLogo.jpeg';
  logoPath = '';
  @Input() client: any ;
  constructor(private fsClient: FirestoreClientService) { }
  ngOnInit() {
  this.logoPath = this.client.logoPath;
  this.fsClient.getImageUrl(this.logoPath).subscribe(val => {
    this.imageUrl = val;
  });
  }

}
