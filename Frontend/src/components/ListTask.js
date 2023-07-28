import React, { Component } from 'react'
import TaskService from '../services/TaskService';
import { BsFillTrashFill,BsPencilFill,BsFillEyeFill,BsFillPlusCircleFill } from "react-icons/bs";
import PersistentDrawerLeft from './Drawer';

class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
                tasks: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
       TaskService.deleteEmployee(id).then( res => {
            this.setState({tasks: this.state.tasks.filter(task => task.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view/${id}`);

    }
    editEmployee(id){
        this.props.history.push(`/edit/${id}`);
    }

    componentDidMount(){
       TaskService.getTasks().then((res) => {
            this.setState({ tasks: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add/_add');
    }

    render() {
        return (
            <div>
                <PersistentDrawerLeft/>
                 <div className = "row mt-4">
                    <button className="btn btn-primary pt-2 pb-2 float-right" onClick={this.addEmployee}><BsFillPlusCircleFill/>  Add </button>
                 </div>
                 <br></br>
                 <div className = "card p-5 row cardshadow3">
                        <table className = "table table-bordered">

                            <thead>
                                <tr>
                                    <th className='text-center'> Tasks</th>
                                    <th className='text-center'> Task Name</th>
                                    <th className='text-center'> Start Date</th>
                                    <th className='text-center'> End Date</th>
                                    <th className='text-center'> Responder</th>
                                    <th className='text-center'> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        task => 
                                        <tr key = {task.id}>
                                             <td className='text-center'><img src={task.img} className="profile-image" alt="dynamic" /></td>
                                             <td> {task.taskName} </td>   
                                             <td> {task.startDate}</td>
                                             <td> {task.endDate}</td>
                                             <td> {task.responder}</td>
                                             <td className='text-center'>
                                                 <button onClick={ () => this.viewEmployee(task.id)} className="btn-hover btn-hover-x color-1"><BsFillEyeFill/></button>
                                                 <button onClick={ () => this.editEmployee(task.id)} className="ml-2 btn-hover btn-hover-x color-7"><BsPencilFill/></button>
                                                 <button onClick={ () => this.deleteEmployee(task.id)} className="ml-2 btn-hover btn-hover-x color-11"><BsFillTrashFill/> </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListEmployeeComponent
