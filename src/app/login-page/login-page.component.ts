import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FireAuthService } from 'src/services/firestore/fire-auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private fireAuth: FireAuthService) {

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    })
  }

  async checkEmail() {
    this.fireAuth.checkEmailExists(this.loginForm.value.email).then((exists) => {
      if (exists) {
        this.navigateTo('password');
      } else {
        this.navigateTo('register');
      }
    })


  }



  navigateTo(route: string): void {
    this.router.navigate([route], { state: { email: this.loginForm.value.email } });
  }

}
