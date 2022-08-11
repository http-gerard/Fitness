import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import {BenenPage} from "./schema/benen/benen.page";
import {DuwenPage} from "./schema/duwen/duwen.page";
import {TrekkenPage} from "./schema/trekken/trekken.page";
import {CardioPage} from "./schema/cardio/cardio.page";

const routes: Routes = [
  {
    path: '',
    component: Tab2Page
  },
  {
    path: 'benen',
    component: BenenPage
  },
  {
    path: 'duwen',
    component: DuwenPage
  },
  {
    path: 'trekken',
    component: TrekkenPage
  },
  {
    path: 'cardio',
    component: CardioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
