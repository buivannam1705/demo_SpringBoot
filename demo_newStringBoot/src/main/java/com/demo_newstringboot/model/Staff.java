package com.demo_newstringboot.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String employeeCode;
    private String name;
    private int age;
    private String salary;

    @ManyToOne
    private Branch branch;
}

