package com.springPractice.rest.webservices.restfulwebservices.helloWorld;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin(origins="http://localhost:4200")
@RestController()
public class HelloWorldController {
	
 @RequestMapping(method = RequestMethod.GET, path="/")	
 public String mainPage() {
  return "welcome";
 }
 
 @GetMapping(path="/hello-world") 
 public String helloWorld() {
	 return "helloWorld";
 }
 
 @GetMapping(path="/hello-world-bean") 
 public HelloWorldBean helloWorldBean() {
	 //throw new RuntimeException("An error has occured. Please contact support.");
	 return new HelloWorldBean("Hello World");
 }
 
 @GetMapping(path="/hello-world-bean/path-variable/{name}") 
 public HelloWorldBean helloWorldBean(@PathVariable String name) {
	 return new HelloWorldBean(String.format("Hello World, %s", name));
 }
}
