import React, {Component} from "react";
import EmployeeService from "../services/EmployeeService";

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: "",
            lastName: "",
            emailId: "",
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this)
    }

    changeFirstNameHandler= (event) => {
        this.setState( {firstName: event.target.value} )
    }

    changeLastNameHandler= (event) => {
        this.setState( {lastName: event.target.value} )
    }

    changeEmailIdHandler= (event) => {
        this.setState( {emailId: event.target.value} )
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res)=> {
            let employee = res.data;
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                emailId: employee.emailId
            })
        })
    }

    updateEmployee = (x) => {
        x.preventDefault();
        let employee = {
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            emailId: this.state.emailId
        }
        EmployeeService.updateEmployeeInfo(employee, this.state.id).then((res)=> {
            console.log("Employee Object:  " + JSON.stringify(employee))
            alert("Employee Update in Database")
            this.props.history.push('/employees')
        })

    }

    cancel(){
        this.props.history.push('/employees')
    }

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md3">
                            <h3 className="text-center">Add New Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name  </label>
                                        <input placeholder="First Name" 
                                        name="firstName" 
                                        className="form-control"
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Last Name  </label>
                                        <input placeholder="Last Name" 
                                        name="lastName" 
                                        className="form-control"
                                        value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input placeholder="Email Address" 
                                        name="emailId" 
                                        className="form-control"
                                        value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent