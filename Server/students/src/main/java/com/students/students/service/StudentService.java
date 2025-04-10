package com.students.students.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.students.students.model.Student;
import com.students.students.model.StudentUpdate;
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

    public void updateStudent(StudentUpdate updated) throws Exception{
        if(updated.getId() == null){
            throw new Exception("given id is null");
        }

        Optional<Student> oStudent = repo.findById(updated.getId());

        if(oStudent.isEmpty()){
            throw new Exception("a student with id " + updated.getId() + " does not exist");
        }

        Student student = oStudent.get();
        student.update(updated);

        repo.save(student);
    }



}
