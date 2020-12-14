import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeorientamosPage } from './teorientamos.page';

const routes: Routes = [
  {
    path: '',
    component: TeorientamosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeorientamosPageRoutingModule {}
