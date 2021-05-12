
import { Injectable } from '@angular/core';
@Injectable()
export class UserService {
  users = [
    {_id: '123', first_name: 'alice', last_name: 'a', username: 'alice', password: 'alice', email: 'a@g.com'},
    {_id: '234', first_name: 'bob', last_name: 'b', username: 'bob', password: 'bob', email: 'b@g.com'}
  ];

  findUserByCredentials(username: String, password: String) {
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];
      if (username === user.username &&
        password === user.password) {
        return user;
      }
    }
    return null;
  }
  finUserById(userId) {
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];``
      if (userId === user._id) {
        return user;
      }
    }
  }

  findUserName(username: String) {
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];
      if (username === user.username) {
        return user;
      }
    }
  }

  createUser(first_name: String, last_name: String, email: String, username: String, password: String) {
    for (let i = 0; i <= this.users.length; i++) {
      if(i === this.users.length) {
          const user = this.users[i];
          first_name = user.first_name;
          last_name= user.last_name ;
          username = user.username;
          password = user.password;
          email = user.email;
          user._id =String(Math.floor((Math.random() * 100) + 1));
        console.log(user.first_name)
          return user;

        }
      }
    }

  findUserEmail(email: String) {
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];
      if (email === user.email) {
        return user;
      }
    }
  }
}
