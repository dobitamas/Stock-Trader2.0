import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard'
import Mainpage from "./components/MainPage/Mainpage";
import  FullProvider from './components/ProfileContexts/FullProvider';
import CandleChart from "./components/CandleChart/CandleChart";
import { MainpageSymbolsContext } from "./components/ProfileContexts/SymbolsProvider";

function App() {
  return (
    <Router>
    <Dashboard />
    <MainpageSymbolsContext.Provider>
      <Route exact path="/dashboard" component={Mainpage} />
    </MainpageSymbolsContext.Provider>
    </Router>
  );
}

export default App;
