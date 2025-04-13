package com.students.students.model;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class StudentUpdate {
    @NotNull(message = "Id must be provided")
    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private Department department;
    private Integer gpa;
}
