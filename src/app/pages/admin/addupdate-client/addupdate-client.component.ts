
import { Component,Inject,OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from '../../../core/services/client.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { faUsers, faUser, faRightToBracket, faPhoneVolume, faLocationDot, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Observer } from 'rxjs';
import {Client} from '../../../core/models/user';
import { NotificationService } from '../../../core/services/notification.service';


@Component({
  selector: 'app-addupdate-client',
  templateUrl: './addupdate-client.component.html',
  styleUrl: './addupdate-client.component.scss'
})
export class AddupdateClientComponent {
  addUpdateClientForm: FormGroup = new FormGroup({});
  users = faUsers;
  login = faRightToBracket;
  user = faUser;
  phone = faPhoneVolume;
  address = faLocationDot;
  email = faEnvelope;
  password = faLock;
  constructor(private fb: FormBuilder, private clientservice:ClientService,private notificationservice:NotificationService,
    
    private dialogRef: MatDialogRef<AddupdateClientComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
     this.prepareAddUpdateClientForm();
   }
   prepareAddUpdateClientForm() {
    this.addUpdateClientForm = this.fb.group({
      CIN: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      job: ['', [Validators.required]],
      role: [{value: '', disabled: this.data ? true : false}, [Validators.required]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  
    if (this.data) {
      this.addUpdateClientForm.patchValue(this.data);
    }
  }

  prepareData() {
    let formModel = this.addUpdateClientForm.value;
    let data = {
      CIN: formModel.CIN,
      firstName: formModel.firstName,
      lastName: formModel.lastName,
      birthDate: formModel.birthDate,
      gender: formModel.gender,
      salary: formModel.salary,
      job: formModel.job,
      role: formModel.role,
      phone: formModel.phone,
      address: formModel.address,
      email: formModel.email,
    };
    return data;
  }

isRequiredField(fieldName: string): boolean {
  const formControl = this.addUpdateClientForm.get(fieldName);
  return formControl ? formControl.hasError('required') && formControl.touched : false;
}
onSubmit() {
  const data = this.prepareData();

  if (this.data) {
 
    const observer: Observer<Client> = {
      next: (response) => {
     
        console.log('Succes de mise à jour', response);
        this.notificationservice.showSuccess("Le client a été modifié avec succès")
        this.dialogRef.close(true); 
       
      },
      error: (error) => {
    
        console.error("Echec de mise à jour", error);
        this.notificationservice.showError("Echec de mise à jour")
      },
      complete: () => {
      
      },
    };

    this.clientservice.updateClient(this.data.id, data).subscribe(observer);
  } else {
    
    const observer: Observer<Client> = {
      next: (response) => {
      
        console.log('Client ajouté avec succès', response);
        this.notificationservice.showSuccess('Client ajouté avec succès');
        this.dialogRef.close(true); 
      },
      error: (error) => {
     
        console.error("Échec D'ajout", error);
        this.notificationservice.showSuccess("Échec D'ajout De Client");
      },
      complete: () => {
      
      },
    };

    this.clientservice.addClient(data).subscribe(observer);
  }
}


}
