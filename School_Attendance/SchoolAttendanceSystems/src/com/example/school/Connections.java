package com.example.school;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


public class Connections {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/school_attendance";
    private static final String DB_USER = "root";
    private static final String DB_PASS = "jerusha2003";

    
    public static Connection getConnection() {
        try {
            return DriverManager.getConnection(DB_URL, DB_USER, DB_PASS);
        } catch (SQLException e) {
            System.err.println("Error connecting to the database: " + e.getMessage());
            e.printStackTrace();
            return null;
        }
    }

    
    public static void closeConnection(Connection connection) {
        if (connection != null) {
            try {
                connection.close();
            } catch (SQLException e) {
                System.err.println("Error closing the database connection: " + e.getMessage());
                e.printStackTrace();
            }
        }
    }
}
