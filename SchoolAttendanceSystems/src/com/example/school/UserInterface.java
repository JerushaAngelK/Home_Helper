package com.example.school;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Scanner;

// Interface for user types (Teacher and Administrator) to implement common methods
public interface UserInterface {
    //menu-teacher/admin
    void showMenu();

    //login type
    //polymorphism-method in Teacher & Administrator
    boolean login(Scanner scanner, Connection connection) throws SQLException;
}
