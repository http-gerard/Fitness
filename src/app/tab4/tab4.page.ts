import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {IonicAuthService} from "../ionic-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {
public test = false;
  userDetail: string;
  constructor(
    public angularFireAuth: AngularFireAuth,
    private ionicAuthService: IonicAuthService,
    private router: Router) {}

  ngOnInit() {
    this.ionicAuthService.userDetails().subscribe(response => {
      if (response !== null) {
        this.userDetail = response.email;
      } else {
        this.router.navigateByUrl('');
      }
    }, error => {
      console.log(error);
    })
  }


  signOut() {
    this.ionicAuthService.signoutUser()
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
