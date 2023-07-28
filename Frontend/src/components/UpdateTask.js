// import React, { Component } from 'react'
// import TaskService from '../services/TaskService';

// class UpdateEmployeeComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             id: this.props.match.params.id,
//             taskName: ' ',
//             startDate: ' ',
//             endDate: ' ',
//             img:' ',
//             responder:' '
//         }
//         this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
//         this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
//         this.updateEmployee = this.updateEmployee.bind(this);
//     }

//     componentDidMount(){
//        TaskService.getTaskById(this.state.id).then( (res) =>{
//             let task = res.data;
//             this.setState({
//                 taskName: task.taskName,
//                 startDate: task.startDate,
//                 endDate : task.endDate,
//                 img : task.img,
//                 responder : task.responder
//             });
//         });
//     }

//     updateEmployee = (e) => {
//         e.preventDefault();
//         let task = {taskName: this.state.taskName,
//              startDate: this.state.startDate, 
//              endDate: this.state.endDate, 
//              img: this.state.img,
//              responder: this.state.responder};
//         console.log('task => ' + JSON.stringify(task));
//         console.log('id => ' + JSON.stringify(this.state.id));
//        TaskService.updateEmployee(task, this.state.id).then( res => {
//             this.props.history.push('/mink');
//         });
//     }
    
//     changeFirstNameHandler= (event) => {
//         this.setState({taskName: event.target.value});
//     }

//     changeLastNameHandler= (event) => {
//         this.setState({startDate: event.target.value});
//     }

//     changeEmailHandler= (event) => {
//         this.setState({endDate: event.target.value});
//     }
//     changeImgHandler= (event) => {
//         this.setState({img: event.target.value});
//     }
//     changeRoll_noHandler= (event) => {
//         this.setState({responder: event.target.value});
//     }

//     cancel(){
//         this.props.history.push('/mink');
//     }

//     render() {
//         return (
//             <div>
//                 <br></br>
//                    <div className = "container">
//                         <div className = "row">
//                             <div className = "card col-md-6 offset-md-3 offset-md-3 cardshadow3">
//                                 <div className = "card-body">
//                                     <form>
//                                         <div className = "form-group">
//                                             <label> Task Name: </label>
//                                             <input placeholder="First Name" name="taskName" className="form-control" 
//                                                 value={this.state.taskName} onChange={this.changeFirstNameHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Start Date: </label>
//                                             <input placeholder="Last Name" name="startDate" className="form-control" 
//                                                 value={this.state.startDate} onChange={this.changeLastNameHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> End Date: </label>
//                                             <input placeholder="Email Address" name="endDate" className="form-control" 
//                                                 value={this.state.endDate} onChange={this.changeEmailHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Img Url: </label>
//                                             <input placeholder="Img Url" name="Img" className="form-control" 
//                                                 value={this.state.img} onChange={this.changeImgHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Responder: </label>
//                                             <input placeholder="Roll No" name="responder" className="form-control" 
//                                                 value={this.state.responder} onChange={this.changeRoll_noHandler}/>
//                                         </div>

//                                         <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
//                                         <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>

//                    </div>
//             </div>
//         )
//     }
// }

// export default UpdateEmployeeComponent

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import  TaskService  from "../services/TaskService";
const UpdateEmployeeComponent = () => {
    const [employee, setEmployee] = useState({
        taskName: "",
        startDate: "",
        endDate: "",
        img: "",
        responder: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({
            ...employee,
            [name]: value,
        });
    };
    const updateEmployee = () => {
        setIsLoading(true);
        TaskService.updateEmployee(employee).then(() => {
            setIsLoading(false);
            alert("Employee updated successfully");
        }).catch((err) => {
            setIsLoading(false);
            console.log(err);
        });
    };
    const cancel = () => {
        setEmployee({
            taskName: "",
            startDate: "",
            endDate: "",
            img: "",
            responder: "",
        });
    };
    useEffect(() => {
        const id = localStorage.getItem("employeeId");
        if (id) {
            setIsLoading(true);
            TaskService.getEmployeeById(id).then((res) => {
                setIsLoading(false);
                setEmployee(res.data);
            }).catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
        }
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Update Employee</h1>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Task Name</label>
                                    <input
                                        placeholder="Task Name"
                                        name="taskName"
                                        className="form-control"
                                        value={employee.taskName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Start Date</label>
                                    <input
                                        placeholder="Start Date"
                                        name="startDate"
                                        className="form-control"
                                        value={employee.startDate}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>End Date</label>
                                    <input
                                        placeholder="End Date"
                                        name="endDate"
                                        className="form-control"
                                        value={employee.endDate}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Img</label>
                                    <input
                                        placeholder="Img"
                                        name="img"
                                        className="form-control"
                                        value={employee.img}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Responder</label>
                                    <input
                                        placeholder="Responder"
                                        name="responder"
                                        className="form-control"
                                        value={employee.responder}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button
                                    className="btn btn-success"
                                    onClick={updateEmployee}
                                >
                                    Save
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={cancel}
                                    style={{ marginLeft:"10px" }}
                                >
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default UpdateEmployeeComponent;