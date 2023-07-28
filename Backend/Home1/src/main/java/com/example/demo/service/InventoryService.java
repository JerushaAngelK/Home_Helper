package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Inventory;
import com.example.demo.repository.InventoryRepo;

@Service
public class InventoryService {

	@Autowired
	private InventoryRepo repo;
	public Inventory findById(int id) {
		return repo.findById(id).get();
	}
	public boolean addNew(Inventory us) {
		return repo.save(us)!=null?true:false;
	}
	public Inventory updateUser(Inventory us,Integer id) {
		Inventory Inventory=repo.findById(id).get();
//		Inventory.setId(us.getId());
		Inventory.setObjectName(us.getObjectName());
		Inventory.setCount(us.getCount());
		return repo.save(Inventory);
	}
	public boolean deleteUser(int id) {
		if(repo.findById(id).isPresent()) {
			repo.deleteById(id);
			return true;
		}
		return false;
	}
}
