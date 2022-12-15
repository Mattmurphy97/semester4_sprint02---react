import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // this has all the employee objects in an array
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this)
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) =>{
            this.setState({employees: res.data})
        })
    }
    
    // react-router maintains the url history object, and basically by "pushing" the specified url
    // it is added to your default "/" route. So when this even is executed from onClick it redirects
    // the user.
    addEmployee(){
        this.props.history.push('/add-employee');
    }

    // this function is triggered when the update button is selected, the {id} is specified in the routes with :
    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);
    }

    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`)
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployeeInfo(id).then((res)=>{
            alert("Employee Removed From Database")
            window.location.reload(true)
        })
    }



    render() {
        return (
            <div>
                <h2 className='text-center'> EMPLOYEE LIST</h2>

                <div className='row'>
                    <button className='btn btn-secondary' onClick={this.addEmployee}>Add Employee</button>
                    
                </div>
                <br />

                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email Id</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key = {employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <button onClick = { ()=> this.viewEmployee(employee.id)} 
                                            className="btn btn-success">View</button>
                                            <span>   </span>
                                            <button onClick = { ()=> this.editEmployee(employee.id)} 
                                            className="btn btn-success">Update</button>
                                            <span>   </span>

                                            <button onClick = { ()=> this.deleteEmployee(employee.id)} 
                                            className="btn btn-danger">Delete</button>
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
