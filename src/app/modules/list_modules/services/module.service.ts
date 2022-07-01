import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Module } from 'src/app/core/models/module.model';
import { ApiDto } from 'src/app/shared/dto/api.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ModuleService {
  constructor(private httpClient: HttpClient) {}

  getModules(idUser: string): Observable<ApiDto<Module[]>> {
    console.log('id', idUser);
    const fields =
      'id, name, date, start_time, duration, city.name, state.label, session.name';
    const filter = {
      intervenants: {
        directus_users_id: {
          _eq: idUser,
        },
      },
      // date: {
      //   _gte: new Date().toISOString(),
      // }
    };

    const sort = 'date, start_time';
    return this.httpClient.get<ApiDto<Module[]>>(
      environment.apiUrl +
        `/items/module?fields=${fields}&filter=${JSON.stringify(filter)}&sort=${sort}`
    );
  }

  getModule(id: string): Observable<ApiDto<Module>> {
    const fields = `id, name, date, start_time, duration, city.name, state.label, session.name, 
      intervenants.state.label, intervenants.signature,
      intervenants.directus_users_id.last_name, intervenants.directus_users_id.first_name, intervenants.directus_users_id.email,
      students.state.label, students.signature,
      students.directus_users_id.last_name, students.directus_users_id.first_name, students.directus_users_id.email`;
    return this.httpClient.get<ApiDto<Module>>(
      environment.apiUrl + `/items/module/${id}?fields=${fields}`
    );
  }
}
