import React, {createContext,useState, useEffect} from 'react';
import Axios from 'axios';

export const MainpageAccountContext = createContext();


export const MainpageAccountProvider = (props) => {
    const [AccData, setAccData] = useState({
      "id": 8,
      "username": "Mr.T",
      "cash": 994836.52,
      "portfolio": [
        {
          "id": 884,
          "stock": {
            "id": 1,
            "name": "Apple",
            "symbol": "AAPL"
          },
          "purchasePrice": 122.94,
          "quantity": 42,
          "purchaseDate": "2020-12-04T08:14:09.748+00:00"
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
          "purchaseDate": "2020-12-04T08:14:00.968+00:00"
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
          "purchaseDate": "2020-12-04T08:14:00.968+00:00"
        },
        {
          "id": 12,
          "stock": {
            "id": 2,
            "name": "Tesla Inc.",
            "symbol": "TSLA"
          },
          "purchasePrice": 250.44,
          "quantity": 30,
          "purchaseDate": "2020-12-04T08:14:00.970+00:00"
        }
      ],
      "offers": [
        {
          "id": 14,
          "stock": {
            "id": 1,
            "name": "Apple",
            "symbol": "AAPL"
          },
          "price": 70.2,
          "quantity": 142,
          "offerType": "BUY",
          "offerDate": "2020-12-04T08:14:01.037+00:00"
        },
        {
          "id": 15,
          "stock": {
            "id": 2,
            "name": "Tesla Inc.",
            "symbol": "TSLA"
          },
          "price": 510.2,
          "quantity": 15,
          "offerType": "BUY",
          "offerDate": "2020-12-04T08:14:01.037+00:00"
        }
      ],
      "stockPerformanceList": [
        {
          "id": 919,
          "stock": {
            "id": 2,
            "name": "Tesla Inc.",
            "symbol": "TSLA"
          },
          "stockTotalAmount": 30,
          "averagePurchasePrice": 250.44,
          "totalPurchaseValue": 7513.2,
          "stockCurrentPrice": 593.38,
          "stockCurrentValue": 17801.4,
          "stockValueChange": 1.37
        },
        {
          "id": 920,
          "stock": {
            "id": 1,
            "name": "Apple",
            "symbol": "AAPL"
          },
          "stockTotalAmount": 342,
          "averagePurchasePrice": 158.57,
          "totalPurchaseValue": 54232.479999999996,
          "stockCurrentPrice": 122.94,
          "stockCurrentValue": 42045.48,
          "stockValueChange": -0.22
        }
      ],
      "portfolioPerformance": {
        "id": 9,
        "portfolioTotalValue": 1054683.4,
        "portfolioTotalStockValue": 59846.88,
        "percentageStockValue": 0.06,
        "percentageCashValue": 0.94
      }
    });
    

      return(
            <MainpageAccountContext.Provider value={[AccData, setAccData]} >
                {props.children}
            </MainpageAccountContext.Provider>
        );
  
} 