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
  model =  new SignUpInfo();


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: AuthService
  ) { }

  ngOnInit() {
    this.getSingleUser();
  }

 
  id = this.route.snapshot.params['id'];
  
  getSingleUser(){
    this.dataService.getUserDetails(this.id)
    .subscribe( user =>{
      this.model = user[0];
    }, 
    err => console.log(err));
  }

}
