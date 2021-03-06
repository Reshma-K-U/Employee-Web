import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { GridModule } from '@progress/kendo-angular-grid';



import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import {AngularFireStorageModule} from 'angularfire2/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyBzsyyLdJBjK0kZcEPPiorS38Ij7Hg3LTw',
  authDomain: 'getexalture.firebaseapp.com',
  databaseURL: 'https://getexalture.firebaseio.com',
  projectId: 'getexalture',
  storageBucket: 'getexalture.appspot.com',
  messagingSenderId: '43275888739'
};



import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTreeModule} from '@angular/material/tree';

import {EmployeeService} from './employees/services/employee.services';
import {FirestoreService} from '../app/services/firestore.service';
import {FirestoreClientService} from './clients/services/firestore.service';
import {AttendanceService } from './attendance/service/attendance.service';
import {TaxComputationService} from './payroll/tds/service/tax-computation.service';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';


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
import { EmployeeSalaryComponent} from './employees/employee-salary/employee-salary.component';
import { SalaryslipComponent} from './payroll/salaryslip/salaryslip.component';


import { PayrollComponent } from './payroll/payroll.component';
import { AddsalaryComponent } from './payroll/addsalary/addsalary.component';
import { NewempsalaryComponent } from './payroll/newempsalary/newempsalary.component';
import { NewdependentComponent } from './employees/employee-detail/dependents-details/newdependent/newdependent.component';

import { EmployeeAttendanceComponent } from './employees/employee-attendance/employee-attendance.component';
import { AttendanceCalendarComponent } from './employees/employee-attendance/attendance-calendar/attendance-calendar.component';


import { SalaryComponent } from './employees/add-employee/salary/salary.component';
import { SalaryDetailsComponent } from './employees/employee-detail/salary-details/salary-details.component';
import { AllsalaryslipsComponent } from './payroll/allsalaryslips/allsalaryslips.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { AddprojectComponent } from './project/addproject/addproject.component';
import { EmployeeDocumentsComponent } from './employees/employee-documents/employee-documents.component';
import { AssetsComponent } from './assets/assets.component';
import { AddassetsComponent } from './assets/addassets/addassets.component';
import { ClientPaymentComponent } from './clients/client-details/client-payment/client-payment.component';
import { ClientInvoiceComponent } from './clients/client-details/client-invoice/client-invoice.component';
import { NewInvoiceComponent } from './clients/client-details/new-invoice/new-invoice.component';

import { ProjectItemComponent } from './project/project-list/project-item/project-item.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { AccountstatementComponent } from './payroll/accountstatement/accountstatement.component';
import { AssignassetsComponent } from './assets/assignassets/assignassets.component';
import { SearchassetsComponent } from './assets/searchassets/searchassets.component';
import { EditassetsComponent } from './assets/editassets/editassets.component';
import { ProjInfoComponent } from './project/project-detail/proj-info/proj-info.component';
import { ProjDocComponent } from './project/project-detail/proj-doc/proj-doc.component';
import { TdsComponent } from './payroll/tds/tds.component';
import { IncomeComponent } from './payroll/tds/income/income.component';
import { DeductionsComponent } from './payroll/tds/deductions/deductions.component';
import { ExemptionsComponent } from './payroll/tds/exemptions/exemptions.component';
import { PerquisiteComponent } from './payroll/tds/perquisite/perquisite.component';
import { ProjPaymentComponent } from './project/project-detail/proj-payment/proj-payment.component';
import { ProjInvoiceComponent } from './project/project-detail/proj-invoice/proj-invoice.component';
import { OtherincomeComponent } from './payroll/tds/otherincome/otherincome.component';
import { ResultComponent } from './payroll/tds/result/result.component';
import { HousepropertyComponent } from './payroll/tds/houseproperty/houseproperty.component';
import { PreviousEmployerComponent } from './payroll/tds/previous-employer/previous-employer.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AddaccountsComponent } from './accounts/addaccounts/addaccounts.component';
import { ClientDocComponent } from './clients/client-details/client-doc/client-doc.component';
import { EmployeeTermComponent } from './employees/employee-term/employee-term.component';



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
    NewdependentComponent,
    EmployeeAttendanceComponent,
    AttendanceCalendarComponent,

    SalaryComponent,
    SalaryDetailsComponent,
    AllsalaryslipsComponent,
    ProjectComponent,
    ProjectListComponent,
    AddprojectComponent,
    EmployeeDocumentsComponent,
    AssetsComponent,
    AddassetsComponent,
    ClientPaymentComponent,
    ClientInvoiceComponent,
    NewInvoiceComponent,
    ProjectItemComponent,
    ProjectDetailComponent,
    AccountstatementComponent,
    AssignassetsComponent,
    SearchassetsComponent,
    EditassetsComponent,
    ProjInfoComponent,
    ProjDocComponent,
    TdsComponent,
    IncomeComponent,
    DeductionsComponent,
    ExemptionsComponent,
    PerquisiteComponent,
    ProjPaymentComponent,
    ProjInvoiceComponent,
    OtherincomeComponent,
    ResultComponent,
    HousepropertyComponent,
    PreviousEmployerComponent,
    AccountsComponent,
    AddaccountsComponent,
    ClientDocComponent,
    EmployeeTermComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
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
    MatGridListModule,
    MatTreeModule,
    MatListModule,
    MatDividerModule,
    AppRoutingModule,
    MatCheckboxModule,
    PdfViewerModule,
    HttpClientModule,

    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),

    GridModule
  ],
  providers: [EmployeeService, FirestoreService, FirestoreClientService, FirestoreLeaveService, AttendanceService
  , TaxComputationService],
  bootstrap: [AppComponent],
  entryComponents: [NewqualificationComponent, NewinterestComponent, NewexperienceComponent, AddPrivilageLeaveComponent, AddsalaryComponent,
  NewempsalaryComponent, EmployeeSalaryComponent, NewdependentComponent, ClientInvoiceComponent,
  AddassetsComponent, AssignassetsComponent, SearchassetsComponent, ProjectComponent, EditassetsComponent, ProjInvoiceComponent]
})
export class AppModule { }
