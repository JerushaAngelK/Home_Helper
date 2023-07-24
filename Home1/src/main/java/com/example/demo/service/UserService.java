package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepo;

@Service
public class UserService {
	@Autowired
	UserRepo repo;
	public User findById(int id) {
		return repo.findById(id).get();
	}
	public boolean addNew(User us) {
		return repo.save(us)!=null?true:false;
	}
	public User updateUser(User us,Integer id) {
		User user=repo.findById(id).get();
		user.setUserName(us.getUserName());
		user.setPassword(us.getPassword());
		user.setEmail(us.getEmail());
		user.setUserType(us.getUserType());
		return repo.save(user);
	}
	public boolean deleteUser(int id) {
		if(repo.findById(id).isPresent()) {
			repo.deleteById(id);
			return true;
		}
		return false;
	}
	
	  public User findUserByEmailAndPassword(String userName, String password) {
	        return repo.findByUserNameAndPassword(userName, password);
	    }

  
}
