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
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.page.html',
  styleUrls: ['./add-list.page.scss'],
})
export class AddListPage implements OnInit {
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'

  pickUp$;
  dropDown$: Observable<string[]>;
  selectedDate;

  form = this.fb.group({
    dates: [''],
    pickUpLocation: ['', Validators.required],
    dropDownLocation: ['', Validators.required],
    transportation: [''],
    carNumber: [''],
  });

  constructor(
    public modalController: ModalController,
    private afService: AfService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.dropDown$ = this.afService.dropDown$;
    this.pickUp$ = this.afService.pickUp$;
    // this.pickUp$.subscribe(data => console.log(data))
  }

  async calendarModal() {
    const options: CalendarModalOptions = {
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
    this.selectedDate = date;
    console.log(date);
    console.log(event);
  }

  onSubmit() {
    this.form.patchValue({dates: this.selectedDate})
    if(this.form.value.transportation === '自行上山') {
      this.form.patchValue({dropDownLocation: '', pickUpLocation: ''})
    } else {
      this.form.patchValue({carNumber: ''})
    }
    console.log("reactive form submitted");
    console.log(this.form.value);
}
}
