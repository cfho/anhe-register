import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private afService: AfService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.listWithStay$ = this.afService.getPersonData().pipe(
      map((item) => {
        return item.filter((ele) => ele.stay === "true");
      })
    );
    this.listNoStay$ = this.afService.getPersonData().pipe(
      map((item) => {
        return item.filter((ele) => ele.stay !== "true");
      })
    );
  }

  onClick(data: {}) {
    console.log(data);
    if (data['act'] === 'edit') {
      this.router.navigate(['edit/', data['id']], { relativeTo: this.route });
    } else {
      const path = 'register/users/person1/' + data['id'];
      this.afService.deleteList(path);
    }
  }
}
