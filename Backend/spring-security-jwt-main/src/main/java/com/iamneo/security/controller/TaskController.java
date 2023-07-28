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

import com.iamneo.security.entity.Task;
import com.iamneo.security.repository.TaskRepo;
import com.iamneo.security.service.TaskService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/all/")
public class TaskController  {
	@Autowired
	private TaskRepo rep;
	@Autowired
	TaskService ser;
	
	@GetMapping("/mink")
	public List<Task> getList(){
		return rep.findAll();	
	}
	
	@GetMapping("/mink/{id}")
	public Task findById(@PathVariable int id) {
		return ser.findById(id);
	}
	
	@PostMapping("/mink")
	public Task create(@RequestBody Task book) {
		return rep.save(book);
		
	}
	
	@PutMapping("/mink/{id}")
	public Task updateBook(@PathVariable int id, @RequestBody Task book){		
		return ser.update(book,id);
	}
	
	
	@DeleteMapping("/mink/{id}")
	public boolean deleteUser(@PathVariable int id){
		return ser.deleteUser(id);
	}
	
	

}
