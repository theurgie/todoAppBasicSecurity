package com.springPractice.rest.webservices.restfulwebservices.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController()
public class BasicAuthentificationController {
	
 @GetMapping(path="/basicauth") 
 public AuthenticationBean helloWorldBean() {
	 //throw new RuntimeException("An error has occured. Please contact support.");
	 return new AuthenticationBean("You are Authenticated");
 }

}
