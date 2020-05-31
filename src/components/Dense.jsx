import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  table: {
    maxWidth: "620px",
    background: "#393939",
    margin: "30px 0",
    // padding: "4px 3%",
  },
  tableHead: {
    background: "#474747"
  },
  tableText: {
    color: "white",
    fontSize: "1rem",
  }
});

function createData(name, rewards) {
  return { name, rewards};
}

const rows = [
  createData('1st', "Heavy Blade, Spot Weakness, Limit Break"),
  createData('2nd', "Omamori, Prayer Wheel, Shovel"),
  createData('3rd', "Wild Strike, Evolve, Immolate"),
  createData('4th', "Havoc, Sentinel, Exhume"),
  createData('5th', "Blue, Candle, Dead Branch, Singin Bowl"),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.tableText}>Unlock Number</TableCell>
            <TableCell align="left" className={classes.tableText}>Prizes Unlocked</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" className={classes.tableText}> 
                {row.name}
              </TableCell>
              <TableCell align="left" className={classes.tableText}>{row.rewards}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
}