import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
  
    loadChildren: () => import('./auth/auth.module').then(a => a.AuthModule),
  
    
  
  },
  {

  path:'admin',
  loadChildren :() => import('./pages/admin/admin.module').then(m=>m.AdminModule),
 /* canActivate:[authGuard]*/
  },
  
 
  {path:'**',redirectTo:'auth'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
