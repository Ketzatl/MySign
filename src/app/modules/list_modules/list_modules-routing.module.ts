import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListModulesComponent } from '../list_modules/container/list_modules/list_modules.component';
import { DetailsModuleComponent } from './container/details_module/details_module.component';

const routes: Routes = [
  { path: '', component: ListModulesComponent },
  { path: 'details', component: DetailsModuleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListModulesRoutingModule {}
