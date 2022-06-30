import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { OrderListModule } from 'primeng/orderlist';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ListModulesRoutingModule } from './list_modules-routing.module';
import { ListModulesComponent } from '../list_modules/container/list_modules/list_modules.component';
import { DetailsModuleComponent } from './container/details_module/details_module.component';
import { AngularSignaturePadModule } from '@almothafar/angular-signature-pad';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { PFullCalendarComponent } from './components/p-full-calendar/p-full-calendar.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [ListModulesComponent, DetailsModuleComponent, PFullCalendarComponent],
  imports: [
    ButtonModule,
    CardModule,
    CommonModule,
    ListModulesRoutingModule,
    OrderListModule,
    ReactiveFormsModule,
    AngularSignaturePadModule,
    FullCalendarModule,
  ],
})
export class ListModules {}
