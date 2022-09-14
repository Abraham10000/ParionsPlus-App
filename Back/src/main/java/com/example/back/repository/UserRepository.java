package com.example.back.repository;

import com.example.back.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository <User, Integer> {
    List<User> findByNameContaining(String name);
}
