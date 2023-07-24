package com.iamneo.security.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
