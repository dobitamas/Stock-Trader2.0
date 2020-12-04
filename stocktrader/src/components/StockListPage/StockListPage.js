import React,{useContext, useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Copyright from '../Copyright';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import StockCard from '../StockCard/StockCard';


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
  
  const chunk = (arr, chunkSize = 1, cache = []) => {
    const tmp = [...arr]
    if (chunkSize <= 0) return cache
    while (tmp.length) cache.push(tmp.splice(0, chunkSize))
    return cache
  }

export default function StockListPage(){
    const classes = useStyles();
    const [Symbols, setSymbols] = useState(["AAPL", "TSLA", "FB", "GOOG", "NVDA", "ZM", "BAC"]);
    const [SymbolChunks, setSymbolChunks] = chunk(Symbols, 3);

  
    
  
    

      return(
        <div>
          <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <h1 style = {{textAlign: "center"}}>PORTFOLIO SUMMARY</h1>
          <Container maxWidth="lg" className={classes.container}>
        <Paper>
          {const rows = SymbolChunks.map((symbolChunk, index) => {
            const symbolCols = SymbolChunks.map((symbol, index) => {
              return(
                <Grid item xs={4}>
                  <StockCard Symbol={symbol} />
                </Grid>
              )
            })
          })}
        </Paper>
        <Box pt={4}>
            <Copyright text={"Stock Trader"}/>
        </Box>
        </Container>
        </main>
      </div>
    )
}
