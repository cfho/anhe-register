import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.page.html',
  styleUrls: ['./person-list.page.scss'],
})
export class PersonListPage implements OnInit {
  onChange($event) {
    console.log($event);
  }
  constructor() { }

  ngOnInit() {
  }

  

}
