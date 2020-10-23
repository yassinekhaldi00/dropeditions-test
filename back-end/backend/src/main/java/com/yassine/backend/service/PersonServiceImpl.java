package com.yassine.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yassine.backend.dao.PersonDao;
import com.yassine.backend.model.Person;

@Service
public class PersonServiceImpl implements PersonService {
	
	@Autowired
	private PersonDao personDao;
	
	@Transactional
	public Person getPerson(String email, String password) {
		return personDao.getPerson(email, password);
	}
	
	
}
