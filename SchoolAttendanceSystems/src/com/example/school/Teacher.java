package com.example.school;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;


public class Teacher extends SchoolUser implements UserInterface {

    public Teacher(String username, String password) {
        super(username, password);
    }

    @Override
    public void showMenu() {
        System.out.println("\nTeacher Interface");
        System.out.println("1. Mark Attendance");
        System.out.println("2. View Attendance");
        System.out.println("3. Edit Attendance");
        System.out.println("4. Delete Attendance");
        System.out.println("5. View Individual Attendance");
        System.out.println("0. Logout");
    }

    //polymorphism
    @Override
    public boolean login(Scanner scanner, Connection connection) throws SQLException {

        System.out.print("Enter teacher username: ");
        String teacherUsername = scanner.nextLine();
        System.out.print("Enter teacher password: ");
        String teacherPassword = scanner.nextLine();

        String query = "SELECT * FROM teachers WHERE username = ? AND password = ?";
        PreparedStatement statement = connection.prepareStatement(query);
        statement.setString(1, teacherUsername);
        statement.setString(2, teacherPassword);
        ResultSet resultSet = statement.executeQuery();

        boolean loginSuccessful = resultSet.next();
        resultSet.close();
        statement.close();

        return loginSuccessful;
    }
   
    public void teacherInterface(Scanner scanner, Connection connection, Teacher teacher) throws SQLException {
        boolean exit = false;

        while (!exit) {
            showMenu();
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    markAttendance(scanner, connection, teacher);
                    break;
                case 2:
                    viewAttendanceRecords(connection, teacher);
                    break;
                case 3:
                    editAttendance(scanner, connection, teacher);
                    break;
                case 4:
                    deleteStudentAttendance(scanner, connection);
                    break;
                case 5:
                    viewStudentAttendanceStatus(scanner, connection);
                    break;
                case 0:
                    System.out.println("Logging out. Goodbye, Teacher!");
                    exit = true;
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }


    private void markAttendance(Scanner scanner, Connection connection, Teacher teacher) throws SQLException {
        System.out.print("Enter student name: ");
        String studentName = scanner.nextLine();

        System.out.print("Enter date (YYYY-MM-DD): ");
        String date = scanner.nextLine();

        if (!isValidDateFormat(date)) {
            System.out.println("Invalid date format. Please use YYYY-MM-DD.");
            return;
        }

        System.out.print("Enter attendance status (Present/Absent): ");
        String status = scanner.nextLine();

        if (!isValidStatus(status)) {
            System.out.println("Invalid status. Please enter either 'Present' or 'Absent'.");
            return;
        }

        String insertQuery = "INSERT INTO attendance_records (student_name, date, status, teacher_username) VALUES (?, ?, ?, ?)";
        PreparedStatement statement = connection.prepareStatement(insertQuery);
        statement.setString(1, studentName);
        statement.setString(2, date);
        statement.setString(3, status);
        statement.setString(4, teacher.getUsername());

        int rowsAffected = statement.executeUpdate();
        if (rowsAffected > 0) {
            System.out.println("Attendance record added successfully.");
        } else {
            System.out.println("Failed to add the attendance record.");
        }
        statement.close();
    }

   
    private void viewAttendanceRecords(Connection connection, Teacher teacher) throws SQLException {
        String selectQuery = "SELECT * FROM attendance_records WHERE teacher_username = ?";
        PreparedStatement statement = connection.prepareStatement(selectQuery);
        statement.setString(1, teacher.getUsername());
        ResultSet resultSet = statement.executeQuery();

        System.out.println("\nAttendance Records:");
        System.out.println("ID\tRoll.No\tName\tDate\tPresent/Absent");
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

   
    private void editAttendance(Scanner scanner, Connection connection, Teacher teacher) throws SQLException {
        System.out.println("Enter the ID of the attendance record you want to edit:");
        int attendanceId = scanner.nextInt();
        scanner.nextLine();

        String selectQuery = "SELECT * FROM attendance_records WHERE id = ? AND teacher_username = ?";
        PreparedStatement selectStatement = connection.prepareStatement(selectQuery);
        selectStatement.setInt(1, attendanceId);
        selectStatement.setString(2, teacher.getUsername());
        ResultSet resultSet = selectStatement.executeQuery();

        if (resultSet.next()) {
            // Attendance record found and it belongs to the teacher
            String studentName = resultSet.getString("student_name");
            String date = resultSet.getString("date");
            String status = resultSet.getString("status");

            System.out.println("Attendance Record Details:");
            System.out.println("ID: " + attendanceId);
            System.out.println("Student Name: " + studentName);
            System.out.println("Date: " + date);
            System.out.println("Status: " + status);

            System.out.print("Enter new status (Present/Absent): ");
            String newStatus = scanner.nextLine();

            if (!isValidStatus(newStatus)) {
                System.out.println("Invalid status. Please enter either 'Present' or 'Absent'.");
                return;
            }

            String updateQuery = "UPDATE attendance_records SET status = ? WHERE id = ?";
            PreparedStatement updateStatement = connection.prepareStatement(updateQuery);
            updateStatement.setString(1, newStatus);
            updateStatement.setInt(2, attendanceId);
            int rowsAffected = updateStatement.executeUpdate();

            if (rowsAffected > 0) {
                System.out.println("Attendance record updated successfully.");
            } else {
                System.out.println("Failed to update the attendance record.");
            }
            updateStatement.close();
        } else {
            System.out.println("Attendance record not found or you don't have permission to edit it.");
        }

        resultSet.close();
        selectStatement.close();
    }
  
    private void deleteStudentAttendance(Scanner scanner, Connection connection) throws SQLException {
        System.out.print("Enter student name: ");
        String studentName = scanner.nextLine();

        System.out.print("Enter date (YYYY-MM-DD): ");
        String date = scanner.nextLine();

        if (!isValidDateFormat(date)) {
            System.out.println("Invalid date format. Please use YYYY-MM-DD.");
            return;
        }

        String deleteQuery = "DELETE FROM attendance_records WHERE student_name = ? AND date = ?";
        PreparedStatement statement = connection.prepareStatement(deleteQuery);
        statement.setString(1, studentName);
        statement.setString(2, date);

        int rowsAffected = statement.executeUpdate();
        if (rowsAffected > 0) {
            System.out.println("Student attendance record deleted successfully.");
        } else {
            System.out.println("No matching attendance record found for the given student name and date.");
        }
        statement.close();
    }

    private void viewStudentAttendanceStatus(Scanner scanner, Connection connection) throws SQLException {
        System.out.print("Enter student name: ");
        String studentName = scanner.nextLine();

        System.out.print("Enter date (YYYY-MM-DD): ");
        String date = scanner.nextLine();

        if (!isValidDateFormat(date)) {
            System.out.println("Invalid date format. Please use YYYY-MM-DD.");
            return;
        }

        String selectQuery = "SELECT status FROM attendance_records WHERE student_name = ? AND date = ?";
        PreparedStatement statement = connection.prepareStatement(selectQuery);
        statement.setString(1, studentName);
        statement.setString(2, date);

        ResultSet resultSet = statement.executeQuery();
        if (resultSet.next()) {
            String status = resultSet.getString("status");
            System.out.println("Attendance Status for " + studentName + " on " + date + ": " + status);
        } else {
            System.out.println("No attendance record found for the given student name and date.");
        }
        resultSet.close();
        statement.close();
    }

    private boolean isValidDateFormat(String date) {
        return date.matches("\\d{4}-\\d{2}-\\d{2}");
    }

    private boolean isValidStatus(String status) {
        return status.equalsIgnoreCase("Present") || status.equalsIgnoreCase("Absent");
    }
}
