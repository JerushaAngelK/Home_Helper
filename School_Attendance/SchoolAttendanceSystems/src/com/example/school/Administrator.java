package com.example.school;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class Administrator extends SchoolUser implements UserInterface {

    public Administrator(String username, String password) {
        super(username, password);
    }

    @Override
    public void showMenu() {
        System.out.println("\nAdministrator Interface");
        System.out.println("1. View Attendance Records");
        System.out.println("2. Add Teacher");
        System.out.println("3. View Report");
        System.out.println("0. Logout");
    }

    //polymorphism
    @Override
    public boolean login(Scanner scanner, Connection connection) throws SQLException {
        System.out.print("Enter administrator username: ");
        String adminUsername = scanner.nextLine();
        System.out.print("Enter administrator password: ");
        String adminPassword = scanner.nextLine();

        String query = "SELECT * FROM administrators WHERE username = ? AND password = ?";
        PreparedStatement statement = connection.prepareStatement(query);
        statement.setString(1, adminUsername);
        statement.setString(2, adminPassword);
        ResultSet resultSet = statement.executeQuery();

        boolean loginSuccessful = resultSet.next();
        resultSet.close();
        statement.close();

        return loginSuccessful;
    }
 
    public void administratorInterface(Scanner scanner, Connection connection) throws SQLException {
        boolean exit = false;

        while (!exit) {
            showMenu();
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    viewAttendanceRecords(connection);
                    break;
                case 2:
                    addTeacher(scanner, connection);
                    break;
                case 3:
                    generateAttendanceReport(scanner, connection);
                    break;
                case 0:
                    System.out.println("Logging out. Goodbye, Administrator!");
                    exit = true;
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }


    private void viewAttendanceRecords(Connection connection) throws SQLException {
        String selectQuery = "SELECT * FROM attendance_records";
        PreparedStatement statement = connection.prepareStatement(selectQuery);
        ResultSet resultSet = statement.executeQuery();

        System.out.println("\nAttendance Records:");
        System.out.println("ID\tStudent Name\tDate\tStatus");
        while (resultSet.next()) {
            int id = resultSet.getInt("id");
            String studentName = resultSet.getString("student_name");
            String date = resultSet.getString("date");
            String status = resultSet.getString("status");
            System.out.println(id + "\t" + studentName + "\t" + date + "\t" + status);
        }

        resultSet.close();
        statement.close();
    }
   
    private void addTeacher(Scanner scanner, Connection connection) throws SQLException {
        System.out.print("Enter teacher username: ");
        String username = scanner.nextLine();
        System.out.print("Enter teacher password: ");
        String password = scanner.nextLine();

        String insertQuery = "INSERT INTO teachers (username, password) VALUES (?, ?)";
        PreparedStatement statement = connection.prepareStatement(insertQuery);
        statement.setString(1, username);
        statement.setString(2, password);

        int rowsAffected = statement.executeUpdate();
        if (rowsAffected > 0) {
            System.out.println("Teacher added successfully.");
        } else {
            System.out.println("Failed to add the teacher.");
        }
        statement.close();
    }
  
    private void generateAttendanceReport(Scanner scanner, Connection connection) throws SQLException {
        System.out.print("Enter the date for which you want to generate the report (YYYY-MM-DD): ");
        String date = scanner.nextLine();

        if (!isValidDateFormat(date)) {
            System.out.println("Invalid date format. Please use YYYY-MM-DD.");
            return;
        }

        String selectQuery = "SELECT COUNT(*) AS total_present FROM attendance_records WHERE date = ? AND status = 'Present'";
        PreparedStatement presentStatement = connection.prepareStatement(selectQuery);
        presentStatement.setString(1, date);
        ResultSet presentResult = presentStatement.executeQuery();

        int totalPresent = 0;
        if (presentResult.next()) {
            totalPresent = presentResult.getInt("total_present");
        }
        presentResult.close();
        presentStatement.close();

        String selectAbsentQuery = "SELECT COUNT(*) AS total_absent FROM attendance_records WHERE date = ? AND status = 'Absent'";
        PreparedStatement absentStatement = connection.prepareStatement(selectAbsentQuery);
        absentStatement.setString(1, date);
        ResultSet absentResult = absentStatement.executeQuery();

        int totalAbsent = 0;
        if (absentResult.next()) {
            totalAbsent = absentResult.getInt("total_absent");
        }
        absentResult.close();
        absentStatement.close();

        System.out.println("\nAttendance Report for " + date + ":");
        System.out.println("Total Students: " + (totalPresent + totalAbsent));
        System.out.println("Present: " + totalPresent);
        System.out.println("Absent: " + totalAbsent);
    }
    private boolean isValidDateFormat(String date) {
        return date.matches("\\d{4}-\\d{2}-\\d{2}");
    }
}
