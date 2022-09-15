package com.example.back.security;

import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
@AllArgsConstructor
public class SecurityConf extends WebSecurityConfigurerAdapter {
    private final com.example.back.service.userService userService;
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers(HttpMethod.GET, "/users/**").hasRole("admin")
                .antMatchers(HttpMethod.POST, "/users").hasRole("admin")
                .antMatchers(HttpMethod.DELETE, "/users/{id}").hasRole("admin")
                .antMatchers(HttpMethod.PATCH, "/users/{id}").hasAnyRole("admin", "member")
                .antMatchers(HttpMethod.GET, "/bets/**").hasAnyRole("admin", "member")
                .antMatchers(HttpMethod.POST, "/bet").hasRole("member")
                .antMatchers(HttpMethod.DELETE, "/bet/**").hasRole( "member")
                .antMatchers(HttpMethod.GET, "/categories").permitAll()
                .antMatchers(HttpMethod.POST, "/category").hasRole( "admin")
                .antMatchers(HttpMethod.DELETE, "/category/{id}").hasRole( "admin")
                .antMatchers(HttpMethod.GET, "/competitions").permitAll()
                .antMatchers(HttpMethod.POST, "/competition").hasRole( "admin")
                .antMatchers(HttpMethod.DELETE, "/competition/{id}").hasRole( "admin")
                .antMatchers(HttpMethod.GET, "/teams").permitAll()
                .antMatchers(HttpMethod.POST, "/team").hasRole( "admin")
                .antMatchers(HttpMethod.DELETE, "/team/{idteam}").hasRole( "admin")
                .antMatchers(HttpMethod.GET, "/games/**").permitAll()
                .antMatchers(HttpMethod.GET, "/gameday").permitAll()
                .antMatchers(HttpMethod.POST, "/game").hasRole( "admin")
                .antMatchers(HttpMethod.DELETE, "/game/{id}").hasRole( "admin")
                .and()
                .formLogin()
                .and()
                .logout()
                .and()
                .csrf().disable();
    }

    @Bean
    PasswordEncoder bcryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth)  {
        auth.authenticationProvider(daoAuthenticationProvider());
    }
    @Bean
    DaoAuthenticationProvider daoAuthenticationProvider(){
        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
        daoAuthenticationProvider.setPasswordEncoder(bcryptPasswordEncoder());
        daoAuthenticationProvider.setUserDetailsService(userService);
        return daoAuthenticationProvider;
    }
}
