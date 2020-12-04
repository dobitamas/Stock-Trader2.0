import React, {createContext,useState, useEffect, useContext} from 'react';
import Axios from 'axios';


export const MainpageContext = createContext();


export const MainpageAccountProvider = (props) => {
  /*  
  const [AccData, setAccData] = useState(
        {
        "id": 8,
        "username": "Mr.T",
        "cash": 994836.94,
        "portfolio": [
          {
            "id": 20,
            "stock": {
              "id": 1,
              "name": "Apple",
              "symbol": "AAPL"
            },
            "purchasePrice": 122.93,
            "quantity": 42,
            "purchaseDate": "2020-12-01T17:50:29.232+00:00"
          },
          {
            "id": 11,
            "stock": {
              "id": 1,
              "name": "Apple",
              "symbol": "AAPL"
            },
            "purchasePrice": 170.23,
            "quantity": 200,
            "purchaseDate": "2020-12-01T17:50:28.531+00:00"
          },
          {
            "id": 10,
            "stock": {
              "id": 1,
              "name": "Apple",
              "symbol": "AAPL"
            },
            "purchasePrice": 150.23,
            "quantity": 100,
            "purchaseDate": "2020-12-01T17:50:28.449+00:00"
          }
        ],
        "offers": [
          
        ],
        "stockPerformanceList": [
          {
            "id": 103,
            "stock": {
              "id": 1,
              "name": "Apple",
              "symbol": "AAPL"
            },
            "stockTotalAmount": 342,
            "averagePurchasePrice": 158.57,
            "totalPurchaseValue": 54232.06,
            "stockCurrentPrice": 122.93,
            "stockCurrentValue": 42042.06,
            "stockValueChange": -0.22
          }
        ],
        "portfolioPerformance": {
          "id": 9,
          "portfolioTotalValue": 1036879.0,
          "portfolioTotalStockValue": 42042.06,
          "percentageStockValue": 0.04,
          "percentageCashValue": 0.96
        }
      });
    
      return(
            <MainpageContext.Provider value={[AccData, setAccData]} >
                {props.children}
            </MainpageContext.Provider>
        );
        */
}

export const MainpageSymbolProvider = (props) => {
  const [Symbols, setSymbols] = useState();
  const [AccData, setAccData] = useContext(MainpageContext);

  useEffect(() =>{
    console.log("USEEFFECT RUNS");
      scalpSymbols(AccData);
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
          <MainpageContext.Provider value={[Symbols, setSymbols]} >
              {props.children}
          </MainpageContext.Provider>
      );
}

export const MainpageSelectedSymbolProvider = (props) => {
  const [SelectedStockSymbol, setSelectedStockSymbol] = useState("AAPL");
  
    
  
  
    return(
          <MainpageContext.Provider value={[SelectedStockSymbol, setSelectedStockSymbol]} >
              {props.children}
          </MainpageContext.Provider>
      );
}

export const MainpageSelectedStockDataProvider = (props) => {
  const [SelectedStockData, setSelectedStockData] = useState({});
  const [SelectedStockSymbol, setSelectedStockSymbol] = useContext(MainpageContext);

  useEffect(() =>{
      FetchStockData();
  },[SelectedStockSymbol]) 

  const FetchStockData = () =>{
    Axios.get(`http://localhost:8080/stock/getquote/${SelectedStockSymbol}`)
      .then(function (response) {
        setSelectedStockData(response.data);
      })
    
  }
  
    return(
          <MainpageContext.Provider value={[SelectedStockData, setSelectedStockData]} >
              {props.children}
          </MainpageContext.Provider>
      );
}