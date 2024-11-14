import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InfoStaffComponent } from './components/info-staff/info-staff.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { StaffComponent } from './components/staff/staff.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { OverviewComponent } from './components/overview/overview.component';
import { AcountInfoComponent } from './components/acount-info/acount-info.component';
import { StaffListComponent } from './staff-list/staff-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoStaffComponent,
    HomeComponent,
    LoginComponent,
    StaffComponent,
    AcountInfoComponent,
    ChangePassComponent,
    OverviewComponent,
    StaffListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
