import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { AluminiComponent } from './alumini/alumini.component';
import { EmployerComponent } from './employer/employer.component';

import { AdminComponent } from './admin/admin.component';
import { AlljobsComponent } from './alljobs/alljobs.component';
import { JobpostComponent } from './jobpost/jobpost.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { EmployerHomeComponent } from './employer-home/employer-home.component';
import { FacultyHomeComponent } from './faculty-home/faculty-home.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { EditFacultyComponent } from './edit-faculty/edit-faculty.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { AlumniHomeComponent } from './alumni-home/alumni-home.component';
import { AlumniService } from './alumni.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ApplyJobComponent } from './apply-job/apply-job.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { EmployerProfileComponent } from './employer-profile/employer-profile.component';
import { UpdateAlumniComponent } from './update-alumni/update-alumni.component';


@NgModule({
  declarations: [
    AppComponent,
    AluminiComponent,
    EmployerComponent,
    
    AdminComponent,
    AlljobsComponent,
    JobpostComponent,
    NavbarComponent,
    IndexComponent,
    FooterComponent,
    AdminHomeComponent,
    EmployerLoginComponent,
    EmployerHomeComponent,
    AboutusComponent,
    FacultyHomeComponent,
    AddFacultyComponent,
    EditFacultyComponent,
    AlumniHomeComponent,
    ApplyJobComponent,
    AppliedJobsComponent,
    EmployerProfileComponent,
    UpdateAlumniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    

  ],
  providers: [AuthService,AlumniService],
  bootstrap: [AppComponent]
})
export class AppModule { }
