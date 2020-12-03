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


const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  }, 
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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
    height: 650,
  },
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
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <PieChart series={[AccData.portfolioPerformance.percentageStockValue, AccData.portfolioPerformance.percentageCashValue]} />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <StockInfo Performance={AccData.portfolioPerformance} />
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













