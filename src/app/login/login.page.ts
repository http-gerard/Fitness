import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicAuthService } from 'src/app/ionic-auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userForm: FormGroup;
  successMsg = '';
  errorMsg = '';


  error_msg = {
    email: [
      {
        type: 'required',
        message: 'Provide email.'
      },
      {
        type: 'pattern',
        message: 'Email is not valid.'
      }
    ],
    password: [
      {
        type: 'required',
        message: 'Password is required.'
      },
      {
        type: 'minlength',
        message: 'Password length should be 6 characters long.'
      }
    ]
  };

  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  signIn() {
    const email = this.userForm.get('email').value;
    const password = this.userForm.get('password').value;
    this.ionicAuthService.signinUser(email, password)
      .then((response) => {
        console.log(response);
        this.errorMsg = '';
        this.router.navigate(['/tabs/tab4']);
      }, error => {
        this.errorMsg = error.message;
        this.successMsg = '';
      });
  }

  goToSignup() {
    this.router.navigateByUrl('register');
  }
}
