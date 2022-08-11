import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {provideFirebaseApp, initializeApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {getAuth, provideAuth} from '@angular/fire/auth';
// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {CommonModule} from '@angular/common';
import { NativePageTransitions, NativeTransitionOptions } from '@awesome-cordova-plugins/native-page-transitions/ngx';
import {HttpClientModule} from '@angular/common/http';

import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    CommonModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    HttpClientModule,

    // Firebase main import.
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    // Firebase authentication import.
    provideAuth(() => getAuth())
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, VideoPlayer],
  bootstrap: [AppComponent],
})
export class AppModule {}
