import React, {useEffect, useState} from 'react';
import {makeStyles, Paper, TableRow} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import {getTransactions} from "./api";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getTransactions().then(res => res).then(data => setData(data));
  },[data, setData]);
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton:{
      marginRight: theme.spacing(2),
    },
    title:{
      flexGrow: 1,
    },
    tableRoot: {
      width: '80%',
      overflow: 'auto',
    },
    table: {
      minWidth: 650,
    }
  }));
  const classes = useStyles();
  return (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant={"h6"} className={classes.title}>Лабораторная работа №4</Typography>
      </Toolbar>
    </AppBar>
    <Paper className={classes.tableRoot}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Счет отправителя</TableCell>
            <TableCell>Счет получателя</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { data.length && data.map(row =>  <TableRow>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.account_from}</TableCell>
            <TableCell>{row.account_to}</TableCell>
          </TableRow>)}
        </TableBody>
      </Table>
    </Paper>
  </div>
  );
}

export default App;
