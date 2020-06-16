import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {LoginValidator} from './login.validator'

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  form=new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      LoginValidator.cannotContainsSpace
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ])
  });

  get username(){
  return this.form.get('username');
  }
  get password(){
  return this.form.get('password');
  }


}
