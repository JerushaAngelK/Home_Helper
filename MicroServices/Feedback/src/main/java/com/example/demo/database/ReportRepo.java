package com.example.demo.database;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Report;
@Repository
public interface ReportRepo extends JpaRepository<Report,Integer> {

}
