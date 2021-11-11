import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-dumb-list',
  templateUrl: './dumb-list.component.html',
  styleUrls: ['./dumb-list.component.scss'],
})
export class DumbListComponent implements OnInit {
  @Input() lists;
  @Output() listEvent = new EventEmitter<{}>();

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  onEdit(action: string, listId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.listEvent.emit({ act: action, id: listId });
    // this.router.navigate(['edit/', listId], {relativeTo: this.route});
  }
}
