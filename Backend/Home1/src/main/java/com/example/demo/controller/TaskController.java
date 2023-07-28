//package com.iamneo.security.controller;
//
//import java.util.List;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.iamneo.security.entity.Task;
//import com.iamneo.security.repository.TaskRepo;
//import com.iamneo.security.service.TaskService;
//
//@CrossOrigin(origins = "*")
//@RestController
//@RequestMapping("/api/all")
//public class TaskController  {
//	@Autowired
//	private TaskRepo rep;
//	@Autowired
//	TaskService ser;
//	
//	@GetMapping("/mink")
//	public List<Task> getList(){
//		return rep.findAll();	
//	}
//	
//	@GetMapping("/mink/{id}")
//	public Task findById(@PathVariable int id) {
//		return ser.findById(id);
//	}
//	
//	@PostMapping("/mink/{id}")
//	public Task create(@RequestBody Task book) {
//		return rep.save(book);
//		
//	}
//	
//	@PutMapping("/mink/{id}")
//	public Task updateBook(@PathVariable int id, @RequestBody Task book){		
//		return ser.update(book,id);
//	}
//	
//	
//	@DeleteMapping("/mink/{id}")
//	public boolean deleteUser(@PathVariable int id){
//		return ser.deleteUser(id);
//	}
//	
//	
//
//}

package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Task;
import com.example.demo.service.TaskService;



@CrossOrigin(origins ="*")
@RestController
public class TaskController {

	@Autowired
	private TaskService productService;

	@PostMapping("/saveProduct")
	public ResponseEntity<?> saveProduct(@RequestBody Task product) {
		return new ResponseEntity<>(productService.saveProduct(product), HttpStatus.CREATED);
	}

	@GetMapping("/")
	public ResponseEntity<?> getAllProduct() {
		return new ResponseEntity<>(productService.getAllProduct(), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getProductById(@PathVariable Integer id) {
		return new ResponseEntity<>(productService.getProductById(id), HttpStatus.OK);
	}

	@GetMapping("/deleteProduct/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable Integer id) {
		return new ResponseEntity<>(productService.deleteProduct(id), HttpStatus.OK);
	}

	@PostMapping("/editProduct/{id}")
	public ResponseEntity<?> editProduct(@RequestBody Task product, @PathVariable Integer id) {
		return new ResponseEntity<>(productService.editProduct(product, id), HttpStatus.CREATED);
	}

}
