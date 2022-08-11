import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private router: Router) { }
  async openBrowser()
  {
    await Browser.open({url: 'https://www.youtube.com/watch?v=vQopDslemEc'});
  }
  slideOpt ={
    direction: 'horizontal',
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    }
  };



gaSchema() {
  this.router.navigateByUrl('src/app/tab2/tab2.page.html');
};
}
