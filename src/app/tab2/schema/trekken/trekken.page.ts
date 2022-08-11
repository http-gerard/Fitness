import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";

const trekkenSchema = [
  {
    name:'Concentration curl'
  },
  {
    name:'Deadlift'
  },
  {
    name:'Pull up'
  },
  {
    name:'Military curl'
  },
];

@Component({
  selector: 'app-trekken',
  templateUrl: './trekken.page.html',
  styleUrls: ['./trekken.page.scss'],
})
export class TrekkenPage implements OnInit {
  pullSchema: Observable<any>;

  constructor(private store: AngularFirestore) { }

  ngOnInit() {
    this.pullSchema = this.store.collection('pullworkout').valueChanges({idField: 'id'});
  }

  setDone(workout: any) {
    this.store.collection('pullworkout').doc(workout.id).update({...workout, isGedaan: !workout.isGedaan});
  }
}
