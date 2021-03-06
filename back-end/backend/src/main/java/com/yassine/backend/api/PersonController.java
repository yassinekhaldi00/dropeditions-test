package com.yassine.backend.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yassine.backend.model.Person;
import com.yassine.backend.service.PersonService;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/api/person")
public class PersonController {
	
	@Autowired
	private PersonService personService;
	
	@GetMapping(path = "{email}/{password}")
	public Person getPerson(@PathVariable("email") String email, @PathVariable("password") String password) {
		return personService.getPerson(email, password);
	}
	
	@PostMapping
	public Person addPerson(@RequestBody Person person) {
		return personService.addPerson(person);
	}

}
