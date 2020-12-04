import React,{useContext, useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CandleChart from '../Charts/CandleChart';
import Box from '@material-ui/core/Box';
import DetailedStockInfo from '../Info/DetailedStockInfo';
import Copyright from '../Copyright';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {MainpageAccountContext} from '../ProfileContexts/AccountProvider';



const useStyles = makeStyles((theme) => ({

  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    maxWidth: "90%",
    paddingLeft: "10%"
  },
  paperChart: {
    padding: theme.spacing(2),
    justifyContent: "center",
    overflow: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    overflow: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  fixedHeight: {
    height: "100%",
  },
  pieChart: {
    maxWidth: "80%"
  },
  tables: {
    minWidth: "100%",
    marginLeft: "auto",
    marginRight: "auto"
  }
}));

export default function DetailedStockPage() {
  const classes = useStyles();
  const [AccData, setAccData] = useContext(MainpageAccountContext);
  const [StockData, setStockData] = useState({
    "id": 877,
    "stock": {
      "id": 1,
      "name": "Apple",
      "symbol": "AAPL"
    },
    "currentPrice": 122.94,
    "openPrice": 123.52,
    "highPrice": 123.78,
    "lowPrice": 122.21,
    "previousClosePrice": 123.08,
    "timeOfRetrieval": "2020-12-04T09:23:05.893+00:00"
  });
  
  
  useEffect(() => {
    console.log("ACCDATA: ", AccData)
  }, []);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const chartPaper = clsx(classes.paperChart, classes.fixedHeight);

  
  if (AccData.portfolioPerformance === undefined){
    return(
      <h1>loading data...</h1>
    )
  } else {
    console.log("ACCDATA: ", AccData);
    return(
      <div>
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <h1 style = {{textAlign: "center"}}>PORTFOLIO SUMMARY</h1>
        <Container className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9} className={classes.pieChart}>
              <Paper className={chartPaper}>
                <CandleChart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3} >
              <Paper className={fixedHeightPaper}>
                <DetailedStockInfo StockData={StockData} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
          <Box pt={4}>
            <Copyright text={"Stock Trader"}/>
          </Box>
        </main>
      </div>
    )
  }
}













