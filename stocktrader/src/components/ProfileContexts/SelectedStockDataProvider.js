import React, {createContext,useState, useEffect, useContext} from 'react';
import {MainpageSelectedSymbolContext} from './SelectedSymbolProvider';
import Axios from 'axios';

export const MainpageSelectedStockDataContext = createContext([]);

export const MainpageSelectedStockDataProvider = (props) => {
    const [SelectedStockData, setSelectedStockData] = useState({});
    const [SelectedStockSymbol, setSelectedStockSymbol] = useContext(MainpageSelectedSymbolContext);
  
    useEffect(() =>{
        FetchStockData();
    },[SelectedStockSymbol]) 
  
    const FetchStockData = () =>{
      Axios.get(`http://localhost:8080/stock/getquote/${SelectedStockSymbol}`)
        .then(function (response) {
          console.log("SYMOL", SelectedStockSymbol);
          setSelectedStockData(response.data);
        })
      
    }
    
      return(
            <MainpageSelectedStockDataContext.Provider value={[SelectedStockData, setSelectedStockData]} >
                {props.children}
            </MainpageSelectedStockDataContext.Provider>
        );
  }