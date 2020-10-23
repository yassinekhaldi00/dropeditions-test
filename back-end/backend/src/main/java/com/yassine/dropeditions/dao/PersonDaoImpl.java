package com.yassine.dropeditions.dao;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.yassine.dropeditions.model.Person;

@Repository
public class PersonDaoImpl implements PersonDao{
	
	@Autowired
	private EntityManager entityManager;
	
	public boolean getPerson(String email, String password) {
		Session currentSession = entityManager.unwrap(Session.class);
		Query<Person> query = currentSession.createQuery("from Person where email="+email, Person.class);
		Person person =  query.getSingleResult();
		if (person.getPassword().equals(password)) {
			return true;
		}
		return false;
	}

}
