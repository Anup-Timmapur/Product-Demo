import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: "root"
})
export class UserdataService {

  url: string = "https://nodejsapidemo.herokuapp.com/users/";
  constructor(private _http: HttpClient, private _router:Router) {}

  getAllUsers() {
    return this._http.get(this.url).pipe(
      retry(3),catchError(this.handleError)
    );
  }

  private handleError(ex:HttpErrorResponse){
    if(ex.error instanceof ErrorEvent){
      console.log('client side error',ex.message);
    }
    else{
      console.log('server side error',ex.message);
    }
   return  throwError('something went wrong');
  }
  getUserByEmail(user_email) {
    return this._http.get(this.url+user_email).pipe(
      catchError(this.handleError)
    );
  }
  addUser(newuser) {
    // let head = new HttpHeaders().set("Content-Type", "application/json");
    let body = JSON.stringify(newuser);
    return this._http.post(this.url, body).pipe(
      catchError(this.handleError)
      );
  }
  editUser(newuser) {
    // let head = new HttpHeaders().set("Content-Type", "application/json");
    let body = JSON.stringify(newuser);
    return this._http.put(this.url+newuser.user_email,body);
  }
  deleteUser(user_email) {
    // let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.delete(this.url + user_email);
  }
  currentUser;
  redirectURL:string;
  login(user_email:string,user_password:string){
    if(user_email=="admin" && user_password=="1234"){
        this.currentUser={
          user_email:user_email,
          password:user_password,
          isAdmin:true
        };
        return;
    }
    this.currentUser={
      user_email:user_email,
      password:user_password,
      isAdmin:false
    };
  }
  logout(){
    this.currentUser=null;
    this.redirectURL='';
    this._router.navigate(['']);
  }
  get isLoggedIn():boolean{
    return !!this.currentUser;
  }
}
