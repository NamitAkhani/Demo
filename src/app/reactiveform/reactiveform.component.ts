import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validator, Validators} from '@angular/forms'
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  loginform = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  constructor() { }

  ngOnInit(): void {
  }
  userlogin()
  {
    console.warn(this.loginform.value);
  }
  get name()
  {
    return this.loginform.get('name')
  }
  get password()
  {
    return this.loginform.get('password')
  }

}
