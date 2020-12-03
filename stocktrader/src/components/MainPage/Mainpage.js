import React,{useContext, useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PieChart from '../Charts/PieChart';
import Box from '@material-ui/core/Box';
import StockInfo from '../StockInfo/StockInfo';
import Copyright from '../Copyright';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {MainpageAccountContext} from '../ProfileContexts/AccountProvider';
import OfferList from '../Offers/Offers';
import MyStocks from '../MyStocks/MyStocks';


const useStyles = makeStyles((theme) => ({

  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    maxWidth: "90%",
    paddingLeft: "10%"
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: "center",
    overflow: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
  },
  fixedHeight: {
    height: "100%",
  },
  pieChart: {
    maxWidth: "50%"
  },
  tables: {
    minWidth: "100%",
    marginLeft: "auto",
    marginRight: "auto"
  }
}));

export default function Mainpage() {
  const classes = useStyles();
  const [AccData, setAccData] = useContext(MainpageAccountContext);
  
  useEffect(() => {
    console.log("ACCDATA: ", AccData)
  }, []);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  
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
              <Paper className={fixedHeightPaper}>
                <PieChart series={[AccData.portfolioPerformance.percentageStockValue, AccData.portfolioPerformance.percentageCashValue]} />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3} >
              <Paper className={fixedHeightPaper}>
                <StockInfo Performance={AccData.portfolioPerformance} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <StockInfo Performance={AccData.portfolioPerformance} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9} className={classes.tables}>
              <Paper>
                <OfferList />
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={9} className={classes.tables}>
              <Paper>
                <MyStocks />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright text={"Stock Trader"}/>
          </Box>
        </Container>
        </main>
      </div>
    )
  }
}













