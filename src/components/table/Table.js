import { TableContainer, Table as MuiTable, TableHead, TableRow, TableCell, TableBody, Paper, TablePagination, Grid, TextField, makeStyles } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import EmployeeFormContext from '../../context/employeeFormContext'
import Control from '../controls/Control'
import UseTable from './UseTable'


const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}));
export default function Table() {
    const [search, setSearch] = useState('')
    const { initialValues, setPopupTrue } = useContext(EmployeeFormContext)
    const pages = [5, 10, 15]
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page]);

    const onChange = (e) => {
        setSearch(e.target.value)
    }
    const valuesAfterPagingAndSorting = () => {
        return (search ? (initialValues.filter(employee => employee.fullName.toLowerCase().includes(search))) : (initialValues)).slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    }
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };
    const classes = useStyle()

    const SetPopupTrue = () => {
        setPopupTrue({
            type: 'POPUP_TRUE'
        })
    }

    return (
        <Paper>
            <Grid container className={classes.root}>
                <Grid item xs={8}>
                    <TextField
                        value={search}
                        variant='outlined'
                        onChange={onChange}
                        label="Search Here"
                    />
                </Grid>
                <Grid item xs={4}>
                    <Control.Button
                        text='Add Employee'
                        onClick={SetPopupTrue}
                    />
                </Grid>
            </Grid>
            <TableContainer>
                <MuiTable>
                    <TableHead>
                        <TableRow>
                            <TableCell>Employee Name</TableCell>
                            <TableCell align="right">Email Address</TableCell>
                            <TableCell align="right">Mobile Number</TableCell>
                            <TableCell align="right">City</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {valuesAfterPagingAndSorting().map(value => (
                            <UseTable
                                key={value.id}
                                value={value}
                            />
                        ))}
                    </TableBody>
                </MuiTable>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={pages}
                component="div"
                count={initialValues.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    )
}
