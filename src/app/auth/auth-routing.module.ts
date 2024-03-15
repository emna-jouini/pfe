import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { AuthComponent } from './auth.component';
import { ForgetComponent } from './forget/forget.component';

const routes: Routes = [ {
  path: '',
  component: AuthComponent,
  children: [
    { path: 'login', component: LoginComponent },
    { path: 'forget', component: ForgetComponent },
    { path: 'reset', component: ResetComponent },
    { path: '**', redirectTo: 'login' }
  ]
},];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
