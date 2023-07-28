import React, { Component } from 'react'
import TaskService from '../services/TaskService'
import { Link } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            task: {}
        }
    }

    componentDidMount(){
        TaskService.getTaskById(this.state.id).then( res => {
            this.setState({task: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3 cardshadow3 mt-5">
                    <h3 className = "text-center mt-3 text-primary"> View  Tasks</h3>
                    <div className = "card-body">
                        <div className="row">
                                <div className="col-5">
                                <img src={this.state.task.img} className="profile-image-x ml-5" alt="dynamic" />
                                </div>
                                <div className="col-7">

                                        <div className = "row">
                                            <label>Task Name : </label>
                                            <div className='ml-2'> { this.state.task.taskName }</div>
                                        </div>
                                        <div className = "row">
                                            <label>Start Date: </label>
                                            <div className='ml-2'> { this.state.task.startDate }</div>
                                        </div>
                                        <div className = "row">
                                            <label>End Date : </label>
                                            <div className='ml-2'> { this.state.task.endDate }</div>
                                        </div>
                                        <div className = "row">
                                            <label>Responder : </label>
                                            <div className='ml-2'> { this.state.task.responder }</div>
                                        </div>
                                </div>
                        </div>
 
                    </div>
                    
                    <Link to='/task' className='btn btn-primary mt-2 mb-4'><BsFillArrowLeftCircleFill/> Back</Link>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
