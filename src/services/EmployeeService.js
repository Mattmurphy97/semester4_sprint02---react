import axios from "axios";


const EMPLOYEE_DB_URL = "http://localhost:8080/employees";



class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_DB_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_DB_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_DB_URL + "/" + employeeId)
    }

    updateEmployeeInfo(employee, employeeId){
        return axios.put(EMPLOYEE_DB_URL + "/" + employeeId, employee)
    }

    deleteEmployeeInfo(employeeId){
        return axios.delete(EMPLOYEE_DB_URL + "/" + employeeId)
    }
}

export default new EmployeeService()