import { TableContainer, Table as MuiTable, TableHead, TableRow, TableCell, TableBody, Paper, TablePagination } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import EmployeeFormContext from '../../context/employeeFormContext'
import UseTable from './UseTable'


export default function Table() {
    const values = useContext(EmployeeFormContext)
    const pages = [5, 10, 15]
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page]);

    const valuesAfterPagingAndSorting = () => {
        return values.initialValues.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };
    return (
        <Paper>
            <TableContainer>
                <MuiTable>
                    <TableHead>
                        <TableRow>
                            <TableCell>Employee Name</TableCell>
                            <TableCell align="right">Email Address</TableCell>
                            <TableCell align="right">Mobile Number</TableCell>
                            <TableCell align="right">Department</TableCell>
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
                count={values.initialValues.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    )
}
