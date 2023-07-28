package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

//@Setter
//@Getter
//@AllArgsConstructor
//@NoArgsConstructor
//@Builder
@Entity
@Table(name="report")
public class Report {
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private int id;
	private String report;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getReport() {
		return report;
	}
	public void setReport(String report) {
		this.report = report;
	}


}
