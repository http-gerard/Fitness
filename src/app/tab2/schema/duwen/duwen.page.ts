import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";

const duwenSchema = [
  {
    name:'Bench press'
  },
  {
    name:'Incline bench press'
  },
  {
    name:'Tricep extension'
  },
  {
    name:'Lateral shoulder extension'
  },
];
@Component({
  selector: 'app-duwen',
  templateUrl: './duwen.page.html',
  styleUrls: ['./duwen.page.scss'],
})
export class DuwenPage implements OnInit {
  duwenSchema: Observable<any>;

  constructor(private store: AngularFirestore) { }

  ngOnInit() {
    this.duwenSchema = this.store.collection('pushworkout').valueChanges({idField: 'id'});
  }

  setDone(workout: any) {
    this.store.collection('pushworkout').doc(workout.id).update({...workout, isGedaan: !workout.isGedaan});
  }

}
