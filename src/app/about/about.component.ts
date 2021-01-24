import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/user.service.client';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
