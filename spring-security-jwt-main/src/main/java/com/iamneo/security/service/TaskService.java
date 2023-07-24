package com.iamneo.security.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.Task;
import com.iamneo.security.repository.TaskRepo;

@Service

public class TaskService {
    @Autowired
	TaskRepo repo;

    public Task findById(int id) {
		return repo.findById(id).get();
	}
    public Task update(Task book,Integer id) {
		Task boo=repo.findById(id).get();
		boo.setId(book.getId());
		boo.setTaskName(book.getTaskName());
		boo.setStartDate(book.getStartDate());
		boo.setEndDate(book.getEndDate());
		boo.setResponder(book.getResponder());
		return repo.save(boo);
	}
    public boolean deleteUser(int id) {
		if(repo.findById(id).isPresent()) {
			repo.deleteById(id);
			return true;
		}
		return false;
	}
	
}
