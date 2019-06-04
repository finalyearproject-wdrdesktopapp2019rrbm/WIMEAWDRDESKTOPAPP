import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SignUpInfo } from '../../models/user/signup-info';
import { AuthService } from '../../services/allServices';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  user: any = {}; //any =[]


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: AuthService
  ) { }

  ngOnInit() {
    const userId = JSON.parse(localStorage.getItem('editUserId'));
    console.log(userId);
    if(!userId) {
      alert('Invalid action.');
      this.router.navigate(['wdr-users']);
      return;
    } else {
      this.getSingleUser(userId);
    }
  }

  getSingleUser(userId){
    this.dataService.getUserDetails(+userId)
    .subscribe( user => {
      console.log(user)
      this.user = user;
    }, err => console.log(err)); 
  }

  updateUser(){
    console.log('update user function');
  }



}
