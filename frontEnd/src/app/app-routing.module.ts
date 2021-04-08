import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { LoginComponent } from './user-details/user-components/login/login.component';
import { RegisterComponent } from './user-details/user-components/register/register.component';
import { UserListComponent } from './user-details/user-components/user-list/user-list.component';

const routes: Routes = [
  { path: "login",     component: LoginComponent },
  { path: "register",  component: RegisterComponent },
  { path: "user-list", component: UserListComponent },
  { path: "home", component: HomeComponent },
  { path: "file-upload", component: FileUploadComponent },
  { path: "about", component: AboutComponent },
  { path: "**",        component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
