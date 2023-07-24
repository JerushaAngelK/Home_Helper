package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Services {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String workType;//plumbing,electric etc
	private String workMode;//company
	private String review;
	private boolean isAvailable;
	private long salaryRange;
//    @ManyToOne(fetch = FetchType.LAZY)
//    private Services services;
}
