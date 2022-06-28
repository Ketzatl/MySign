import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListModulesComponent } from './modules/list_modules/container/list_modules.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'modules',
    loadChildren: () =>
      import('./modules/list_modules/list_modules.module').then(
        (m) => m.ListModules
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
