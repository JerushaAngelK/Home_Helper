package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Calender;
import com.example.demo.repository.CalenderRepo;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/plans")
public class CalenderController {

	 @Autowired
	 private final CalenderRepo planRepository;

	    public CalenderController(CalenderRepo planRepository) {
	        this.planRepository = planRepository;
	    }

	    @PostMapping("/post")
	    public ResponseEntity<Calender> addPlan(@RequestBody Calender plan) {
	        Calender savedPlan = planRepository.save(plan);
	        return ResponseEntity.ok(savedPlan);
	    }

}
