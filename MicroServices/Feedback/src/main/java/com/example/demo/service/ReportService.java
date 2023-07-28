package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.database.ReportRepo;
import com.example.demo.model.Report;

@Service
public class ReportService {
	@Autowired
	   private ReportRepo rev;
	public Report saveDetails(Report f) {

		return rev.save(f);
			
	}
	public List<Report> getAllDetails()
	{
		return rev.findAll();
	}
	public void deleteDepartmentById(int id)
	{
		rev.deleteById(id);
	}
	public Report update(int id,Report f) {
	return rev.save(f);	
	}
}
