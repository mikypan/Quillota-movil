import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeorientamosPageRoutingModule } from './teorientamos-routing.module';

import { TeorientamosPage } from './teorientamos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeorientamosPageRoutingModule
  ],
  declarations: [TeorientamosPage]
})
export class TeorientamosPageModule {}
