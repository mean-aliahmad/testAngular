import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  loop1: any;
  loop2: any;
  loop3: any;
  time: any = 30;
  i: number = 0;
  digit: any = {
    one: 1,
    two: 2,
    three: 3
  };

  constructor() { 
    localStorage.clear();
    this.loop3 = setInterval(() => {
      if (this.i > 5) {
        clearInterval(this.loop3);
        this.digit.one = 4;
      } else {
        this.digit.one = this.randomNum();
        this.i++;
      }
    }, this.time);
  this.loop2 = setInterval(() => {
    if (this.i > 80) {
      clearInterval(this.loop2);
      this.digit.two = 0;
    } else {
      this.digit.two = this.randomNum();
      this.i++;
    }
  }, this.time);
  this.loop1 = setInterval(() => {
    if (this.i > 100) {
      clearInterval(this.loop1);
      this.digit.three = 4;
    } else {
      this.digit.three = this.randomNum();
      this.i++;
    }
  }, this.time);
  }
  randomNum() {
    "use strict";
    return Math.floor(Math.random() * 9) + 1;
  }

  ngOnInit() {
  }


}
