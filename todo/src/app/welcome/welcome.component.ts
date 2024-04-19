import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message'
  name = 'user'
  welcomeMessageFromServices = ''

  constructor(private route:ActivatedRoute, private service:WelcomeDataService) { 

  }

  ngOnInit(){
    console.log(this.message)
    this.name = this.route.snapshot.params['name'];
    
  }

  getWelcomeMessage(){
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error),
    )
  }

  getWelcomeMessageWithParameter(){ 
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error),
    )
  }

  handleSuccessfulResponse(response) {
    console.log(response.message)
    this.welcomeMessageFromServices = response.message;
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromServices = error.error.message
  }
}
