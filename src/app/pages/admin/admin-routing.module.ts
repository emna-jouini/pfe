import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { ListClientComponent } from './list-client/list-client.component';
import { AdminComponent } from './admin.component';
const routes: Routes = [ {
  path: '',
  component: AdminComponent,
  children: [
    { path: 'client', component: ListClientComponent },
    { path: '', component: ListAdminComponent},
   
    { path: 'admin',component: ListAdminComponent}
  ]
},];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
