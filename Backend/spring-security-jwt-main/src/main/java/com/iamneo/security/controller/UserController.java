package com.iamneo.security.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.User;
import com.iamneo.security.repository.UserRepository;
import com.iamneo.security.service.UserService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {
   @Autowired
   UserRepository repo;
   @Autowired
   UserService ser;

	@GetMapping("/get")
	public List <User> printAll(){
		return repo.findAll();
	}
	
	@GetMapping("/{id}")
	public User findById(@PathVariable int id) {
		return ser.findById(id);
	}

	@PostMapping("/post")
	public boolean addNew(@RequestBody User us) {
		return ser.addNew(us);
	}
	
	@PutMapping("/{id}")
	public User updateUser(@RequestBody User users,@PathVariable int id){
		return ser.updateUser(users,id);
	}
	
	@DeleteMapping("/{id}")
	public boolean deleteUser(@PathVariable int id){
		return ser.deleteUser(id);
	}
   
}
