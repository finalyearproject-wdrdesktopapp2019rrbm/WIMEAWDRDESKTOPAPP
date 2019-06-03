import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { UserService} from '../../../services/allServices';
import {FormControl, Validators} from '@angular/forms';
import {SignUpInfo } from '../../../models/user/signup-info';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent implements OnInit {

  constructor(
             public dialogRef: MatDialogRef<AddUserDialogComponent>,
             @Inject(MAT_DIALOG_DATA) public data: SignUpInfo,
             public userService: UserService
  ) { }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  ngOnInit() {
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
  // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.userService.addUser(this.data);
  }

}
