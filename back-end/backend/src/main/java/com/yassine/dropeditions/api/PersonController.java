package com.yassine.dropeditions.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yassine.dropeditions.service.PersonService;

@RestController
@RequestMapping("/api/person")
public class PersonController {
	
	@Autowired
	private PersonService personService;
	
	@GetMapping(path ="{email}")
	public boolean getPerson(@PathVariable("email") String email,@PathVariable("password") String password) {
		return personService.getPerson(email, password);
	}

}
