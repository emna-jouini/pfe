  import { Component, DestroyRef, OnInit } from '@angular/core';
  import { FormBuilder,FormGroup,Validators } from '@angular/forms';
  import { AuthService } from '../../core/services/auth.service';
  import { Router } from '@angular/router';
  import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
  import { inject } from '@angular/core';
  
  
  @Component({
    selector: 'app-reset',
    templateUrl: './reset.component.html',
    styleUrl: './reset.component.scss'
  })
  export class ResetComponent implements OnInit {
    private destroyRef = inject(DestroyRef);
    resetForm: FormGroup = new FormGroup({});
    showGlobalError: boolean = false;
    passwordsMatch: boolean=true // passwords match 
    
  
    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }
  
    ngOnInit() {
      this.prepareResetForm();
    }
  
    prepareResetForm() {
      this.resetForm = this.fb.group({
        login: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/[a-zA-Z]/)]],
        validatePassword:  ['', [Validators.required, Validators.minLength(6), Validators.pattern(/[a-zA-Z]/)]]
      });
  
      //  changes in password 
      this.resetForm.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        this.passwordsMatch = this.validatePasswordsMatch();
      });
    }
  
    prepareData() {
      let formModel = this.resetForm.value;
      let data = {
        login:formModel.login,
        password: formModel.password,
        validatePassword: formModel.validatePassword
      };
      return data;
    }
  
    resetPassword() {
      if (this.validatePasswordsMatch()) {
        if (this.resetForm.valid){
        const data = this.prepareData();
      
        this.authService.resetPassword(data).subscribe({
          next: (response) => {
            console.log('Succès de réinitialisation', response);
            this.router.navigate(['/auth/login']);
          },
          error: (error) => {
            console.error('Erreur lors de la réinitialisation ', error);
            this.showGlobalError = true;

          }
        });}
      } else {
        console.error('les mots de passe ne sont pas correpondants ');
      }
    }
  
    public validatePasswordsMatch(): boolean {
      const password = this.resetForm.get('password')?.value;
      const validatePassword = this.resetForm.get('validatePassword')?.value;
      return password === validatePassword;
    }
   
    isRequiredField(fieldName: string): boolean {
      const formControl = this.resetForm.get(fieldName);
      return formControl ? formControl.hasError('required') && formControl.touched : false;
    }
  }
  
