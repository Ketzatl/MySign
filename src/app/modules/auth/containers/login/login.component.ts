import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastProcessingService } from 'src/app/core/services/toast-processing.service';
import { LoginDto } from '../../dto/login.dto';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  listSubScriptions: Subscription[] = [];

  constructor(
    private formBuider: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastProcessingService: ToastProcessingService
  ) {
    this.loginForm = this.initForm();
  }

  ngOnInit(): void {}

  initForm(): FormGroup {
    return this.formBuider.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.listSubScriptions.push(
        this.authService.login(this.loginForm.value as LoginDto).subscribe({
          next: (value) => {
            console.log(value);
            this.toastProcessingService.success(
              'Bienvenue !',
              'Bienvenue sur MySign'
            );
            this.router.navigate(['']);
          },
          error: (err) =>
            this.toastProcessingService.error(
              'Erreur',
              'Identifiant ou mot de passe incorrect !'
            ),
        })
      );
    } else {
      this.toastProcessingService.error('Erreur', 'Champs incorrect');
    }
  }

  ngOnDestroy(): void {
    this.listSubScriptions.forEach((s) => s.unsubscribe());
  }
}
