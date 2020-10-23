package com.yassine.backend.dao;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.yassine.backend.model.Person;

@Repository
public class PersonDaoImpl implements PersonDao{
	
	@Autowired
	private EntityManager entityManager;
	
	public Person getPerson(String email, String password) {
		Session currentSession = entityManager.unwrap(Session.class);
		Query<Person> query = currentSession.createQuery("from Person where email="+email, Person.class);
		Person person =  query.getSingleResult();
		if (person.getPassword().equals(password)) {
			person.setValid(true);
		}
		else {
			person.setValid(false);
		}
		return person;
	}

}
