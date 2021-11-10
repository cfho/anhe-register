import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AfService {

  dropOffLocation = ['大武崙三層站', '兆豐銀行', '忠孝新生', '東三門', '三芝外環加油站', '淡水北新路', '紅樹林', '農禪寺65巷口']

  pickUpLocation = ['東三門', '大武崙三層站', '奇岩捷運站', '農禪寺65巷口', '紅樹林', '淡水北新路', '三芝外環加油站']

  constructor() { }
}
