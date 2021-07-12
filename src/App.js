import Header from './components/Header';
import Footer from './components/Footer';
import Clock from './components/Clock';
import React from 'react';
import AddEmployee from './components/AddEmployee';
import EmployeesList from './components/EmployeesList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {



  
  return (
    <>
    <Router>

    <Header name="TimeSheet"/>

    <Switch>
      <Route exact path="/">
        <AddEmployee/>
        <EmployeesList/>
      </Route>
    </Switch>
    
    <Switch>
      <Route exact path="/clock">
        <Clock/> 
      </Route>
    </Switch>

    <Footer/>

    </Router>
    </>
  );
}

export default App;
