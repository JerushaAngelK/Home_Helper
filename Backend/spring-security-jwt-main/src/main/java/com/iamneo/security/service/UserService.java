package com.iamneo.security.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.User;
import com.iamneo.security.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository repo;
	public User findById(int id) {
		return repo.findById(id).get();
	}
	public boolean addNew(User us) {
		return repo.save(us)!=null?true:false;
	}
	public User updateUser(User us,Integer id) {
		User user=repo.findById(id).get();
		user.setUserName(us.getUsername());
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
	
//	  public Optional<User> findUserByEmailAndPassword(String userName, String password) {
//	        return repo.findByUserNameAndPassword(userName, password);
//	    }

  
}
