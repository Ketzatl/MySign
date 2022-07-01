import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpReqInterceptor } from './core/interceptors/http-req.interceptor';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { InitProcessingService } from './core/services/init-processing.service';

export function initData(initProcessingService: InitProcessingService) {
  return () => initProcessingService.setData();
}

@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule,
    MenubarModule,
  ],
  providers: [
    MessageService,
    {
      provide: APP_INITIALIZER,
      useFactory: initData,
      deps: [InitProcessingService],
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: HttpReqInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
