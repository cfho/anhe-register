import { Component } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  
  dateMulti: string[];
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'
  };


  dateRange: { from: string; to: string; };
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };

  constructor() { }

  onChange($event) {
    console.log($event);
  }
}
