import { Injectable } from '@angular/core';
import { liveQuery } from 'dexie';
import { Observable, Observer, fromEvent, merge, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ModuleService } from 'src/app/modules/list_modules/services/module.service';
import { db } from '../config/db';
import { Intervenant } from '../models/intervenant.model';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class ConnectionProcessingService {
  constructor(private moduleService: ModuleService) {}

  status(): Observable<boolean> {
    return merge<boolean[]>(
      // of(navigator.onLine),
      fromEvent(window, 'offline').pipe(map(() => false)),
      fromEvent(window, 'online').pipe(map(() => {
        this.sync()
        return true
      })),
      new Observable<boolean>((sub: Observer<boolean>) => {
        sub.next(navigator.onLine);
        sub.complete();
      })
    );
  }

  async sync() {
    const syncIntervenants = async () => {
      await db.intervenants.each((intervenant: Intervenant) => {
        this.moduleService.updateStudent(intervenant).pipe(take(1)).subscribe(val => {
          if (intervenant.id) {
            db.intervenants.delete(intervenant.id);
          }
        })
      });
    }

    const syncStudents = async () => {
      await db.students.each((student: Student) => {
        this.moduleService.updateStudent(student).pipe(take(1)).subscribe(val => {
          if (student.id) {
            db.students.delete(student.id);
          }
        })
      });
    }

    syncIntervenants();
    syncStudents();
  }
}
