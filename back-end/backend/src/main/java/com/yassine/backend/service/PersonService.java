package com.yassine.backend.service;

import com.yassine.backend.model.Person;

public interface PersonService {
	Person getPerson(String email, String password);
	Person addPerson(Person person);
}
