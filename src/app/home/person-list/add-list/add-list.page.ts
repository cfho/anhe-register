import { Component, OnInit } from '@angular/core';
import {
  CalendarComponentOptions,
  CalendarModal,
  CalendarModalOptions,
} from 'ion2-calendar';
import { ModalController } from '@ionic/angular';
import { AfService } from 'src/app/af.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.page.html',
  styleUrls: ['./add-list.page.scss'],
})
export class AddListPage implements OnInit{
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

  pickUp;
  dropDown;

  constructor(
    public modalController: ModalController,
    private afService: AfService
  ) {}

  ngOnInit(): void {
    this.pickUp = this.afService.pickUpLocation;
    this.dropDown = this.afService.dropOffLocation;
  }

  async calendarModal() {
    const options: CalendarModalOptions = {
      // pickMode: 'range',
      pickMode: 'multi',
      title: 'Multiple Dates',
      monthFormat: 'YYYY 年 MM 月 ',
      weekdays: ['日', '一', '二', '三', '四', '五', '六'],
      weekStart: 1,
      color: 'danger',
      // defaultDate: {new Date()}
    };

    let calendarUi = await this.modalController.create({
      component: CalendarModal,
      componentProps: { options },
    });

    calendarUi.present();
  }
}
