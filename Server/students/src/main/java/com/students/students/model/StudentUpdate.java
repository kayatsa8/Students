package com.students.students.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class StudentUpdate {
    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private Department department;
    private Float GPA;
}
