import React,{useState, useEffect, useContext} from 'react';
import ReactApexChart from "react-apexcharts";
import dayjs from "dayjs";
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {MainpageAccountContext} from '../ProfileContexts/AccountProvider';
import {MainpageSymbolsContext} from '../ProfileContexts/SymbolsProvider';
import {MainpageSelectedSymbolContext} from '../ProfileContexts/SelectedSymbolProvider';
import {MainpageSelectedStockDataContext} from '../ProfileContexts/SelectedStockDataProvider';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  root: {
    width: 700,
    alignContent: "center"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  container: {
    maxWidth: "70%",
    marginLeft:"15%",
    marginRight:"15%",
  },
  btnGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}));


function CandleChart() {
    const [AccData, setAccData] = useContext(MainpageAccountContext);
    const [Symbols, setSymbols] = useContext(MainpageSymbolsContext);
    const [SelectedStockSymbol, setSelectedStokSymbol] = useContext(MainpageSelectedSymbolContext);
    const [SelectedStockData, setSelectedStockData] = useContext(MainpageSelectedStockDataContext);
    
    const classes = useStyles(); 

    useEffect(() => {
      console.log("CANDLE CHART IS LOADED");
      console.log(Symbols);
      const resp = Axios.get(`http://localhost:8080/stock/getcandle/${SelectedStockSymbol}/5`);
      setSelectedStockData(resp.reactCandleDataList);
    },[SelectedStockSymbol]);

    const handleChangeInInterval = (event) =>{
      console.log(event.target.ariaValueNow);
 
    }

    const handleStockChange = (event) =>{
      console.log(event.target.innerText);
    }

    const series = [{
        name: 'candle',
        data: SelectedStockData? SelectedStockData : 0
      }];

      const options = {
        chart: {
          height: 350,
          type: 'candlestick',
        },
        title: {
          text: `Candle chart of: ${"SelectedStockSymbol"}`,
          align: 'center'
        },
        annotations: {
          xaxis: [
            {
              x: 'Oct 06 14:00',
              borderColor: '#00E396',
              label: {
                borderColor: '#00E396',
                style: {
                  fontSize: '12px',
                  color: '#fff',
                  background: '#00E396'
                },
                orientation: 'horizontal',
                offsetY: 7,
                text: 'Annotation Test'
              }
            }
          ]
        },
        tooltip: {
          enabled: true,
        },
        xaxis: {
          type: 'category',
          labels: {
            formatter: function(val) {
              return dayjs(val).format('MMM DD HH:mm')
            }
          }
        },
        yaxis: {
          tooltip: {
            enabled: true
            }
        }
    };

    function valuetext(value) {
      return `${value}`;
    }

    return(
      <div>
        <div className={classes.container}>
            <ReactApexChart options={options} series={series} type="candlestick" height={350} />
        </div>
        <div className={classes.root}>
            <Typography id="discrete-slider" gutterBottom>
              Fetch interval
            </Typography>
            <Slider
              key={1}
              defaultValue={0} //Here comes Fetch interval
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={100000}
              marks
              min={100000}
              max={600000}
              onChange={handleChangeInInterval} //Disabled due to refactor
      />
        </div> 
        <div className={classes.btnGroup}>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          {/* Symbols.map(SYMBOL =>{
            return(<Button onClick={handleStockChange}>{SYMBOL}</Button>)
          }) */}
          <Button  onClick={handleStockChange}>GOOGL</Button>
          <Button  onClick={handleStockChange}>FB</Button>
        </ButtonGroup>
        </div>
      </div>
    )
};

export default CandleChart; 