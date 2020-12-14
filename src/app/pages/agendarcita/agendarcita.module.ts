import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarcitaPageRoutingModule } from './agendarcita-routing.module';
import { NgCalendarModule } from 'ionic2-calendar';

import { AgendarcitaPage } from './agendarcita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarcitaPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [AgendarcitaPage]
})
export class AgendarcitaPageModule {}
