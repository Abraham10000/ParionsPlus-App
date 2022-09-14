package com.example.back.controller;


import com.example.back.model.User;
import com.example.back.service.userService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
public class UserController {

    private final userService userservice;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userservice.getALl();
    }

    @GetMapping("/users/{userid}")
    public Optional<User> getUserById(@RequestParam Integer userid){
        return userservice.getById(userid);
    }

    @GetMapping("/users/{value}")
    public List<User> getByName(@RequestParam String value){ return  userservice.findName(value);}

    @PostMapping("/users")
    public User AddUser(@RequestBody User userToAdd){ return  userservice.AddUser(userToAdd);}

    @PatchMapping("/users/{id}")
    public User updateUserName(@PathVariable Integer id_user,@RequestBody String newname){
        return userservice.UpdateUser(id_user, newname);
    }

    @DeleteMapping("/users/{id}")
    public String DeleUser(@PathVariable Integer id_user){
        return  userservice.DeleteUserById(id_user);
    }
}
