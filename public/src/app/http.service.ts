import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  gold: number[] = [0];
  activity: string[] = [];


  constructor() { }
  
  obtainGold(){
    return this.gold;
  }

  increaseGold(gold){
    this.gold[0] += gold;
  }
}