import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/allServices';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatPaginator, MatSort} from '@angular/material';
import { SignUpInfo } from '../../models/user/signup-info';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, fromEvent, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  user: SignUpInfo;

  constructor(
              public httpClient: HttpClient,
              public dialog: MatDialog,
              public userService: UserService
  ) {
   // this.
  }

  ngOnInit() {
}








}
