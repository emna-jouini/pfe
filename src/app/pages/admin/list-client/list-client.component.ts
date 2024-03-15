import { Component, ViewChild,OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {clientList} from '../../../core/models/user';
import {ClientService} from '../../../core/services/client.service';
import { MatDialog } from '@angular/material/dialog';
import { AddupdateClientComponent } from '../addupdate-client/addupdate-client.component';
import { NotificationService } from '../../../core/services/notification.service';


@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrl: './list-client.component.scss'
})
export class ListClientComponent {
  faPlus = faPlus;
  faTrash = faTrash;
  faEdit = faEdit;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['CIN','firstName', 'lastName','gender','phone', 'address', 'email','action'];
  dataSource: MatTableDataSource<clientList> = new MatTableDataSource<clientList>([]);
  
  constructor(private clientService: ClientService, private dialog: MatDialog,private notificationservive:NotificationService) {}

  ngOnInit(): void {
    this.getClientList();
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openAddForm() {
  
    const dialogRef = this.dialog.open(AddupdateClientComponent);
    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.getClientList();
        }
      },
    });
  }

//afficher la liste
  getClientList() {
    this.clientService.getClientList().subscribe({
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

  deleteClient(id:number) {
    this.clientService.deleteClient(id).subscribe({
      next: (res) => {
        this.notificationservive.showSuccess("Client supprimé avec succès")
        this.getClientList();
      },
      error: console.log,
      
    });
  }


  openEditForm(data: any) {
    const dialogRef = this.dialog.open(AddupdateClientComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getClientList();
        }
      },
    });
  }
 



}
