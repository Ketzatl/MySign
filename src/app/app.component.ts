import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthProcessingService } from './core/services/auth-processing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'MySign';
  isAuth: boolean = false;
  listSubscription: Subscription[] = [];

  constructor(private authProcessingService: AuthProcessingService) {}

  ngOnInit(): void {
    this.listSubscription.push(
      this.authProcessingService.isAuth().subscribe((value) => {
        this.isAuth = value;
      })
    );
  }

  ngOnDestroy(): void {
    this.listSubscription.forEach((s) => s.unsubscribe());
  }
}
