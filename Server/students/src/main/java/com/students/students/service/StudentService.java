package com.students.students.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.students.students.model.Student;
import com.students.students.repository.StudentRepository;

@Service
public class StudentService {
    private StudentRepository repo;


    @Autowired
    public StudentService(StudentRepository repository){
        this.repo = repository;
    }

    public List<Student> getAll(){
        List<Student> students = repo.findAll();

        return students;
    }

    public void addStudent(Student student){
        repo.save(student);
    }



}
