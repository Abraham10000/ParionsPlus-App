package com.example.back.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
@EnableWebSecurity
public class SecurityConf extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers(HttpMethod.GET, "/users/**").hasRole("Admin")
                .antMatchers(HttpMethod.POST, "/users").hasRole("Admin")
                .antMatchers(HttpMethod.DELETE, "/users/{id}").hasRole("Admin")
                .antMatchers(HttpMethod.PATCH, "/users/{id}").hasAnyRole("Admin", "Member")
                .antMatchers(HttpMethod.GET, "/bets/**").hasAnyRole("Admin", "Member")
                .antMatchers(HttpMethod.POST, "/bet").hasRole("Member")
                .antMatchers(HttpMethod.DELETE, "/bet/**").hasRole( "Member")
                .antMatchers(HttpMethod.GET, "/categories").permitAll()
                .antMatchers(HttpMethod.POST, "/category").hasRole( "Admin")
                .antMatchers(HttpMethod.DELETE, "/category/{id}").hasRole( "Admin")
                .antMatchers(HttpMethod.GET, "/competitions").permitAll()
                .antMatchers(HttpMethod.POST, "/competition").hasRole( "Admin")
                .antMatchers(HttpMethod.DELETE, "/competition/{id}").hasRole( "Admin")
                .antMatchers(HttpMethod.GET, "/teams").permitAll()
                .antMatchers(HttpMethod.POST, "/team").hasRole( "Admin")
                .antMatchers(HttpMethod.DELETE, "/team/{idteam}").hasRole( "Admin")
                .antMatchers(HttpMethod.GET, "/games/**").permitAll()
                .antMatchers(HttpMethod.GET, "/gameday").permitAll()
                .antMatchers(HttpMethod.POST, "/game").hasRole( "Admin")
                .antMatchers(HttpMethod.DELETE, "/game/{id}").hasRole( "Admin")
                .and()
                .formLogin()
                .and()
                .logout()
                .and()
                .csrf().disable();
    }
    @Override
    protected UserDetailsService userDetailsService(){
        UserDetails Member = User.builder()
                .username("Member")
                .password(passwordEncoder().encode("member"))
                .roles("Member")
                .build();

        UserDetails Admin = User.builder()
                .username("Admi")
                .password(passwordEncoder().encode("admin"))
                .roles("Admin")
                .build();

        return new InMemoryUserDetailsManager(Member, Admin);
    }

    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
