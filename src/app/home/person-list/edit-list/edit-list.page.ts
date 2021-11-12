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
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Regist } from 'src/app/regist';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.page.html',
  styleUrls: ['./edit-list.page.scss'],
})
export class EditListPage implements OnInit {
  pickUp$;
  dropDown$: Observable<string[]>;
  selectedDate;
  id: string;
  list: Regist;

  form = this.fb.group({
    stay: ['false', Validators.required],
    dates: ['', Validators.required],
    pickUpLocation: [''],
    dropDownLocation: [''],
    transportation: [''],
    carNumber: [''],
  });

  constructor(
    // public modalController: ModalController,
    private afService: AfService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.pipe(
      map((params) => params['listId']),
      // tap(console.log),
      switchMap(listId => this.afService.getList(listId)),
      tap(console.log)
      ).subscribe(list => {
        this.list = list;
        this.form.patchValue(list);
      })
    this.dropDown$ = this.afService.dropDown$;
    this.pickUp$ = this.afService.pickUp$;
  }

  onSubmit() {
    if (this.form.value.transportation === '自行上山') {
      this.form.patchValue({ dropDownLocation: '', pickUpLocation: '' });
    } else {
      this.form.patchValue({ carNumber: '' });
    }
    const path = 'register/users/person1/' + Date.now();
    // console.log(this.form.value);
    // console.log(path);
    this.afService.add(path, this.form.value);
    this.router.navigate(['../'], { relativeTo: this.route });
    // console.log("reactive form submitted");
  }
}
