import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom" 
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeConponent';

function App() {
  return (
    <div>
      <Router>
      
        <nav className='nav-container'>
        <HeaderComponent />
          <h1 className='text-center'>Employee List</h1>
          
          <div id='button-container'>
            <Link to="/add-employee"><button className='btn btn-primary' id='button-props'>Add Employee</button></Link>
            {/* <Link to="/update-employee"><button className='btn btn-primary' id='button-props'>Update Employee</button></Link> */}
          </div>
        </nav>
        
          
            <div className="container">
              <Routes>
                <Route path = '/' element = { <ListEmployeeComponent /> }> </Route>
                <Route path = '/employees' element = { <ListEmployeeComponent /> }> </Route>
                <Route path = '/add-employee' element = { <CreateEmployeeComponent /> }> </Route>
                {/* <Route path = '/update-employee/:id' element = { <UpdateEmployeeComponent /> }> </Route> */}
              </Routes>
            </div>
          <FooterComponent/> 

      </Router>      
    </div>

  );
}

export default App;