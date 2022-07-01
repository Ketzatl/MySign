import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiDto } from 'src/app/shared/dto/api.dto';
import { environment } from 'src/environments/environment';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor(private httpClient: HttpClient) { }

  init(): Observable<ApiDto<User>> {
    const fields = 'id, first_name, last_name, email'
    return this.httpClient.get<ApiDto<User>>(environment.apiUrl + `/users/me?fields=${fields}`);
  }
}
