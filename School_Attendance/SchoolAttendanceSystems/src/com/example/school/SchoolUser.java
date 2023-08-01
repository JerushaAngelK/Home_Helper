package com.example.school;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Scanner;

// Base class for School Users (Teacher and Administrator)
//abstract class
public abstract class SchoolUser {
	//encapsulation
    private String username;
    private String password;

    public SchoolUser(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
    //polymorphism
    public abstract boolean login(Scanner scanner, Connection connection) throws SQLException;
}
