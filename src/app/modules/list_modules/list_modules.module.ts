import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { OrderListModule } from 'primeng/orderlist';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ListModulesRoutingModule } from './list_modules-routing.module';
import { ListModulesComponent } from '../list_modules/container/list_modules/list_modules.component';
import { DetailsModuleComponent } from './container/details_module/details_module.component';

@NgModule({
  declarations: [ListModulesComponent, DetailsModuleComponent],
  imports: [
    CommonModule,
    CardModule,
    OrderListModule,
    ButtonModule,
    ReactiveFormsModule,
    ListModulesRoutingModule,
  ],
})
export class ListModules {}
