package com.example.demo.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity

public class Works {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
//    private List <String> worksAssigned = new ArrayList<>();
//    private List <String> worksDone;
//	@OneToMany(fetch=FetchType.LAZY,cascade=CascadeType.ALL,mappedBy="service")
//	private List<Services> services;

}
