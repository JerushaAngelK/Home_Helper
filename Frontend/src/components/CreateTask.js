import React, { Component } from 'react'
import TaskService from '../services/TaskService';
import { BsCheckCircleFill,BsFillXCircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
class CreateEmployeeComponent extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            // step 2
            id: this.props.match.params.id,
            taskName: ' ',
            startDate: ' ',
            endDate: ' ',
            img: ' ',
            responder: ' '
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }
    
    // step 3
    componentDidMount(){
        
        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            TaskService.getTaskById(this.state.id).then( (res) =>{
                let task = res.data;
                this.setState({
                    taskName: task.taskName,
                    startDate: task.startDate,
                    endDate : task.endDate,
                    img : task.img,
                    responder: task.responder
                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let task = {taskName: this.state.taskName, 
            startDate: this.state.startDate, 
            endDate: this.state.endDate, 
            img: this.state.img,
            responder: this.state.responder};
            console.log('task => ' + JSON.stringify(task));
            
            // step 5
            if(this.state.id === '_add'){
                TaskService.createEmployee(task).then(res =>{
                    this.props.history.push('/mink');
                    // navigate('/mink');
                });
            }else{
                TaskService.updateEmployee(task, this.state.id).then( res => {
                    this.props.history.push('/mink');
                    // const navigate = useNavigate();
                    // navigate('/mink');
                });
            }
        }
        
        changeFirstNameHandler= (event) => {
            this.setState({taskName: event.target.value});
        }
        
        changeLastNameHandler= (event) => {
            this.setState({startDate: event.target.value});
        }
        
        changeEmailHandler= (event) => {
            this.setState({endDate: event.target.value});
        }
        changeImgHandler= (event) => {
            this.setState({img: event.target.value});
        }
        changeRoll_noHandler= (event) => {
            this.setState({responder: event.target.value});
        }
        
        cancel(){
        // const navigate = useNavigate();
        this.props.history.push('/mink');
        // navigate('/mink');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center p-4 m-2 text-info">Add</h3>
        }else{
            return <h3 className="text-center p-4 m-2 text-info">Update</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3 cardshadow3">
                                
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Task Name: </label>
                                            <input placeholder="First Name" name="taskName" className="form-control" 
                                                value={this.state.taskName} onChange={this.changeFirstNameHandler} />
                                        </div>
                                        <div className = "form-group">
                                            <label> Start Date: </label>
                                            <input placeholder="Last Name" name="startDate" className="form-control" 
                                                value={this.state.startDate} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> End Date: </label>
                                            <input placeholder="Email Address" name="endDate" className="form-control" 
                                                value={this.state.endDate} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Img Url: </label>
                                            <input placeholder="Img Url" name="img" className="form-control" 
                                                value={this.state.img} onChange={this.changeImgHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Responder: </label>
                                            <input placeholder="Roll No" name="responder" className="form-control" 
                                                value={this.state.responder} onChange={this.changeRoll_noHandler}/>
                                        </div>
                                        <div className='btn-group'>
                                        <button className="btn btn-success w-auto" onClick={this.saveOrUpdateEmployee}><BsCheckCircleFill/> Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}><BsFillXCircleFill/> Cancel</button>
                                        </div> 
                                         
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}


export default CreateEmployeeComponent

