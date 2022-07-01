import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { empty, Observable, Subscription, switchMap } from 'rxjs';
import { User } from 'src/app/core/models/users.model';
import { ConnectionProcessingService } from 'src/app/core/services/connection-processing.service';
import { InitProcessingService } from 'src/app/core/services/init-processing.service';
import { ToastProcessingService } from 'src/app/core/services/toast-processing.service';
import { ApiDto } from 'src/app/shared/dto/api.dto';
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
    private toastProcessingService: ToastProcessingService,
    private connectionProcessingService: ConnectionProcessingService,
    private initProcessingService: InitProcessingService
  ) {
    this.loginForm = this.initForm();
  }

  ngOnInit(): void {
    this.connectionProcessingService.status().subscribe((b: boolean) => {
      console.log(b);
    });

    // console.log(this.onlineStatusService.getStatus());

    // this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
    //   // Retrieve Online status Type
    //   console.log(status);
    // });
  }

  initForm(): FormGroup {
    return this.formBuider.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.listSubScriptions.push(
        this.authService.login(this.loginForm.value as LoginDto)
        .subscribe({
          next: (value) => {
            this.initProcessingService.idUser = value.data.access_token;
            this.toastProcessingService.success(
              'Bienvenue !',
              'Bienvenue sur MySign'
            );
            this.initProcessingService.setData()
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
