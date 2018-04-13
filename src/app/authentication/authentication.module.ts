import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationService } from './authentication.service'
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  declarations: [],
  providers: [
    AuthenticationService,
    UserService
  ]
})
export class AuthenticationModule { }
