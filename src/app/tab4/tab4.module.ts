import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab3PageRoutingModule } from './tab4-routing.module';
import {LoginPageModule} from "../login/login.module";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab4Page }]),
    Tab3PageRoutingModule,
    LoginPageModule,

  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {
}

