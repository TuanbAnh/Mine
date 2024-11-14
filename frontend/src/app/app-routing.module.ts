import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { OverviewComponent } from './components/overview/overview.component';
import { AcountInfoComponent } from './components/acount-info/acount-info.component';
import { InfoStaffComponent } from './components/info-staff/info-staff.component';
import { StaffComponent } from './components/staff/staff.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { StaffListComponent } from './staff-list/staff-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'staff', component: StaffComponent },
      { path: 'info-staff', component: InfoStaffComponent },
      { path: 'acount-info', component: AcountInfoComponent },
      { path: 'change-pass', component: ChangePassComponent },
      { path: 'staff-list', component: StaffListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
