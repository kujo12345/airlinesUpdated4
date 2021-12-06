import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { UsersService } from 'shared/users.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  [x: string]: any;

  constructor(private fb: FormBuilder, private admin_service: UsersService, private router: Router) {}

  admin$ = [];
  loggedUser: any;

  loginInformation = {
    username: "admin",
    password: "qwe123"
  };

  loginForm = this.fb.group({
    username: ['', Validators.minLength(4), Validators.required],
    password: ['', Validators.minLength(4), Validators.required]
  });

  ngOnInit(): void {
    this.admin_service.getAdmin().subscribe((loginInformation) => {
      this.admin$ = loginInformation;
    });
    this.loggedUser = JSON.parse(localStorage.getItem('loginInformation'));
    console.log(this.loggedUser['username']);
    console.log(this.loggedUser['password']);
  }

  setData(admin$): void{
    const adminData = JSON.stringify('admin')
    localStorage.setItem('admin', adminData)
  }

  getData(){
    return localStorage.getItem('admin')
  }

  removeData(username){
    localStorage.removeItem(username)
  }
   
  onSubmit(){
    console.log(this.loginForm.value); //submitting the Username and Password Value
  }

  toAdmin(){
    this.router.navigate('admin'); //this goes to the Admin homepage 
  }
  
  get username() { 
    return this.loginForm.get('username'); 
  }

  get password() { 
    return this.loginForm.get('password'); 
  }

}
