package com.demo_newstringboot.service;

import com.demo_newstringboot.Repository.IStaffRepo;
import com.demo_newstringboot.model.Staff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import java.util.List;
@Component
public class StaffService {
    @Autowired
    IStaffRepo iStaffRepo;
   public List<Staff> findAll(){
       return (List<Staff>) iStaffRepo.findAll();
   }
    public void save(Staff staff){
        iStaffRepo.save(staff);
    }
    public void delete(Long id ){
        iStaffRepo.deleteById(id);
    }

    public Staff findById(Long id){
        return iStaffRepo.findById(id).get();
    }
}
