package com.students.students.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import com.students.students.model.Department;
import com.students.students.model.Student;
import com.students.students.model.StudentUpdate;
import com.students.students.repository.StudentRepository;

import jakarta.validation.Valid;

@Service
@Validated
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

    public void addStudent(@Valid Student student) throws Exception{
        if(student.getId() != null){
            throw new Exception("an id should not be provided");
        }

        repo.save(student);
    }

    public void updateStudent(@Valid StudentUpdate updated) throws Exception{
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

    public Map<Department, String> getDepartments(){
        Map<Department, String> departments = new HashMap<>();

        departments.put(Department.SOFTWARE_ENGINEERING, "Software Engineering");
        departments.put(Department.MATERIALS_ENGINEERING, "Material Engineering");
        departments.put(Department.ELECTRONICS_ENGINEERING, "Electronics Engineering");
        departments.put(Department.COMPUTER_SCIENCE, "Computer Science");
        departments.put(Department.ECONOMICS, "Economics");
        departments.put(Department.BIOLOGY, "Biology");
        departments.put(Department.DATA_ENGINEERING, "Data Engineering");
        departments.put(Department.CHEMISTRY, "Chemistry");
        departments.put(Department.PHYSICS, "Physics");
        departments.put(Department.EDUCATION, "Education");
        departments.put(Department.PSYCHOLOGY, "Psychlogy");

        return departments;
    }

}
