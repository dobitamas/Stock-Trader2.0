import React, {createContext,useState} from 'react';

export const MainpageAccountContext = createContext([]);


export const MainpageAccountProvider = (props) => {
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
            <MainpageAccountContext.Provider value={[AccData, setAccData]} >
                {props.children}
            </MainpageAccountContext.Provider>
        );
}