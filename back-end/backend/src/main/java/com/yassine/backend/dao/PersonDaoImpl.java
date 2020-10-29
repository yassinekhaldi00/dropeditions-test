package com.yassine.backend.dao;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;

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
		Query<Person> query = currentSession.createQuery("from Person where email=:email").setParameter("email", email);
		try {
			Person person =  query.getSingleResult();
			if (person.getPassword().equals(password)) {
				person.setValid(true);
			}
			else {
				person.setValid(false);
			}
			return person;
		}catch (NoResultException e) {
			Person person = new Person();
			person.setValid(false);
			return person;
			
		}
	}
	
	public Person addPerson(Person person) {
		Session currentSession = entityManager.unwrap(Session.class);
		Query<Person> query = currentSession.createQuery("from Person where email=:email").setParameter("email", person.getEmail());
		try {
			query.getSingleResult();
			person.setValid(false);
		}catch (NoResultException e) {
			person.setValid(true);
			currentSession.save(person);
		}
		return person;
		
	}

}
