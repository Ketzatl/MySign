import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListModulesComponent } from './container/list_modules.component';

const routes: Routes = [{ path: '', component: ListModulesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListModulesRoutingModule {}
