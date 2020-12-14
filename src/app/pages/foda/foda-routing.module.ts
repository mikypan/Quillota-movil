import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FodaPage } from './foda.page';

const routes: Routes = [
  {
    path: '',
    component: FodaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FodaPageRoutingModule {}
