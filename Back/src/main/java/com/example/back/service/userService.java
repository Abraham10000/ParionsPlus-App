package com.example.back.service;

import com.example.back.model.User;
import com.example.back.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@AllArgsConstructor
public class userService {

    private final UserRepository userepository;

    public List<User> getALl(){
        return userepository.findAll();
    }

   public Optional<User> getById(Integer id){
        return userepository.findById(id);
    }

    public List<User> findName(String name){
        return userepository.findUsersByHisName(name);
    }

    public User AddUser(User newUser){
        return userepository.save(newUser);
    }

    public User UpdateUser(Integer id ,String name){
        Optional<User> user = userepository.findById(id);
        if(user.isPresent()){
            User user1 = user.get();
            user1.setName(name);
             return userepository.save(user1);
        } else {
            throw new NullPointerException("User not found");
        }
    }

    public String DeleteUserById(Integer id){
        userepository.deleteById(id);
        return "Delete succesfully";
    }
}
