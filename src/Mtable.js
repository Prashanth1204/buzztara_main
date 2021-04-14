import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import styled from 'styled-components'

const columns = [
  { id: 'status', label: 'Status', minWidth: 70 },
  { id: 'name', label: 'Device Name', minWidth: 140 },
  {
    id: 'deviceType',
    label: 'Devicetype',
    minWidth: 150,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'serial',
    label: 'Serial',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'deviceId',
    label: 'DeviceID',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'floor',
    label: 'Floor',
    minWidth: 80,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'space',
    label: 'Space',
    minWidth: 120,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'commissioned',
    label: 'Commissioned',
    minWidth: 80,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
];


const greenDot = styled.span`
    display: block;
    height: 60px;
    width: 60px;
    line-height: 60px;

    -moz-border-radius: 30px; /* or 50% */
    border-radius: 30px; /* or 50% */

    background-color: black;
    color: white;
    text-align: center;
    font-size: 20px;
`

function createData(status,name,deviceType,serial,deviceId,floor,space,commissioned) {
  if(status == "disconnected"){
      status = "🔴";
  }
  if(status == "warning"){
    status = "⚠️";
  }
  if(status == "connected"){
    status = "✔️";
  }
  if(commissioned == "true"){
    commissioned = "✔️";
  }
  if(commissioned == "false"){
      commissioned = "❗";
  }
  return { status,name,deviceType,serial,deviceId,floor,space,commissioned};
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function Mtable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const rows = 
      props.list.map(item=>(
        createData(`${item.status}`,`${item.name}`, `${item.deviceType}`, `${item.serial}`,`${item.deviceId}`,`${item.floor}`,`${item.space}`,`${item.commissioned}`)
      ))
  

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 15, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
