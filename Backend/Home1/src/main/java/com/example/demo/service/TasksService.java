package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Task;
import com.example.demo.repository.TaskRepo;





@Service
public class TasksService implements TaskService {

	@Autowired
	private TaskRepo productRepo;

	@Override
	public Task saveProduct(Task product) {

		return productRepo.save(product);
	}

	@Override
	public List<Task> getAllProduct() {
		return productRepo.findAll();
	}

	@Override
	public Task getProductById(Integer id) {
		return productRepo.findById(id).get();
	}

	@Override
	public String deleteProduct(Integer id) {
		Task product = productRepo.findById(id).get();

		if (product != null) {
			productRepo.delete(product);
			return "Product Delete Sucessfully";
		}

		return "Something wrong on server";
	}

	@Override
	public Task editProduct(Task p, Integer id) {

		Task oldProduct = productRepo.findById(id).get();

		oldProduct.setTaskName(p.getTaskName());
		oldProduct.setStartDate(p.getStartDate());
		oldProduct.setEndDate(p.getEndDate());
		oldProduct.setStatus(p.getStatus());
		oldProduct.setResponder(p.getResponder());

		return productRepo.save(oldProduct);
	}

}