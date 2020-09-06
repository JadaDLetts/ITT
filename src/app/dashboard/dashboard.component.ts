import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/user.service.client';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) { }

  userId: String;
  user = {}

  ngOnInit() {
    this.activatedRoute
      .params
      .subscribe(params =>
        this.user = this.userService.finUserById(params['userId']));
  }


}
