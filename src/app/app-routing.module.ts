import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './wdrComponents/user/login/login.component';
import { HomeComponent } from './wdrComponents/wdrdashboard/home/home.component';
import { AddobservationslipComponent } from './wdrComponents/observationslip/addobservationslip/addobservationslip.component';
import { ViewobservationslipComponent } from './wdrComponents/observationslip/viewobservationslip/viewobservationslip.component';
import { EditobservationslipComponent } from './wdrComponents/observationslip/editobservationslip/editobservationslip.component';
import { RegisterComponent } from './wdrComponents/user/register/register.component';
import { EditComponent } from './wdrComponents/user/edit/edit.component';
import { ViewComponent } from './wdrComponents/user/view/view.component';
import { ChangePasswordComponent } from './wdrComponents/user/edit/change-password/change-password.component';
import { ImportCSVobservationslipComponent } from './wdrComponents/DataImport/import-csvobservationslip/import-csvobservationslip.component';
import { ViewWdrUsersComponent } from './wdrComponents/user/view-wdr-users/view-wdr-users.component';
import { ObservationslipReportComponent } from './wdrComponents/ReportGeneration/observationslip-report/observationslip-report.component';

const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'add-observationslip',
      component: AddobservationslipComponent

    },
    {
      path: 'view-observationslips',
      component: ViewobservationslipComponent

    },
    {
      path: 'edit-observationslip',
      component: EditobservationslipComponent

    },
    {
      path: 'import-observationslip',
      component: ImportCSVobservationslipComponent

    },
    {
      path: 'change-password',
      component: ChangePasswordComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'edit-user',
      component: EditComponent
    },
    {
      path: 'view-users',
      component:ViewWdrUsersComponent
    },
    {
      path: 'view-user',
      component:ViewComponent
    },
    {
      path: 'change-password',
      component: ChangePasswordComponent
    },
    {
      path: 'observationslip-report',
      component: ObservationslipReportComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
