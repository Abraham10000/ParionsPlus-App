package com.example.back.repository;

import com.example.back.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends JpaRepository <User, Integer> {
    @Query(value = "select * from users where name ilike %:nametofind%",nativeQuery = true)
    List<User> findUsersByHisName(@Param("nametofind") String name);
}