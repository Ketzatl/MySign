import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenDto } from 'src/app/shared/dto/token.dto';
import { InitProcessingService } from './init-processing.service';

@Injectable({
  providedIn: 'root',
})
export class AuthProcessingService {
  private authStatus = new BehaviorSubject<boolean>(false);

  constructor(private readonly router: Router, private readonly initProcessingService: InitProcessingService) {}

  // Vérifie si l'utilisateur est connecté (si il a un token)
  isAuth(): Observable<boolean> {
    if (sessionStorage.getItem('Token')) {
      this.authStatus.next(true);
    } else {
      this.authStatus.next(false);
    }
    return this.authStatus.asObservable();
  }

  // Sauvegarde du token dans le session storage
  setSession(tokenDto: TokenDto): void {
    sessionStorage.setItem('Token', tokenDto.access_token);
    this.authStatus.next(true);
  }

  logout() {
    sessionStorage.clear();
    this.authStatus.next(false);
    this.initProcessingService.clearData();
    this.router.navigate(['/auth/login']);
  }
}
