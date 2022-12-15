import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res)=>{
            this.setState({employee: res.data})
        })
    }

    render() {
        return(
            <div>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'>View Employee Details</h3>

                    <div className='card-body text-center'>
                        <div className='row'>
                            <label><strong>Employee First Name</strong></label>
                            <div>
                                {this.state.employee.firstName}
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <label><strong>Employee Last Name</strong></label>
                            <div>
                                {this.state.employee.lastName}
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <label><strong>Employee Email</strong></label>
                            <div>
                                {this.state.employee.emailId}
                            </div>
                        </div>
                        <br />
                        <br />
                        <h6 className='text-center'>**Here you would view ALL details for the selected Employee**</h6>
                        <h6 className='text-center'>If we were to add more fields didnt want to show on the main page</h6>
                        <h6 className='text-center'>This is where you would view it</h6>
                        <h6 className='text-center'>Eg: Phone#, Salary, Physical Address, etc...**</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent