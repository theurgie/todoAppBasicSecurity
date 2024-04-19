import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_URL } from '../app.constants';

export const TOKEN = 'token';
export const AUTHENTICATEDUSER = 'authenticaterUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }

  executeAuthenticationService(username, password) {
    let basicAuthheaderString = 'Basic '+ window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthheaderString
    })

    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`, {headers}).pipe(
      map(data => {
        // set session if call is a success and return data
        sessionStorage.setItem(AUTHENTICATEDUSER, username);
        sessionStorage.setItem(TOKEN, basicAuthheaderString);
        return data;
      })
    )
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATEDUSER);
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATEDUSER)
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATEDUSER)
    sessionStorage.removeItem(TOKEN)
  }

}

export class AuthenticationBean{
  constructor(public message:string) { }
}
