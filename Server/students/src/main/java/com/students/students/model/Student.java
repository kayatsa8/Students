package com.students.students.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotBlank(message = "First name must be provided")
    private String firstName;

    @NotBlank(message = "Last name must be provided")
    private String lastName;

    @NotBlank(message = "Email address must be provided")
    private String email;

    @NotNull(message = "Department must be provided")
    private Department department;

    @Min(value = 0, message = "GPA must be greater or equal to 0")
    @Max(value = 100, message = "GPA must be lesser or equal to 100")
    private Integer gpa;

    public void update(StudentUpdate updated){
        this.firstName = (updated.getFirstName() == null || updated.getFirstName().isBlank()) ?
                            this.firstName : updated.getFirstName();
        this.lastName = (updated.getLastName() == null || updated.getLastName().isBlank()) ?
                            this.lastName : updated.getLastName();
        this.email = (updated.getEmail() == null || updated.getEmail().isBlank()) ?
                        this.email : updated.getEmail();
        this.department = updated.getDepartment() == null ? this.department : updated.getDepartment();
        this.gpa = updated.getGpa() == null ? this.gpa : updated.getGpa();
    }
}
