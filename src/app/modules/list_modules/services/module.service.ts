import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Module } from 'src/app/core/models/module.model';
import { ApiDto } from 'src/app/shared/dto/api.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private httpClient: HttpClient) { }

  getModules(idUser: string): Observable<ApiDto<Module[]>> {
    const fields = 'id, name, date, start_time, duration, city.name, state.label, session.name'
    const filter = {
      intervenants: {
        directus_users_id: {
          _eq: '10c73948-5f9e-498f-9d90-4d89d0f3a407'
        }
      }
    }
    return this.httpClient.get<ApiDto<Module[]>>(environment.apiUrl + `/items/module?fields=${fields}&filter=${JSON.stringify(filter)}`);
  }

  // getModule(id: string): Observable<Module> {}
}
