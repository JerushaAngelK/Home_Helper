package com.example.school;

import java.sql.*;
import java.util.Scanner;

public class SchoolAttendanceSystem {
//    private static final String DB_URL = "jdbc:mysql://localhost:3306/school_attendance";
//    private static final String DB_USER = "root";
//    private static final String DB_PASS = "jerusha2003";

    public static void main(String[] args) {
        Connection connection = null;

        try {
            connection = Connections.getConnection();
            if (connection == null) {
                System.err.println("Failed to connect to the database. Exiting the application.");
                return;
            }

            System.out.println("Database Connection Successful!");

            createTables(connection); // Create necessary tables if not already present

            Scanner scanner = new Scanner(System.in);
            while (true) {
                System.out.println("\nSchool Attendance System");
                System.out.println("1. Teacher Login");
                System.out.println("2. Administrator Login");
                System.out.println("0. Exit");
                System.out.print("Enter your choice: ");
                int choice = scanner.nextInt();
                scanner.nextLine(); // Consume the newline character

                switch (choice) {
                    case 1:
                        // Teacher login
                        Teacher teacher = teacherLogin(scanner, connection);
                        if (teacher != null) {
                            System.out.println("Teacher login successful!");
                            teacher.teacherInterface(scanner, connection, teacher);
                        } else {
                            System.out.println("Invalid teacher credentials. Please try again.");
                        }
                        break;
                    case 2:
                        // Administrator login
                        Administrator admin = administratorLogin(scanner, connection);
                        if (admin != null) {
                            System.out.println("Administrator login successful!");
                            admin.administratorInterface(scanner, connection);
                        } else {
                            System.out.println("Invalid administrator credentials. Please try again.");
                        }
                        break;
                    case 0:
                        System.out.println("Exiting the application. Goodbye!");
                        connection.close();
                        return;
                    default:
                        System.out.println("Invalid choice. Please try again.");
                }
            }
        } catch (SQLException e) {
            System.err.println("Error connecting to the database: " + e.getMessage());
            e.printStackTrace();
        } finally {
            Connections.closeConnection(connection);
        }
    }

    private static void createTables(Connection connection) throws SQLException {
        // Create the teachers table if not already present
        String createTeachersTableQuery = "CREATE TABLE IF NOT EXISTS teachers (" +
                "username VARCHAR(100) PRIMARY KEY," +
                "password VARCHAR(100) NOT NULL" +
                ")";
        PreparedStatement createTeachersTableStmt = connection.prepareStatement(createTeachersTableQuery);
        createTeachersTableStmt.executeUpdate();
        createTeachersTableStmt.close();

        // Create the administrators table if not already present
        String createAdministratorsTableQuery = "CREATE TABLE IF NOT EXISTS administrators (" +
                "username VARCHAR(100) PRIMARY KEY," +
                "password VARCHAR(100) NOT NULL" +
                ")";
        PreparedStatement createAdministratorsTableStmt = connection.prepareStatement(createAdministratorsTableQuery);
        createAdministratorsTableStmt.executeUpdate();
        createAdministratorsTableStmt.close();

        // Create the attendance_records table if not already present
        String createAttendanceTableQuery = "CREATE TABLE IF NOT EXISTS attendance_records (" +
                "id INT AUTO_INCREMENT PRIMARY KEY," +
                "student_name VARCHAR(100) NOT NULL," +
                "date DATE NOT NULL," +
                "status VARCHAR(10) NOT NULL," +
                "teacher_username VARCHAR(100) NOT NULL," +
                "FOREIGN KEY (teacher_username) REFERENCES teachers(username)" +
                ")";
        PreparedStatement createAttendanceTableStmt = connection.prepareStatement(createAttendanceTableQuery);
        createAttendanceTableStmt.executeUpdate();
        createAttendanceTableStmt.close();
    }

    private static Teacher teacherLogin(Scanner scanner, Connection connection) throws SQLException {
        System.out.print("Enter teacher username: ");
        String teacherUsername = scanner.nextLine();
        System.out.print("Enter teacher password: ");
        String teacherPassword = scanner.nextLine();

        String query = "SELECT * FROM teachers WHERE username = ? AND password = ?";
        PreparedStatement statement = connection.prepareStatement(query);
        statement.setString(1, teacherUsername);
        statement.setString(2, teacherPassword);
        ResultSet resultSet = statement.executeQuery();

        if (resultSet.next()) {
            return new Teacher(teacherUsername, teacherPassword);
        } else {
            return null;
        }
    }

    private static Administrator administratorLogin(Scanner scanner, Connection connection) throws SQLException {
        System.out.print("Enter administrator username: ");
        String adminUsername = scanner.nextLine();
        System.out.print("Enter administrator password: ");
        String adminPassword = scanner.nextLine();

        String query = "SELECT * FROM administrators WHERE username = ? AND password = ?";
        PreparedStatement statement = connection.prepareStatement(query);
        statement.setString(1, adminUsername);
        statement.setString(2, adminPassword);
        ResultSet resultSet = statement.executeQuery();

        if (resultSet.next()) {
            return new Administrator(adminUsername, adminPassword);
        } else {
            return null;
        }
    }
}
