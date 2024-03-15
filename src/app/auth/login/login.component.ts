import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { Validators } from '@angular/forms';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { NotificationService } from '../../core/services/notification.service';
import { faUsers, faUser, faRightToBracket, faPhoneVolume, faLocationDot, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup=new FormGroup({}); 
  showGlobalError: boolean = false;
  users = faUsers;
  login = faRightToBracket;
  user = faUser;
  phone = faPhoneVolume;
  address = faLocationDot;
  email = faEnvelope;
  password = faLock;
  showPassword: boolean = false;


  constructor(private fb: FormBuilder,private authService: AuthService,private router: Router,private localstorage:LocalStorageService,private notificationService:NotificationService) 
  {}

  ngOnInit() {
    this.prepareLoginForm();
  }

  prepareLoginForm() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/[a-zA-Z]/)]],
    });
  }
  
  isRequiredField(fieldName: string): boolean {
    const formControl = this.loginForm.get(fieldName);
    return formControl ? formControl.hasError('required') && formControl.touched : false;
  }


  prepareData() {
    let formModel=this.loginForm.value;
      let data = {
        login: formModel.login,
        password: formModel.password
      };
    
       return data;

}



onLogin() {
  if (this.loginForm.valid) {
    const loginData = this.prepareData();

    this.authService.login(loginData).subscribe({
      next: (response) => {
        console.log('Connexion réussie', response);
        this.notificationService.showSuccess('Connexion réussie');
        this.localstorage.saveToken('token', response.token);
        this.router.navigate(['/pages']);
      },
      error: (error) => {
        console.error('Erreur de connexion', error);
        this.showGlobalError = true;
      
      }
    });
  } else {
    this.loginForm.markAllAsTouched();

  }
}
togglePasswordVisibility(event: Event) {
  if (event.target instanceof HTMLInputElement) {
    this.showPassword = event.target.checked;
  }
}



}
  



  
