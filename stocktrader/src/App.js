import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppBar from './components/AppBar/AppBar'
import Mainpage from "./components/MainPage/Mainpage";


function App() {
  return (
    
      <Router>
        <AppBar />
          <Route exact path="/mainpage" component={Mainpage} />
      </Router>
    
  );
}

export default App;
