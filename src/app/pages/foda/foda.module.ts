import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FodaPageRoutingModule } from './foda-routing.module';

import { FodaPage } from './foda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FodaPageRoutingModule
  ],
  declarations: [FodaPage]
})
export class FodaPageModule {}
