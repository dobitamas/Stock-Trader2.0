import React,{useContext, useEffect, useState} from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { useContainedCardHeaderStyles } from '@mui-treasury/styles/cardHeader/contained';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';



const useStyles = makeStyles(({ spacing }) => ({
  card: {
    marginTop: 40,
    borderRadius: spacing(0.5),
    transition: '0.3s',
    width: '90%',
    overflow: 'initial',
    background: '#ffffff',
  },
  content: {
    paddingTop: 0,
    textAlign: 'left',
    overflowX: 'auto',
    '& table': {
      marginBottom: 0,
    }
  },
}));


export default function DetailedStockInfo(props) {
    const classes = useStyles();
    const cardHeaderStyles = useContainedCardHeaderStyles();
    const cardShadowStyles = useSoftRiseShadowStyles({ inactive: true });
    const cardHeaderShadowStyles = useFadedShadowStyles();
    const [Rows, setRows] = useState([]);

    useEffect(() => {
      console.log(props);
        const rows = [
          {id: 0,  type: "Stock name: ", value: `${props.StockData.stock.name}`},
          {id: 1,  type: "Current price: ", value: `$ ${props.StockData.currentPrice}` },
          {id: 2,  type: "Open price: ", value: `$ ${props.StockData.openPrice}` },
          {id: 3,  type: "High price: ", value: `$ ${props.StockData.highPrice}` },
          {id: 4,  type: "Low price: ", value: `$ ${props.StockData.lowPrice}` },
          {id: 5,  type: "Prev close price: ", value: `$ ${props.StockData.perviousClosePrice}` },
        ];
        setRows(rows);
    }, [])


  return (
    <Card className={cx(classes.card, cardShadowStyles.root)}>
      <CardHeader
        className={cardHeaderShadowStyles.root}
        classes={cardHeaderStyles}
        title={"Detailed stock info"}
        subheader={`Detailed view of ${props.StockData.stock.symbol}`}
      />
      <CardContent className={classes.content}>
        <Table>
          <TableHead>
          </TableHead>
          <TableBody>
            {Rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.type}
                </TableCell>
                <TableCell align="right">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
