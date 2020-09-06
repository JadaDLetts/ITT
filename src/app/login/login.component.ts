import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {UserService} from "../services/user.service.client";
import {isAsciiLetter} from "codelyzer/angular/styles/chars";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private userService: UserService, private router: Router) { }
  username: String;
  password: String;
  ngOnInit(): void {
  }
  login(username, password) {
    this.username = username;
    this.password = password;
    console.log(this.username)
    console.log(this.password)
    const user = this.userService.findUserByCredentials(
      this.username, this.password);
    console.log(user);
    if (user){
      this.router.navigate(['dashboard', user._id]);
    }
    else {
      alert("Incorrect username or password")
    }
  }
}
