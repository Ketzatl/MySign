import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ListModulesRoutingModule } from './list_modules-routing.module';
import { ListModulesComponent } from './container/list_modules.component';

@NgModule({
  declarations: [ListModulesComponent],
  imports: [
    CommonModule,
    CardModule,
    ReactiveFormsModule,
    ListModulesRoutingModule,
  ],
})
export class ListModules {}
