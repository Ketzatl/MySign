import { Injectable } from '@angular/core';
import { Observable, Observer, fromEvent, merge, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConnectionProcessingService {
  constructor() {}

  status(): Observable<boolean> {
    return merge<boolean[]>(
      // of(navigator.onLine),
      fromEvent(window, 'offline').pipe(map(() => false)),
      fromEvent(window, 'online').pipe(map(() => true)),
      new Observable<boolean>((sub: Observer<boolean>) => {
        sub.next(navigator.onLine);
        sub.complete();
      })
    );
  }
}
