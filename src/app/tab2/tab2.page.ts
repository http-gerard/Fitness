import {Component, OnInit} from '@angular/core';
import { ToastController } from '@ionic/angular';
import {AngularFirestore} from "@angular/fire/compat/firestore";

const schemas = [
  {
    name: 'Leg day',
    beschrijving: 'Bij dit schema gaan we onze benen trainen. Hierbij denken we aan de bovenbeenspier, kuiten en de quadriceps.',
    adres: 'benen'
  },
  {
    name: 'Pull day',
    beschrijving: 'Bij dit schema gaan we onze trekspieren trainen. Hierbij denken we aan de bicep, rug en de buikspieren.',
    adres: 'trekken'
  },
  {
    name: 'Push day',
    beschrijving: 'Bij dit schema gaan we onze duwspieren trainen. Hierbij denken we aan de borstspieren, tricep en de schouders.',
    adres: 'duwen'
  },
  {
    name: 'Cardio day',
    beschrijving: 'Bij dit schema gaan we onze longen trainen.',
    adres: 'cardio'
  },
];

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
schemas = schemas;

  constructor(public toastCtrl: ToastController,
              private store: AngularFirestore) { }

  public ngOnInit() {
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Knal deze training!',
      duration: 3000,
      position: 'top'
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
}
