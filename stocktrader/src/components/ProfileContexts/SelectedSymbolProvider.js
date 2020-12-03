import React, {createContext,useState} from 'react';

export const MainpageSelectedSymbolContext = createContext([]);

export const MainpageSelectedSymbolProvider = (props) => {
    const [SelectedStockSymbol, setSelectedStockSymbol] = useState("AAPL");
    
      
    
    
      return(
            <MainpageSelectedSymbolContext.Provider value={[SelectedStockSymbol, setSelectedStockSymbol]} >
                {props.children}
            </MainpageSelectedSymbolContext.Provider>
        );
  }