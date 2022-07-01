import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthProcessingService } from 'src/app/core/services/auth-processing.service';
import { ApiDto } from 'src/app/shared/dto/api.dto';
import { TokenDto } from 'src/app/shared/dto/token.dto';
import { environment } from 'src/environments/environment';
import { LoginDto } from '../dto/login.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private authProcessService: AuthProcessingService,
  ) {}

  // Connexion utilisateur
  login(loginDto: LoginDto): Observable<ApiDto<TokenDto>> {
    return this.httpClient
      .post<ApiDto<TokenDto>>(environment.apiUrl + '/auth/login', loginDto)
      .pipe(
        tap((res: ApiDto<TokenDto>) =>
          this.authProcessService.setSession(res.data)
        )
      );
  }
}
