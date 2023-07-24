package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Energy;

public interface EnergyRepo extends JpaRepository<Energy,Integer>{

}
