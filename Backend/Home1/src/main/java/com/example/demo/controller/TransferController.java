package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Transfer;
import com.example.demo.repository.TransferRepo;

import java.util.List;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/tasks")
public class TransferController {
    private final TransferRepo taskRepository;

    @Autowired
    public TransferController(TransferRepo taskRepository) {
        this.taskRepository = taskRepository;
    }

    @GetMapping("/get")
    public List<Transfer> getAllTasks() {
        return taskRepository.findAll();
    }

    @PostMapping("/updateTasks")
    public void updateTasks(@RequestBody List<Transfer> updatedTasks) {
        taskRepository.saveAll(updatedTasks);
    }
}
