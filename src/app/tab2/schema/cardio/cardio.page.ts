import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";

const cardioSchema = [
  {
    name:'500m lopen'
  },
  {
    name:'3000m fietsen'
  },
  {
    name:'2000m roeien'
  },
  {
    name:'10min crosstrainer'
  },
];
@Component({
  selector: 'app-cardio',
  templateUrl: './cardio.page.html',
  styleUrls: ['./cardio.page.scss'],
})
export class CardioPage implements OnInit {
  cardioSchema: Observable<any>;

  constructor(private store: AngularFirestore) { }

  ngOnInit() {
    this.cardioSchema = this.store.collection('cardioworkout').valueChanges({idField: 'id'});
  }

  setDone(workout: any) {
    this.store.collection('cardioworkout').doc(workout.id).update({...workout, isGedaan: !workout.isGedaan});
  }
}
