import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BlockUIModule } from 'ng-block-ui';
import { CommercialRequestsComponent } from './commercial-requests/commercial-requests.component';
import { RetailRequestsComponent } from './retail-requests/retail-requests.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { RequestDetailRetailComponent } from './request-detail-retail/request-detail-retail.component';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    CommercialRequestsComponent,
    RetailRequestsComponent,
    RequestDetailComponent,
    RequestDetailRetailComponent,
    UsersComponent,
    CreateUserComponent,
    EditUserComponent,
    OwnStationsComponent,
    MarkersComponent,
    StationsDetailComponent,
    MarkerDetailComponent,
    ParametersComponent,
    AddBrandComponent,
    AddCompanyComponent,
    CompanyComponent,
    AddBranchComponent,
    TrackingHistoryComponent,
    TrackingDetailComponent,
    HomeComponent,
    WorkComponent,
    ProjectDetailComponent
  ],
  imports: [
    BlockUIModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
