import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';


@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent {

  forgetForm: FormGroup = new FormGroup({});
  showGlobalError: boolean = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  
  ) {}

  ngOnInit(): void {
    this.prepareForgetForm();
  }

  prepareForgetForm() {
    this.forgetForm = this.fb.group({
      login: ['', [Validators.required,Validators.pattern(/^\d{8}$/)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  prepareData() {
    const formModel = this.forgetForm.value;
    return {
      login: formModel.login,
      email: formModel.email
    };
  }

  forgetPassword(): void {
    if (this.forgetForm.valid) {
      const forgetData = this.prepareData();

      this.authService.forgetPassword(forgetData).subscribe({
        next: (response) => {
          console.log(response);
          alert('Un e-mail de réinitialisation du mot de passe a été envoyé. Veuillez vérifier votre boîte de réception.');
        },
        error: (error) => {
          console.error('Erreur lors de la réinitialisation du mot de passe', error);
          this.showGlobalError = true;
      
        }
      });
    } else {
      this.forgetForm.markAllAsTouched();
    }
  }
  isRequiredField(fieldName: string): boolean {
    const formControl = this.forgetForm.get(fieldName);
    return formControl ? formControl.hasError('required') && formControl.touched : false;
  }
}
