package com.students.students.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.students.students.model.Student;
import com.students.students.service.StudentService;

@RestController
@RequestMapping("/api/students")
public class StudentController {
    private StudentService service;


    @Autowired
    public StudentController(StudentService service){
        this.service = service;
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/get/all")
    public List<Student> getAll(){
        return service.getAll();
    }
}
