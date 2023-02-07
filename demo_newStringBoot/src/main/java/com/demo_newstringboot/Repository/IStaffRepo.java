package com.demo_newstringboot.Repository;

import com.demo_newstringboot.model.Staff;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface IStaffRepo extends PagingAndSortingRepository<Staff,Long> {

}
