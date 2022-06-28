import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ListModulesRoutingModule } from './list_modules-routing.module';
import { ListModulesComponent } from '../list_modules/container/list_modules/list_modules.component';

@NgModule({
  declarations: [ListModulesComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    ListModulesRoutingModule,
  ],
})
export class ListModules {}
