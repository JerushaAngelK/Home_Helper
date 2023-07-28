import axios from 'axios';
import { Component } from 'react';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080"  ;
// const response = await axios.get(EMPLOYEE_API_BASE_URL);

class TaskService extends Component {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(task){
        return axios.post(EMPLOYEE_API_BASE_URL, task);
    }

    getEmployeeById(taskId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/mink' + taskId);
    }
 
    updateEmployee(task, taskId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/mink/{id}' + taskId, task);
    }

    deleteEmployee(taskId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + taskId);
    }
}

export default new TaskService()