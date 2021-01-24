import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service.client";
import {Router} from "@angular/router";
import {last} from "rxjs/operators";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  _id: String;
  first_name: String;
  last_name: String;
  username: String;
  password: String;
  email: String;

  ngOnInit(): void {
  }

  register(first_name, last_name, email, username, password) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.username = username;
    this.password = password;
    this.email = email;

    const userName = this.userService.findUserName(
      this.username);
    const userEmail = this.userService.findUserEmail(
      this.email);

    if (!userName && !userEmail) {
      const user = this.userService.createUser(
        this.first_name, this.last_name, this.username, this.password, this.email);
      this.router.navigate(['dashboard', user._id ]);
      // this.router.navigate(['dashboard', String(Math.floor((Math.random() * 100) + 1))]);
    }
    else if (userName){
      alert("Username already in use")
    }
    else if(userEmail) {
      alert("Email already in use")
    }

  }
}
