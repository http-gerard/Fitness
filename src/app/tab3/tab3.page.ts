import {Component, OnInit} from '@angular/core';
import {EtenService} from '../eten.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  interval;
  time = new Date(null);
  startTimer() {
    this.interval = setInterval(() => {
      this.time.setSeconds(this.time.getSeconds() + 1);
    }, 1000);
  }
    pauseTimer(){
      clearInterval(this.interval);
    }

    resetTimer(){this.time.setSeconds(0);}


  constructor() {
  }
  ngOnInit() {
  }
}
