import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthProcessingService } from 'src/app/core/services/auth-processing.service';
import { TokenDto } from 'src/app/shared/dto/token.dto';
import { environment } from 'src/environments/environment';
import { LoginDto } from '../dto/login.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private authProcessService: AuthProcessingService
  ) {}

  // Connexion utilisateur
  login(loginDto: LoginDto): Observable<TokenDto> {
    return this.httpClient
      .post<TokenDto>(environment.apiUrl + '/auth/login', loginDto)
      .pipe(tap((res: TokenDto) => this.authProcessService.setSession(res)));
  }
}
