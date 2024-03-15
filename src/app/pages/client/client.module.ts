import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatTableModule,
    MatTableModule,
    MatListModule,
    MatExpansionModule,
    MatDividerModule,
    MatSidenavModule

  ]
})
export class ClientModule { }
