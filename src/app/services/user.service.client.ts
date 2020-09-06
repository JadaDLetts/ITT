import { Injectable } from '@angular/core';
@Injectable()
function findUserByCredentials(username: String, password: String) {
  for (let i = 0; i < this.users.length; i++) {
    const user = this.users[i];
    if (username === user.username &&
      password === user.password) {
      return user;
    }
  }
}

export class UserService { }
