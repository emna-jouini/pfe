import { Component,Inject,OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../../../core/services/admin.service';

import { faUsers, faUser, faRightToBracket, faPhoneVolume, faLocationDot, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Observer } from 'rxjs';
import { Admin } from '../../../core/models/user';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-add-update-admin',
  templateUrl: './add-update-admin.component.html',
  styleUrl: './add-update-admin.component.scss'
})
export class AddUpdateAdminComponent {
  addUpdateAdminForm: FormGroup = new FormGroup({});
  users = faUsers;
  login = faRightToBracket;
  user = faUser;
  phone = faPhoneVolume;
  address = faLocationDot;
  email = faEnvelope;
  password = faLock;

  constructor(private fb: FormBuilder, private adminService: AdminService,private notificationservice:NotificationService,
    
     private dialogRef: MatDialogRef<AddUpdateAdminComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

     ngOnInit() {
      this.prepareAddUpdateAdminForm();
    }
    
    prepareAddUpdateAdminForm() {
      this.addUpdateAdminForm = this.fb.group({
        CIN: ['', [Validators.required]],
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        birthDate: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        hireDate: ['', [Validators.required]],
        role: [{value: '', disabled: this.data ? true : false}, [Validators.required]],
        phone: ['', [Validators.required]],
        address: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
      });
    
      if (this.data) {
        this.addUpdateAdminForm.patchValue(this.data);
      }
    }
    prepareData() {
      let formModel = this.addUpdateAdminForm.value;
      let data = {
        CIN: formModel.CIN,
        firstName: formModel.firstName,
        lastName: formModel.lastName,
        birthDate: formModel.birthDate,
        gender: formModel.gender,
        hireDate: formModel.hireDate,
        role: formModel.role,
        phone: formModel.phone,
        address: formModel.address,
        email: formModel.email,
      };
      return data;
    }

  isRequiredField(fieldName: string): boolean {
    const formControl = this.addUpdateAdminForm.get(fieldName);
    return formControl ? formControl.hasError('required') && formControl.touched : false;
  }


  onSubmit() {
    const data = this.prepareData();
  
    if (this.data) {
   
      const observer: Observer<Admin> = {
        next: (response) => {
       
          console.log('Succes de mise à jour', response);
          this.notificationservice.showSuccess("L'administrateur a été modifié avec succès")
          this.dialogRef.close(true); 
         
        },
        error: (error) => {
      
          console.error("Echec de mise à jour", error);
          this.notificationservice.showError("Echec de mise à jour")
        },
        complete: () => {
        
        },
      };
  
      this.adminService.updateAdmin(this.data.id, data).subscribe(observer);
    } else {
      
      const observer: Observer<Admin> = {
        next: (response) => {
        
          console.log('Admin ajouté avec succès', response);
          this.notificationservice.showSuccess('Admin ajouté avec succès');
          this.dialogRef.close(true); 
        },
        error: (error) => {
       
          console.error("Échec D'ajout", error);
          this.notificationservice.showSuccess("Échec D'ajout D'admin");
        },
        complete: () => {
        
        },
      };
  
      this.adminService.addAdmin(data).subscribe(observer);
    }
  }
  
 
  
}
