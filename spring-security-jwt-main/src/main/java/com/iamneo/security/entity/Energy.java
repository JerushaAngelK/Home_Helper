package com.iamneo.security.entity;



import jakarta.persistence.Entity;
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
public class Energy {
	@Id
//	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private String month;
	private int noOfUnits;
	private long price;
	

}
