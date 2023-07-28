package com.example.demo.entity;


import javax.persistence.*;

@Entity
@Table(name = "tasks")
public class Transfer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String taskName;

    // Add other fields as needed (startDate, endDate, status, responser, etc.)

    // Constructor, getters, setters, and other methods

    // ...
}
