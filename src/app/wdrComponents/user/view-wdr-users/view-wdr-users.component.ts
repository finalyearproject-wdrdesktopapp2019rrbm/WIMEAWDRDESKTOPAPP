import {Component, Injectable, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Sort} from '@angular/material';
import { AuthService } from '../../services/auth/auth.service';
import { SignUpInfo } from '../../models/user/signup-info';
export interface Users {
   id: number;
   name: string;
   username: string;
   email: string;
   role: string;
   addedOn: string;
}

@Component({
  selector: 'app-view-wdr-users',
  templateUrl: './view-wdr-users.component.html',
  styleUrls: ['./view-wdr-users.component.scss']
})
export class ViewWdrUsersComponent implements OnInit {

// dataSource: Users[]= [
//   { id: 1, name: 'TestObserver', username: 'testObserver', role: 'Observer', email: 'teso1@test.com', addedOn: '31-05-2019'},
//   { id: 2, name: 'TestObserver2', username: 'testObserver1', role: 'Observer', email: 'tesoobserver2@test.com', addedOn: '31-05-2019'},
//   { id: 3, name: 'TestObserver3', username: 'testObserver1', role: 'Observer', email: 'testob3@test.com', addedOn: '31-05-2019'},
//   { id: 4, name: 'TestObserver4', username: 'testObserver1', role: 'Observer', email: 'tesobs4@test.com', addedOn: '31-05-2019'}
// ];
displayedColumns: string[] = ['id', 'name', 'username', 'role', 'email','addedOn'];


wdrUsers: any;
dataSource: Users[] = this.wdrUsers;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: AuthService
  ) {  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers()
    .subscribe( data => {
      console.log('users');
      console.log(data);
      this.wdrUsers = data;
      console.log(this.wdrUsers);

    },
    err=> console.log(err))
  }

  deleteUser(id){
    console.log(id);
    this.userService.deleteUser(id)
    .subscribe(() =>{
      this.getUsers();
    })
  }

  editUser(user: SignUpInfo ) : void {
    localStorage.removeItem('edituserId');
    let userID = user.id.toString();
    localStorage.setItem('editUserId', userID);
    this.router.navigate(['edit-user']);
  }
  view(user: SignUpInfo) : void {
    localStorage.removeItem('viewUserId');
    let userID = user.id.toString();
    localStorage.setItem('viewUserId', userID);
    this.router.navigate(['view-user']);

  }

}
