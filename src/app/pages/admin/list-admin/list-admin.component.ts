import { Component, ViewChild,OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { adminList } from '../../../core/models/user';
import { AdminService } from '../../../core/services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUpdateAdminComponent } from '../add-update-admin/add-update-admin.component';
import { NotificationService } from '../../../core/services/notification.service';


@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss'],
})
export class ListAdminComponent implements OnInit  {
  faPlus = faPlus;
  faTrash = faTrash;
  faEdit = faEdit;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['firstName', 'lastName', 'birthDate', 'hireDate','phone', 'address', 'email','action'];
  dataSource: MatTableDataSource<adminList> = new MatTableDataSource<adminList>([]);
  
  constructor(private adminService: AdminService, private dialog: MatDialog,private notificationservive:NotificationService) {}

  ngOnInit(): void {
    this.getAdminList();
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openAddForm() {
  
    const dialogRef = this.dialog.open(AddUpdateAdminComponent);
    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.getAdminList();
        }
      },
    });
  }

//afficher la liste
  getAdminList() {
    this.adminService.getAdminList().subscribe({
      next: (res) => {
        this.dataSource.data = res;
      },
      error: console.error,
    });
  }
 



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteAdmin(id:number) {
    this.adminService.deleteAdmin(id).subscribe({
      next: (res) => {
        this.notificationservive.showSuccess("Administrateur effacé")
        this.getAdminList();
      },
      error: console.log,
    });
  }


  openEditForm(data: any) {
    const dialogRef = this.dialog.open(AddUpdateAdminComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAdminList();
        }
      },
    });
  }
 

}

