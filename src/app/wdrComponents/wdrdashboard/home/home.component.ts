import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/allServices';
import { Router } from '@angular/router';

// to be removed
import { DataService } from '../../services/allServices';
import { User } from '../../models/user/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
   user: User[] = [];
   info: any;
   returnUrl = '';

  constructor(
    private dataService: DataService,
    private token: TokenStorageService,
    private router : Router

    ) {}

  ngOnInit() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedinUser'));
    this.user = loggedInUser;

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.returnUrl = '/auth/login';
    // window.location.reload();
  }

  public logout() {
    this.token.signOut();
    // this.router.navigate([this.returnUrl]);

    window.location.reload();
  }
}
