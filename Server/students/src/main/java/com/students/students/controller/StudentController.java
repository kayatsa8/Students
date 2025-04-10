package com.students.students.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.students.students.model.Student;
import com.students.students.model.StudentUpdate;
import com.students.students.service.StudentService;

@RestController
@RequestMapping("/api/students")
@CrossOrigin
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

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/add")
    public void addStudent(@RequestBody Student student){
        try{
            service.addStudent(student);
        }
        catch(Exception e){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }

    @ResponseStatus(HttpStatus.OK)
    @PatchMapping("/update")
    public void updateStudent(@RequestBody StudentUpdate updated){
        try{
            service.updateStudent(updated);
        }
        catch(Exception e){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }


}
