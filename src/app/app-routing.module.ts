import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CommercialRequestsComponent } from './commercial-requests/commercial-requests.component';
import { RetailRequestsComponent } from './retail-requests/retail-requests.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { RequestDetailRetailComponent } from './request-detail-retail/request-detail-retail.component';
import { OwnStationsComponent } from './own-stations/own-stations.component';
import { MarkersComponent } from './markers/markers.component';
import { StationsDetailComponent } from './stations-detail/stations-detail.component';
import { MarkerDetailComponent } from './marker-detail/marker-detail.component';
import { ParametersComponent } from './parameters/parameters.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyComponent } from './company/company.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { TrackingHistoryComponent } from './tracking-history/tracking-history.component';
import { TrackingDetailComponent } from './tracking-detail/tracking-detail.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'create-user',
    component: CreateUserComponent
  },
  {
    path: 'edit-user',
    component: EditUserComponent
  },
  {
    path: 'commercial-requests',
    component: CommercialRequestsComponent
  },
  {
    path: 'retail-requests',
    component: RetailRequestsComponent
  },
  {
    path: 'request-detail',
    component: RequestDetailComponent
  },
  {
    path: 'request-detail-retail',
    component: RequestDetailRetailComponent
  },
  {
    path: 'own-stations',
    component: OwnStationsComponent
  },
  {
    path: 'markers',
    component: MarkersComponent
  },
  {
    path: 'stations-detail',
    component: StationsDetailComponent
  },
  {
    path: 'marker-detail',
    component: MarkerDetailComponent
  },
  {
    path: 'parameters',
    component: ParametersComponent
  },
  {
    path: 'add-brand',
    component: AddBrandComponent
  },
  {
    path: 'add-company',
    component: AddCompanyComponent
  },
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: 'add-branch',
    component: AddBranchComponent
  },
  {
    path: 'tracking-history',
    component: TrackingHistoryComponent
  },
  {
    path: 'tracking-detail',
    component: TrackingDetailComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'project-detail',
    component: ProjectDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
