import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from '../../models/user/login-info';
import { SignUpInfo } from './../../models/user/signup-info';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _loginUrl = 'http://localhost:3000/users/authenticate';
  private loginUrl = 'http://localhost:8081/api/auth/signin';
  private signupUrl = 'http://localhost:8081/api/auth/signup';
  private userUrl = 'http://localhost:8081/api/user';

  checkResponse: any;

  constructor(
    private _http: Http,
    private http: HttpClient) { }

// login
  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  // add user account
  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

  loginUser(user){
    return this._http.post(this._loginUrl, user);
  }

  getUserDetails(id){
    // post to httpclient and display user details
    return this._http.post("http://localhost/api/",{'id':id})
      .map(res=>res.json());
  }

  deleteUser(id){
    // return this._http.post(this.userUrl+'/delete', {'idi':id})
    // .map()=>this.getAllUsers());

  }

  getAllUsers(){
    //post to httpclient and display user details
    return this._http.get("http://localhost:8081/api/users")
    .map(res=>{
      this.checkResponse =  res;
      if(this.checkResponse.body !== '0'){
        return res.json();
      }
    })

  }
}
