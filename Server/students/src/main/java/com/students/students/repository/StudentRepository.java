package com.students.students.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.students.students.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>{
    
}
