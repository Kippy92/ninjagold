import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./bootstrap.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService){
    this.gold = this._httpService.obtainGold();
    console.log(this.gold);
  }
  title = 'Ninja Gold';
  gold: any[];
  history: any[] = this._httpService.activity;

  random(min, max){
  	return (Math.floor(Math.random() * (min-max)) + max)
  }

  farm(){
    var newGold = this.random(2, 6);
    this._httpService.increaseGold(newGold);
    var result = `You got ${newGold} at the farm!`;
    this._httpService.activity.push(result);

  }

  cave(){
    var newGold = this.random(5, 11);
    this._httpService.increaseGold(newGold);
    var result = `You got ${newGold} at the cave!`;
    this._httpService.activity.push(result);
  }

  house(){
    var newGold = this.random(7, 16);
    this._httpService.increaseGold(newGold);
    var result = `You got ${newGold} at the house!`;
    this._httpService.activity.push(result);
  }


  casino(){
    var newGold = this.random(-100, 101);
    this._httpService.increaseGold(newGold);
    if (newGold < 0){
      var result = `You lost ${newGold} at the casino!`;
    }
    else {
      var result = `You got ${newGold} at the casino!`;
    }
    this._httpService.activity.push(result);
  }

  reset(){
    this._httpService.gold[0] = 0;
  }

  ngOnInit(){
  };
}
