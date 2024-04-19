import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';

export class HelloWorlBean {
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorlBean>(`${API_URL}/hello-world-bean`)
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {
    return this.http.get<HelloWorlBean>(`${API_URL}/hello-world-bean/path-variable/${name}`)
  }


}
