package com.demo_newstringboot.controller;


import com.demo_newstringboot.Repository.IStaffRepo;
import com.demo_newstringboot.model.Staff;
import com.demo_newstringboot.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Staff")
@CrossOrigin("*")

public class StaffController {
    @Autowired
    StaffService staffService;

    @GetMapping
    public List<Staff> staff() {
        return staffService.findAll();
    }

    @PostMapping
    public Staff create(@RequestBody Staff staff){
         staffService.save(staff);
         return staff;
    }

    @GetMapping("/{id}")
    public Staff showEdit(@PathVariable Long id) {
         return staffService.findById(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        staffService.delete(id);
    }
    @PutMapping("/{id}")
    public Staff edit(@RequestBody Staff staff){
         staffService.save(staff);
         return staff;
    }

}
