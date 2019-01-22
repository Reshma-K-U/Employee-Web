import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeItemComponent } from './employees/employee-list/employee-item/employee-item.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { AddClientComponent } from './clients/add-client/add-client.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { ApplyLeaveComponent } from './employees/employee-leave/apply-leave/apply-leave.component';
import { EmployeeLeaveDetailComponent } from './employees/employee-leave/employee-leave-detail/employee-leave-detail.component';
import { LeaveDetailsComponent } from './home/leave-details/leave-details.component';
import { EmployeeLeaveComponent } from './employees/employee-leave/employee-leave.component';
import { HeaderComponent } from './employees/header/header.component';
import {HomeComponent} from './home/home.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { PayrollComponent } from './payroll/payroll.component';
import { SalaryslipComponent } from './payroll/salaryslip/salaryslip.component';
import { EmployeeSalaryComponent } from './employees/employee-salary/employee-salary.component';
import { SalaryComponent } from './employees/add-employee/salary/salary.component';
import { PersonalInfoComponent } from './employees/add-employee/personal-info/personal-info.component';
import { AllsalaryslipsComponent } from './payroll/allsalaryslips/allsalaryslips.component';
import { AssetsComponent } from './assets/assets.component';
import { AccountstatementComponent } from './payroll/accountstatement/accountstatement.component';
import { SearchassetsComponent } from './assets/searchassets/searchassets.component';
import { EditassetsComponent } from './assets/editassets/editassets.component';
const routes: Routes = [
  {path:'',component:EmployeesComponent,pathMatch:'full'},
  {path:'employees',component:EmployeesComponent},
  {path:'employee-list',component:EmployeeListComponent},
  {path:'add',component:AddEmployeeComponent},
  {path:'employee-detail/:id',component:EmployeeDetailComponent},
  {path:'add-client',component:AddClientComponent},
  {path:'client-list',component:ClientListComponent},
  {path:'client-details/:id',component:ClientDetailsComponent},
  {path:'apply-leave/:id',component:ApplyLeaveComponent},
  {path:'employee-leave-detail',component:EmployeeLeaveDetailComponent},
  {path:'company-profile',component:LeaveDetailsComponent},
  {path:'employee-leave',component:EmployeeLeaveComponent},
  {path:'view/:id',component:HeaderComponent},
  {path:'home',component:HomeComponent},
  {path:'attendance',component:AttendanceComponent},
  {path:'payroll',component:PayrollComponent},
  {path:'assets',component:AssetsComponent},
  {path:'salaryslip',component:SalaryslipComponent},
  {path:'./employee/employee-salary/employee-salary.component',component:EmployeeSalaryComponent},
  {path:'employee-salary',component:EmployeeSalaryComponent},
  {path:'allsalaryslips',component:AllsalaryslipsComponent},
  {path:'accountstatement',component:AccountstatementComponent},
  {path:'searchassets',component:SearchassetsComponent},
  {path:'editassets',component:EditassetsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
