package com.example.back.model;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
@Entity

@Table(name = "users")
public class User implements Serializable {
    @Id
    @Column(name = "id_user", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id_user;

    @Column(name = "name",length = 255)
    private String name;

    @Column(name = "last_name",length = 255)
    private String last_name;

    @Column(name = "user_name",nullable = false,length = 50)
    private String user_name;

    @Column(name = "phone_number",nullable = false,length = 14)
    private String phone_number;
}
