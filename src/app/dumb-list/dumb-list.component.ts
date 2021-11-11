import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dumb-list',
  templateUrl: './dumb-list.component.html',
  styleUrls: ['./dumb-list.component.scss'],
})
export class DumbListComponent implements OnInit {
  @Input() lists;

  constructor() { }

  ngOnInit() {}

}
