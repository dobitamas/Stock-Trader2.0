import React, { useContext, useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {MainpageAccountContext} from '../ProfileContexts/AccountProvider';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  table: {
    minWidth: 700,
  },
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

export default function OfferList() {
  const [AccData, setAccData] = useContext(MainpageAccountContext);
  const [Offers, setOffers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
      setOffers(AccData.offers);
  }, [])


  if(AccData === undefined) {
      return(<div>Loading...</div>)
  } else {
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Offers</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Stock name</StyledTableCell>
            <StyledTableCell align="right">Stock symbol</StyledTableCell>
            <StyledTableCell align="right">Offer type</StyledTableCell>
            <StyledTableCell align="right">Offer price</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Offer value</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Offers.map((offer) => (
            <StyledTableRow key={offer.id}>
              <StyledTableCell component="th" scope="row">
                {offer.stock.name}
              </StyledTableCell>
              <StyledTableCell align="right">{offer.stock.symbol}</StyledTableCell>
              <StyledTableCell align="right">{offer.offerType}</StyledTableCell>
              <StyledTableCell align="right">{`$ ${offer.price}`}</StyledTableCell>
              <StyledTableCell align="right">{offer.quantity}</StyledTableCell>
              <StyledTableCell align="right">{`$ ${offer.quantity * offer.price}`}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </AccordionDetails>
      </Accordion>
    </div>
  );
          }

}