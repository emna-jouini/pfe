import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrl: './compte.component.scss'
})
export class CompteComponent {
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

