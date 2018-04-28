import { HomeComponent } from './home/home.component';
import { CodeblockComponent } from './codeblock/codeblock.component';
import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder }   from '@angular/forms';
import { AuthenticationModule } from './authentication/authentication.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabaseProvider, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth, AngularFireAuthProvider } from 'angularfire2/auth';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { environment } from './../environments/environment';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { CodeblockListComponent } from './codeblock-list/codeblock-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    LoginComponent,
    HomeComponent,
    CodeblockComponent,
    CodeblockListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: 'codeblock/:key', component: CodeblockComponent},
      { path: 'login', component: LoginComponent},
      { path: '', component: HomeComponent}
    ]),
    AceEditorModule,
    AuthenticationModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
