import Axios from 'axios';
import React,{useState, useEffect} from 'react';
import {CryptoCard} from "react-ui-flex-cards";



function StockCard(props) {
  const [StockData, setStockData] = useState({});
  const [TrendDirection, setTrendDirection] = useState(0);
  const [Trend, setTrend] = useState(0);
  

  const FetchData = () =>{
    Axios.get(`http://localhost:8080/stock/getquote/${props.Symbol}`)
        .then(resp => setStockData(resp.data))
        .then(response => console.log("RESP: ", response.data));
  }

  const calculateTrendDirection = () => {
    if(StockData.currentPrice >  StockData.previousClosePrice){
      setTrendDirection(1);
    } else if (StockData.currentPrice <  StockData.previousClosePrice){
      setTrendDirection(-1);
    } else {
      setTrendDirection(0);
    }
  }

  const calculateTrend = () => {
    var result =  100 * Math.abs( ( StockData.previousClosePrice - StockData.currentPrice ) / ( (StockData.previousClosePrice + StockData.currentPrice)/2 ) );

    setTrend(result.toFixed(2));
  }


  useEffect(() => {
    FetchData();


  },[]);

  useEffect(()=>{
    if(StockData.stock){
      console.log("Trends calculated", StockData.name);
      calculateTrend();
      calculateTrendDirection();
    }
    
  },[StockData])
  
    return(
        <div style={{background: "rgba(63,76,107,0.35)"}}>
        <CryptoCard
          style={{background: "rgba(63,76,107,0.35)"}}
          currencyName={StockData.stock? StockData.stock.name : "Name"}
          currencyPrice={StockData.stock? `$ ${StockData.currentPrice}` : 0}
          icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2000px-Bitcoin.svg.png"/>}
          currencyShortName={StockData.stock? StockData.stock.symbol : "Symbol"}
          trend={StockData.stock? `${Trend} %` : 0}
          trendDirection={StockData.stock? TrendDirection : 0} 
          chartData={[9200, 5720, 8100, 6734, 7054, 7832, 6421, 7383, 8697, 8850]}
        />
        </div>
    )
}


export default StockCard;