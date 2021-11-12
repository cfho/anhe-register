import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, shareReplay, take } from 'rxjs/operators';
// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Regist } from './regist';

@Injectable({
  providedIn: 'root',
})
export class AfService implements OnInit {
  // dropOffLocation = [
  //   '大武崙三層站',
  //   '兆豐銀行',
  //   '忠孝新生',
  //   '東三門',
  //   '三芝外環加油站',
  //   '淡水北新路',
  //   '紅樹林',
  //   '農禪寺65巷口',
  // ];

  // pickUpLocation = [
  //   '東三門',
  //   '大武崙三層站',
  //   '奇岩捷運站',
  //   '農禪寺65巷口',
  //   '紅樹林',
  //   '淡水北新路',
  //   '三芝外環加油站',
  // ];
  // private itemsCollection: AngularFirestoreCollection<string>;
  dropDown$: Observable<string[]>;
  pickUp$: Observable<string[]>;
  private itemDoc: AngularFirestoreDocument<string>;

  constructor(private afs: AngularFirestore) {
    this.dropDown$ = this.afs
      .doc<string[]>('register/dropDownLocation')
      .valueChanges()
      .pipe(
        shareReplay(),
        map((obj) => Object.values(obj))
      );
    this.pickUp$ = this.afs
      .doc<string[]>('register/pickUpLocation')
      .valueChanges()
      .pipe(
        tap(console.log),
        shareReplay(),
        map((obj) => Object.values(obj))
      );
  }

  ngOnInit() {}

  add(path: string, data: Object[]) {
    this.afs.doc(path).set(data);
    console.log('add a new list!');
    
  }

  getPersonData() {
    return this.afs
      .collection<Regist>('register/users/person1')
      .valueChanges({ idField: 'id' })
      .pipe(shareReplay());
  }

  deleteList(path) {
    this.afs.doc(path).delete();
  }

  getList(listId: string) {
    const path = 'register/users/person1/' + listId;
    return this.afs
    .doc<Regist>(path)
    .valueChanges({ idField: 'id' })
    .pipe(shareReplay());
  }

}
