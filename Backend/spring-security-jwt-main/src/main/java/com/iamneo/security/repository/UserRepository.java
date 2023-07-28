package com.iamneo.security.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
//    Optional<User> findByUserNameAndPassword(String userName,String password);

//	Optional<User> findByUserName(String username);
	Optional<User> findByEmail(String userName);
//	Optional<User> findByUserName(String userName);

}
