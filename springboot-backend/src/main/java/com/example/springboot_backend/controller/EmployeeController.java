package com.example.springboot_backend.controller;


import com.example.springboot_backend.model.Employee;
import com.example.springboot_backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")

public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    // Develop - Get all employee API
//    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/employees")
    
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }
}
