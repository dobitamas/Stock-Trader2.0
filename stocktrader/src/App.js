import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard'
import Mainpage from "./components/MainPage/Mainpage";

function App() {
  return (
    <Router>
    <Dashboard />
      <Route exact path="/dashboard" component={Mainpage} />
    </Router>
  );
}

export default App;
