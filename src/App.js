import './App.css';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './Components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent /> 
        <div className='container'>
          
          <div className = "container">
          
            <Switch>
              <Route path="/" exact component={ListEmployeeComponent}></Route>
              <Route path="/employees" component={ListEmployeeComponent}></Route>
              <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
              <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route>
              <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>
            </Switch>
          
          </div>
        </div>
        <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
