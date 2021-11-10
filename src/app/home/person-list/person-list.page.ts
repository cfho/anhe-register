import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { AfService } from 'src/app/af.service';
import { Regist } from 'src/app/regist';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.page.html',
  styleUrls: ['./person-list.page.scss'],
})
export class PersonListPage implements OnInit {
  listWithStay$: Observable<Regist[]>;
  listNoStay$: Observable<Regist[]>;

  constructor(private afService: AfService) {}

  ngOnInit() {
    this.listWithStay$ = this.afService.getPersonData().pipe(
      map((item) => {
        return item.filter((ele) => ele.stay === true);
      })
    );
    this.listNoStay$ = this.afService.getPersonData().pipe(
      map((item) => {
        return item.filter((ele) => ele.stay !== true);
      })
    );
  }
}
