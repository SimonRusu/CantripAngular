import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form, ValidatorFn, AbstractControl, ValidationErrors, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup;
  public email: String;

  constructor(private router: Router) {
    //const data = this.router.getCurrentNavigation()?.extras.state as {email:String};
    //this.email = data.email;
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required,
        Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')])
    }, {validators:this.checkPasswords})
    
  }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value

    console.log(group.get('password')?.hasError('pattern'));

    return pass === confirmPass ? null : { notSame: true }
  }

  registerUser(): void{
    console.log(this.email);
    console.log(this.registerForm.value);
  }
  
}

