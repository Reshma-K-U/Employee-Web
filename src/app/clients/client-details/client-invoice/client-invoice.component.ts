import { Component, OnInit ,Inject} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FirestoreClientService } from '../../services/firestore.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'exalt-client-invoice',
  templateUrl: './client-invoice.component.html',
  styleUrls: ['./client-invoice.component.scss']
})
export class ClientInvoiceComponent implements OnInit {
  
  clientDetail:any=null
  
  invoiceDetails:any={
    'invoice_num':"",
    'project_name':"",
    'due_on_receipt':"",
    'due_date':"",
    'total_hours':"",
    'unit_price':"",
    'project_description':"",
    'line_total':"",
  }
  
  projects:any[]=[];
  
  constructor(
    public dialogRef:MatDialogRef<ClientInvoiceComponent>, 
    @Inject(MAT_DIALOG_DATA) public client:any,private fsService:FirestoreClientService,
  private router:Router) { }

  ngOnInit() {

    this.clientDetail = this.client;
    this.fsService.getProjects(this.client.data.company_name).subscribe(val=>{
      this.projects = val;
    })

  }

  onSubmit(form:NgForm){
    var value = form.value;
    this.fsService.createNewInvoice(value,this.clientDetail);
    this.dialogRef.close();
    this.router.navigate(['newinvoice'], 
    { queryParams: {client_id:this.clientDetail.data.client_id,invoice_id:value.invoice_num}});
  }

  onCancel(){
    this.dialogRef.close();
  }


}
