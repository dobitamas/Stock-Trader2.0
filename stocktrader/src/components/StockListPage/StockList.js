import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import StockCard from '../StockCard/StockCard';



export default function StockList(props) {



  

  return (
    <div>
      <StockCard Symbol={props.Symbols[0]} />
    </div>
  );
}