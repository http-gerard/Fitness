import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import {BenenPage} from "./schema/benen/benen.page";
import {DuwenPage} from "./schema/duwen/duwen.page";
import {TrekkenPage} from "./schema/trekken/trekken.page";
import {CardioPage} from "./schema/cardio/cardio.page";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    AngularFireModule,
    AngularFirestoreModule,
  ],
  declarations: [Tab2Page, BenenPage, DuwenPage, TrekkenPage, CardioPage]
})
export class Tab2PageModule {}
