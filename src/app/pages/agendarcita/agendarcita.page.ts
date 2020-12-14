import { Component, OnInit, ViewChild } from '@angular/core';
import {CalendarComponent} from 'ionic2-calendar';
@Component({
  selector: 'app-agendarcita',
  templateUrl: './agendarcita.page.html',
  styleUrls: ['./agendarcita.page.scss'],
})
export class AgendarcitaPage implements OnInit { 

eventSource = [];

  viewTitle: string;
 
  calendar = {
    mode: 'month',

    currentDate: new Date()
  };
 
  
 
  @ViewChild(CalendarComponent) myCal: CalendarComponent;


  constructor() { }

  ngOnInit() {}

  //Cambiar mes / semana / día actual

  next() {
    this.myCal.slideNext();
  }
 
  back() {
    this.myCal.slidePrev();
  }
 
  // La fecha seleccionada reanuda y por lo tanto el título cambia

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

}
