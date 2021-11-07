import { Component } from '@angular/core';
import {
  CalendarComponentOptions,
  CalendarModal,
  CalendarModalOptions,
} from 'ion2-calendar';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  dateRange: { from: string; to: string };
  dateMulti: string[];

  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi',
  };

  optionsRange: CalendarComponentOptions = {
    monthFormat: 'YYYY 年 MM 月 ',
    weekdays: ['天', '一', '二', '三', '四', '五', '六'],
    weekStart: 1,
    // defaultDate: {new Date()}
  };

  async calendarModal() {
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: 'Range Date',
    };

    let calendarUi = await this.modalController.create({
      component: CalendarModal,
      componentProps: { options },
    });

    calendarUi.present();
  }

  constructor(public modalController: ModalController) {}

  onChange($event) {
    console.log($event);
  }
}
