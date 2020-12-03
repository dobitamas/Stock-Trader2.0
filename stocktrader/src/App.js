import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppBar from './components/AppBar/AppBar'
import Mainpage from "./components/MainPage/Mainpage";
import StockListPage from "./components/StockListPage/StockListPage";

function App() {
  return (
    <Router>
    <AppBar />
      <Route exact path="/mainpage" component={Mainpage} />
      <Route exact path="/stocklist" component={StockListPage} />
    </Router>
  );
}

export default App;
