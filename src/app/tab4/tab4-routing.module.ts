import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab4Page } from './tab4.page';
import {LoginPage} from "../login/login.page";

const routes: Routes = [
  {
    path: '',
    component: Tab4Page,
    children: [
      {
        path: 'login',
        component: LoginPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
