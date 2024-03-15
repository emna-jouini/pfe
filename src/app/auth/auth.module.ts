import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { ResetComponent } from './reset/reset.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecaptchaModule } from 'ng-recaptcha';
import { ForgetComponent } from './forget/forget.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';



@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    ResetComponent,
    ForgetComponent,
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RecaptchaModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIcon,
    MatLabel,
    MatFormField
  
  ]

})
export class AuthModule { }