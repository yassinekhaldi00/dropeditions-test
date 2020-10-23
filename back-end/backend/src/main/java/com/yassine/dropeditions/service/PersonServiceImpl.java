package com.yassine.dropeditions.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yassine.dropeditions.dao.PersonDao;

@Service
public class PersonServiceImpl implements PersonService {
	
	@Autowired
	private PersonDao personDao;
	
	@Transactional
	public boolean getPerson(String email, String password) {
		return personDao.getPerson(email, password);
	}
	
	
}
