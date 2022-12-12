import React, {Component} from "react"
import EmployeeService from '../service/EmployeeService'

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        // the fields inside our state allows react to make the connection to the values
        // within our form
        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }

        // .bind() is a built in react function that passes data as an argument to a another function
        // as long as its a class component
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this)
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this)
        this.updateEmployee = this.updateEmployee.bind(this)
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({
                firstName: employee.firstName, 
                lastName: employee.lastName,
                emailId: employee.emailId,
            })
        } );
    }

    updateEmployee = (e) => {
        e.preventDefault()
        
        let employee = {firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId}
            console.log("employee => " + JSON.stringify(employee))
        
        EmployeeService.createEmployee(employee).then(res => {
            window.location.reload(false)
             alert("Employee Updated in Database")
        })
        
    }

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value })
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value })
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value })
    }

    cancel(){
        this.props.history.push("/employees")
    }
    

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3'>
                            <h3 className='text-center'> Add Employee </h3>
                                <div className='card-body'>
                                    <form>
                                        <div className='form-group'>
                                            <label> First Name </label>
                                            <input placeholder="First Name" 
                                            name="firstname" 
                                            className="form-control" 
                                            // below will allow us to run this eventhandler and 
                                            // save the value which will be saved to our DB
                                            value={this.state.firstName} 
                                            onChange={this.changeFirstNameHandler} />
                                        </div>
                                        <div className='form-group'>
                                            <label> Last Name </label>
                                            <input placeholder="Last Name" 
                                            name="lastname" 
                                            className="form-control" 
                                            value={this.state.lastName} 
                                            onChange={this.changeLastNameHandler} />
                                        </div>
                                        <div className='form-group'>
                                            <label> Email Address </label>
                                            <input placeholder="Email Address" 
                                            name="emailId" 
                                            className="form-control" 
                                            value={this.state.emailId} 
                                            onChange={this.changeEmailHandler} />
                                        </div>

                                        <button className='btn btn-success' onClick={this.updateEmployee} >Save</button>
                                        
                                        <button className='btn btn-danger'  onClick={this.cancel.bind(this)}>Cancel</button>
                                        
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