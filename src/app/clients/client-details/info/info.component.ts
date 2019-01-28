import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirestoreClientService } from '../../services/firestore.service';

@Component({
  selector: 'exalt-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  
  @Input() client:any;
  clientInfo:any={
  address:"",
  alternative_email:"",
  city:"",
  client_id:"",
  company_name:"",
  country:"",
  currency:"",
  email:"",
  fax:"",
  industry_type:"",
  logoPath:"",
  mob_num:"",
  note:"",
  phone:"",
  state:"",
  status:"",
  website:"",
  zip_code:""
}
  constructor(private fsClient:FirestoreClientService) { }

  ngOnInit() {
    console.log(this.client);
      // this.clientInfo.address=this.client.address,
      // this.clientInfo.alternative_email=this.client.alternative_email,
      // this.clientInfo.city=this.client.city,
      this.clientInfo.client_id=this.client.client_id,
      this.clientInfo.company_name=this.client.company_name,
      this.clientInfo.country=this.client.country,
      this.clientInfo.currency=this.client.currency,
      this.clientInfo.email=this.client.email,
      this.clientInfo.fax=this.client.fax,
      this.clientInfo.industry_type=this.client.industry_type,
      this.clientInfo.logoPath=this.client.logoPath,
      this.clientInfo.mob_num=this.client.mob_num,
      this.clientInfo.note=this.client.note,
      this.clientInfo.phone=this.client.phone,
      this.clientInfo.state=this.client.state,
      this.clientInfo.status=this.client.status,
      this.clientInfo.website=this.client.website,
      this.clientInfo.zip_code=this.client.zip_code
  }
  update(){
    this.fsClient.update(this.client);
  }
}
