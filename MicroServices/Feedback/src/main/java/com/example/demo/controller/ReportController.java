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
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Report;

import com.example.demo.service.ReportService;

@RestController
@CrossOrigin("*")
//@RequestMapping("/Feedback")
public class ReportController {
	@Autowired
	private ReportService stuservice;

	@GetMapping("/getfed")
	public List<Report> getDetails(){
		return stuservice.getAllDetails();
		
	}
	@PostMapping("/addfed")
	public Report postDetails(@RequestBody Report f) {
		return stuservice.saveDetails(f);
	}
	@DeleteMapping("/deletefeed/{feed_id_id}")
	public String delete(@PathVariable int feed_id) {
		 stuservice.deleteDepartmentById(feed_id);
		 return "Deleted";
	}
	@PutMapping("/updatefeed/{feed_id}")
	public Report update(@PathVariable int feed_id,@RequestBody Report f) {
	return stuservice.update(feed_id,f);
	}
}
