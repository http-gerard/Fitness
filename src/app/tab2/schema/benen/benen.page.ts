import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

const benenSchema = [
  {
    name:'Deadlift'
  },
  {
    name:'Legpress'
  },
  {
    name:'Leg extension'
  },
  {
    name:'3000m fietsen'
  },
];

@Component({
  selector: 'app-benen',
  templateUrl: './benen.page.html',
  styleUrls: ['./benen.page.scss'],
})
export class BenenPage implements OnInit {
  benenSchema: Observable<any>;

  constructor(private store: AngularFirestore) { }

  ngOnInit() {
    this.benenSchema = this.store.collection('workouts').valueChanges({idField: 'id'});
  }

  setDone(workout: any) {
    this.store.collection('workouts').doc(workout.id).update({...workout, isGedaan: !workout.isGedaan});
  }
}
