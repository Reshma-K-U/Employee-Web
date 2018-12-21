import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FileSelectDirective} from 'ng2-file-upload';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
var firebaseConfig = {
  apiKey: "AIzaSyBzsyyLdJBjK0kZcEPPiorS38Ij7Hg3LTw",
  authDomain: "getexalture.firebaseapp.com",
  databaseURL: "https://getexalture.firebaseio.com",
  projectId: "getexalture",
  storageBucket: "getexalture.appspot.com",
  messagingSenderId: "43275888739"
};


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, DateAdapter } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';

import {EmployeeService} from  './employees/services/employee.services';
import{FirestoreService} from '../app/services/firestore.service';
import {FirestoreClientService} from './clients/services/firestore.service'
import {AttendanceService } from './attendance/service/attendance.service'

import { AppComponent } from './app.component';
import { BasicInfoComponent } from './employees/add-employee/basic-info/basic-info.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { PersonalInfoComponent } from './employees/add-employee/personal-info/personal-info.component';
import { WorkInfoComponent } from './employees/add-employee/work-info/work-info.component';
import { PrevExpComponent } from './employees/add-employee/prev-exp/prev-exp.component';
import { QualificationsComponent } from './employees/add-employee/qualifications/qualifications.component';
import { DependentsComponent } from './employees/add-employee/dependents/dependents.component';
import { AboutComponent } from './employees/add-employee/about/about.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeItemComponent } from './employees/employee-list/employee-item/employee-item.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';



import { BasicInfoDetailsComponent } from './employees/employee-detail/basic-info-details/basic-info-details.component';
import { PersonalInfoDetailsComponent } from './employees/employee-detail/personal-info-details/personal-info-details.component';
import { QualificationDetailsComponent } from './employees/employee-detail/qualification-details/qualification-details.component';
import { WorkDetailsComponent } from './employees/employee-detail/work-details/work-details.component';
import { PrevExperienceDetailsComponent } from './employees/employee-detail/prev-experience-details/prev-experience-details.component';
import { DependentsDetailsComponent } from './employees/employee-detail/dependents-details/dependents-details.component';
import { ExpertiseDetailsComponent } from './employees/employee-detail/expertise-details/expertise-details.component';
import { HeaderComponent } from './employees/header/header.component';
import { NewqualificationComponent } from './employees/employee-detail/qualification-details/newqualification/newqualification.component';
import { NewinterestComponent } from './employees/employee-detail/expertise-details/newinterest/newinterest.component';
import { NewexperienceComponent } from './employees/employee-detail/prev-experience-details/newexperience/newexperience.component';
import { ClientsComponent } from './clients/clients.component';
import { AddClientComponent } from './clients/add-client/add-client.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { ClientItemComponent } from './clients/client-list/client-item/client-item.component';
import { InfoComponent } from './clients/client-details/info/info.component';
import { EmployeeLeaveComponent } from './employees/employee-leave/employee-leave.component';
import { ApplyLeaveComponent } from './employees/employee-leave/apply-leave/apply-leave.component';
import { EmployeeLeaveDetailComponent } from './employees/employee-leave/employee-leave-detail/employee-leave-detail.component';
import { LeaveDetailsComponent } from './home/leave-details/leave-details.component';
import { FirestoreLeaveService } from './home/leave-details/services/firestore-leave.service';
import { AllLeavesComponent } from './employees/employee-leave/all-leaves/all-leaves.component';
import { AddPrivilageLeaveComponent } from './employees/employee-leave/add-privilage-leave/add-privilage-leave.component';
import { FilteredLeavesComponent } from './home/leave-details/filtered-leaves/filtered-leaves.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HomeNavbarComponent } from './home/home-navbar/home-navbar.component';
import { AttendanceComponent } from './attendance/attendance.component';


import { PayrollComponent } from './payroll/payroll.component';
import { AddsalaryComponent } from './payroll/addsalary/addsalary.component';
import { NewempsalaryComponent } from './payroll/newempsalary/newempsalary.component';
import { SalaryslipComponent } from './payroll/salaryslip/salaryslip.component';
import { EmployeeSalaryComponent } from './employees/employee-salary/employee-salary.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicInfoComponent,
    AddEmployeeComponent,
    PersonalInfoComponent,
    WorkInfoComponent,
    PrevExpComponent,
    QualificationsComponent,
    DependentsComponent,
    AboutComponent,
    EmployeesComponent,
    EmployeeItemComponent,
    EmployeeDetailComponent,
    EmployeeListComponent,
    BasicInfoDetailsComponent,
    PersonalInfoDetailsComponent,
    QualificationDetailsComponent,
    WorkDetailsComponent,
    PrevExperienceDetailsComponent,
    DependentsDetailsComponent,
    ExpertiseDetailsComponent,
    HeaderComponent,
    NewqualificationComponent,
    NewinterestComponent,
    NewexperienceComponent,
    ClientsComponent,
    AddClientComponent,
    ClientListComponent,
    ClientDetailsComponent,
    ClientItemComponent,
    InfoComponent,

    FileSelectDirective,

    EmployeeLeaveComponent,

    ApplyLeaveComponent,

    EmployeeLeaveDetailComponent,

    LeaveDetailsComponent,

    AllLeavesComponent,

    AddPrivilageLeaveComponent,

    FilteredLeavesComponent,

    NavbarComponent,

    HomeComponent,

    AddsalaryComponent,

    HomeNavbarComponent,

    AttendanceComponent,
    NewempsalaryComponent,
    PayrollComponent,
    SalaryslipComponent,
    EmployeeSalaryComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatStepperModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    MatCheckboxModule,
    AppRoutingModule,
    MatCheckboxModule,    
  ],
  providers: [EmployeeService,FirestoreService,FirestoreClientService,FirestoreLeaveService,AttendanceService],
  bootstrap: [AppComponent],
  entryComponents:[NewqualificationComponent,NewinterestComponent,NewexperienceComponent,AddPrivilageLeaveComponent,AddsalaryComponent,
  NewempsalaryComponent,EmployeeSalaryComponent,]
})
export class AppModule { }
