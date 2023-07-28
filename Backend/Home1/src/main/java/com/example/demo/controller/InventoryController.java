package com.example.demo.controller;

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

import com.example.demo.entity.Inventory;
import com.example.demo.repository.InventoryRepo;
import com.example.demo.service.InventoryService;

@CrossOrigin(origins = "*")
@RestController
//@RequestMapping("/inventory")
public class InventoryController {

	@Autowired
	  private InventoryRepo repo;
	   @Autowired
	  private InventoryService ser;

		@GetMapping("/get")
		public List <Inventory> printAll(){
			return repo.findAll();
		}
		
//		@GetMapping("/{id}")
//		public Inventory findById(@PathVariable int id) {
//			return ser.findById(id);
//		}

		@PostMapping("/post")
		public boolean addNew(@RequestBody Inventory us) {
			return ser.addNew(us);
		}
		
		@PutMapping("/put/{id}")
		public Inventory updateUser(@RequestBody Inventory users,@PathVariable int id){
			return ser.updateUser(users,id);
		}
		
		@DeleteMapping("/editProduct/{id}")
		public boolean deleteUser(@PathVariable int id){
			return ser.deleteUser(id);
		}
}
