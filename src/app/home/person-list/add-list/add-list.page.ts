import { Component, OnInit } from '@angular/core';
import {
  CalendarComponentOptions,
  CalendarModal,
  CalendarModalOptions,
  CalendarResult,
  DayConfig,
} from 'ion2-calendar';
import { ModalController } from '@ionic/angular';
import { AfService } from 'src/app/af.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.page.html',
  styleUrls: ['./add-list.page.scss'],
})
export class AddListPage implements OnInit {
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  dateRange: { from: string; to: string };
  dateMulti: string[];

  // for multi selection in component
  // optionsMulti: CalendarComponentOptions = {
  //   pickMode: 'multi',
  // };

  // for range selection in component
  // optionsRange: CalendarComponentOptions = {
  //   monthFormat: 'YYYY 年 MM 月 ',
  //   weekdays: ['天', '一', '二', '三', '四', '五', '六'],
  //   weekStart: 1,
  //   // defaultDate: {new Date()}
  // };

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
    // let _daysConfig: DayConfig[] = [];
    // for (let i = 0; i < 31; i++) {
    //   _daysConfig.push({
    //     date: new Date(2017, 0, i + 1),
    //     subTitle: `$${i + 1}`,
    //   });
    // }
    const options: CalendarModalOptions = {
      // pickMode: 'range',
      // from: new Date(2017, 0, 1),
      // to: new Date(2017, 11.1),
      // daysConfig: _daysConfig
      pickMode: 'multi',
      title: 'Multiple Dates',
      monthFormat: 'YYYY 年 MM 月 ',
      weekdays: ['日', '一', '二', '三', '四', '五', '六'],
      weekStart: 1,
      color: 'primary',
    };

    let calendarUi = await this.modalController.create({
      component: CalendarModal,
      componentProps: { options },
    });

    calendarUi.present();

    const event: any = await calendarUi.onDidDismiss();
    const date: CalendarResult = event.data;
    console.log(date);
    console.log(event);
  }
}
