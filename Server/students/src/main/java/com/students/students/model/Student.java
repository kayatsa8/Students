package com.students.students.model;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Student {
    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private Department department;
    private Float GPA;

    public void update(StudentUpdate updated){
        this.firstName = updated.getFirstName() == null ? this.firstName : updated.getFirstName();
        this.lastName = updated.getLastName() == null ? this.lastName : updated.getLastName();
        this.email = updated.getEmail() == null ? this.email : updated.getEmail();
        this.department = updated.getDepartment() == null ? this.department : updated.getDepartment();
        this.GPA = updated.getGPA() == null ? this.GPA : updated.getGPA();
    }
}
