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
  userModel: SignUpInfo = {
    id: 0,
   name: '',
   username: '',
   email: '',
   password: '',
   roles: []
  }


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: AuthService
  ) { }

  ngOnInit() {
    
    const userId = JSON.parse(localStorage.getItem('editUserId'));
    console.log(userId);
    if(!userId){
      alert('Invalid action.');
      this.router.navigate(['wdr-users']);
      return;
    }
    // this.getSingleUser();
  }

 
  // id = this.route.snapshot.params['id'];
  
  // getSingleUser(){
  //   this.dataService.getUserDetails(+userId)
  //   .subscribe( user =>{
  //     this.userModel = user[0];
  //   })
  
  // }

}
