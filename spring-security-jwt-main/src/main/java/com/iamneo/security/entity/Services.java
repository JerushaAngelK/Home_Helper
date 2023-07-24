package com.iamneo.security.entity;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
