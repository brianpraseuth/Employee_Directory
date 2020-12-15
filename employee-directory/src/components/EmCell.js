import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    avatar: {
      height: "100px",
    },
    table: {
        minWidth: 650,
      },
  });

export default function EmCell(props) {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table}>
        <TableBody>
            <TableRow key={props.id}>
              <TableCell align="right"><img className={classes.avatar} src={props.image}></img></TableCell>
              <TableCell align="right">{props.name}</TableCell>
              <TableCell align="right">{props.phone}</TableCell>
              <TableCell align="right">{props.email}</TableCell>
              <TableCell align="right">{props.dob}</TableCell>
            </TableRow>
            </TableBody>
            </Table>
            </TableContainer>
    )
}
