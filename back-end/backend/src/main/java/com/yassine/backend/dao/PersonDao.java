package com.yassine.backend.dao;

import com.yassine.backend.model.Person;

public interface PersonDao {
	Person getPerson(String email, String password);
}
