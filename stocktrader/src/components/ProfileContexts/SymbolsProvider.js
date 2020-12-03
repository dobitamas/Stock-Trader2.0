import React, {createContext,useState, useEffect} from 'react';
import Axios from 'axios';

export const MainpageSymbolsContext = createContext([]);

export const MainpageSymbolsProvider = (props) => {
    const [Symbols, setSymbols] = useState();
  
    useEffect(() =>{
      Axios.get(`http://localhost:8080/user/getuseraccount`)
        .then(resp => scalpSymbols(resp.data));

    },[]);
  
    function scalpSymbols(AccData) {
      let myStocks = [];
  
      AccData.portfolio.forEach(element => {
        myStocks.push(element.symbol);
      });
      const uniqueArray = Array.from(new Set(myStocks));
      setSymbols(uniqueArray);
  }
    
      return(
            <MainpageSymbolsContext.Provider value={[Symbols, setSymbols]} >
                {props.children}
            </MainpageSymbolsContext.Provider>
        );
  }