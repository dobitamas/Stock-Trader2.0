import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppBar from './components/AppBar/AppBar'
import Mainpage from "./components/MainPage/Mainpage";
import DetailedStockPage from './components/DetailedStockPage/DetailedStockPage';

function App() {
  return (
    
      <Router>
        <AppBar />
          <Route exact path="/mainpage" component={Mainpage} />
          <Route exact path="/detailedstock" component={DetailedStockPage} />
      </Router>
    
  );
}

export default App;
