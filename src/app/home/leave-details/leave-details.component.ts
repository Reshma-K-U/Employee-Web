import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirestoreService } from '../../services/firestore.service';
import { FirestoreLeaveService } from './services/firestore-leave.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'exalt-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrls: ['./leave-details.component.scss']
})
export class LeaveDetailsComponent implements OnInit {

  subscription:Subscription;
  data:any[]=[];
  selected:string;


  constructor(private fsService:FirestoreLeaveService) { }

  ngOnInit() {
      this.selected='';
  }

  changeFilter(){
    var today=new Date();
    switch(this.selected){
      case 'thisWeek':{
                        this.subscription=this.fsService.getThisWeek().subscribe(
                          (value)=>{
                            this.data=value;
                            }
                          )
                        this.subscription.unsubscribe();
                        break;
                      }
      case 'thisMonth':{
                        this.subscription=this.fsService.getThisMonth().subscribe(
                          (value)=>{
                            this.data=value;
                            }
                          )
                        this.subscription.unsubscribe();
                        break;
                      }
      case 'lastWeek':{
                        this.subscription=this.fsService.getLastWeek().subscribe(
                          (value)=>{
                            this.data=value;
                            }
                          )
                        this.subscription.unsubscribe();
                        break;
                      }
      case 'lastMonth':{
                          this.subscription=this.fsService.getLastMonth().subscribe(
                            (value)=>{
                              this.data=value;
                              }
                            )
                          this.subscription.unsubscribe();
                          break;
                        }
      case 'nextWeek':{
                        this.subscription=this.fsService.getNextWeek().subscribe(
                          (value)=>{
                            this.data=value;
                            }
                          )
                        this.subscription.unsubscribe();
                        break;
                      }
      case 'nextMonth':{
                            this.subscription=this.fsService.getNextMonth().subscribe(
                              (value)=>{
                                this.data=value;
                                }
                              )
                            this.subscription.unsubscribe();
                            break;
                          }
      case 'thisYear':{
                        this.subscription=this.fsService.getThisYear().subscribe(
                          (value)=>{
                            this.data=value;
                            }
                          )
                        this.subscription.unsubscribe();
                        break;
                      }
    }
    
  }


  
}