import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// material module
import {MaterialModule} from './material/material.module';

// ngx-modules
//import {NgxBootstrapModule} from './ngx-bootstrap/ngx-bootstrap.module'; 
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './user-details/user-components/register/register.component';
import { LoginComponent } from './user-details/user-components/login/login.component';
import { UserListComponent } from './user-details/user-components/user-list/user-list.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { AboutComponent } from './about/about.component';
import { AboutChildComponent } from './about-child/about-child.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    RegisterComponent,
    LoginComponent,
    UserListComponent,
    HomeComponent,
    FileUploadComponent,
    AboutComponent,
    AboutChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserAnimationsModule,

    HttpClientModule,
    NgxMatFileInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
