import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatStepperModule } from '@angular/material/stepper';
import {
  MatButtonModule, MatDialogModule, 
  MatInputModule, MatPaginatorModule, MatSortModule,
  MatTableModule, MatToolbarModule, MatIconModule, MatCardModule
} from '@angular/material';

// nebular for theme
import {
  NbThemeModule,
  NbSidebarModule,
  NbLayoutModule,
  NbSidebarService ,
  NbStepperModule,
  NbMenuModule,
  NbCardModule
 } from '@nebular/theme';

  // dialog componets

 // services
import { DataService, UserService } from './wdrComponents/services/allServices';

import { LoginComponent } from './wdrComponents/user/login/login.component';
import { HomeComponent } from './wdrComponents/wdrdashboard/home/home.component';
import { AddobservationslipComponent } from './wdrComponents/observationslip/addobservationslip/addobservationslip.component';
import { ViewobservationslipComponent } from './wdrComponents/observationslip/viewobservationslip/viewobservationslip.component';
import { EditobservationslipComponent } from './wdrComponents/observationslip/editobservationslip/editobservationslip.component';
import { RegisterComponent } from './wdrComponents/user/register/register.component';
import { EditComponent } from './wdrComponents/user/edit/edit.component';
import { ViewComponent } from './wdrComponents/user/view/view.component';
import { ChangePasswordComponent } from './wdrComponents/user/edit/change-password/change-password.component';
import { 
  ImportCSVobservationslipComponent 
} from './wdrComponents/DataImport/import-csvobservationslip/import-csvobservationslip.component';
import { ViewWdrUsersComponent } from './wdrComponents/user/view-wdr-users/view-wdr-users.component';
import { ObservationslipReportComponent } from './wdrComponents/ReportGeneration/observationslip-report/observationslip-report.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddobservationslipComponent,
    ViewobservationslipComponent,
    EditobservationslipComponent,
    RegisterComponent,
    EditComponent,
    ViewComponent,
    ChangePasswordComponent,
    ImportCSVobservationslipComponent,
    ViewWdrUsersComponent,
    ObservationslipReportComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule ,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbSidebarModule,
    NbStepperModule,
    NbMenuModule.forRoot(),
    NbCardModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatDialogModule, MatIconModule,
    MatInputModule, MatPaginatorModule, MatSortModule,
    MatTableModule, MatToolbarModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  entryComponents: [],
  providers: [
      NbSidebarService,
      DataService,
      UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
