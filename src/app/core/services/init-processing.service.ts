import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';
import { ApiDto } from 'src/app/shared/dto/api.dto';
import { User } from '../models/users.model';
import { InitService } from './init.service';
import jwtDecode, { JwtPayload } from "jwt-decode";
import { TokenPayloadDto } from 'src/app/shared/dto/token-payload.dto';

@Injectable({
  providedIn: 'root'
})
export class InitProcessingService {
  private _idUser: string = '';

  constructor(private readonly initService: InitService) {}

  setData(): Promise<boolean> {

    const token: string | null = sessionStorage.getItem('Token');

    if (token) {
      this._idUser = jwtDecode<TokenPayloadDto>(token).id;
    }

    return Promise.resolve(true);

  }

  set idUser(token: string) {
    this._idUser = jwtDecode<TokenPayloadDto>(token).id;;
  }

  get idUser(): string {
    return this._idUser;
  }

  clearData(): void {
    this._idUser = '';
  }
}
