import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatDialogModule} from '@angular/material/dialog';

import { ReactiveFormsModule } from '@angular/forms';

import { ListAdminComponent } from './list-admin/list-admin.component';
import { MatTableModule } from '@angular/material/table';

import { AddUpdateAdminComponent } from './add-update-admin/add-update-admin.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { HttpClientModule } from '@angular/common/http';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TableModule } from 'ngx-easy-table';
import { ListClientComponent } from './list-client/list-client.component';
import { AddupdateClientComponent } from './addupdate-client/addupdate-client.component';
import { AdminComponent } from './admin.component';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';




@NgModule({
  declarations: [
   
 
  
    ListAdminComponent,
  
    AddUpdateAdminComponent,
        ListClientComponent,
        AddupdateClientComponent,
        AdminComponent,
  
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
    MatDialogModule,
    ReactiveFormsModule,
  MatTableModule,

  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  HttpClientModule,
  MatPaginatorModule,
  MatSortModule,
  MatSnackBarModule,
  MatTooltipModule,
  TableModule,
  MatListModule,
  MatExpansionModule,
  MatDividerModule,
  MatSidenavModule



 
 
    
  ],
  bootstrap: [AdminModule]
})
export class AdminModule { }
