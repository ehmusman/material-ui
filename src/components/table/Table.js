import { TableContainer, Table as MuiTable, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import React, { useContext } from 'react'
import EmployeeFormContext from '../../context/employeeFormContext'
import UseTable from './UseTable'


export default function Table() {
    const values = useContext(EmployeeFormContext)
    console.log(values.initialValues)
    return (
        <>
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
                        {values.initialValues.map(value => (
                            <UseTable
                                key={value.id}
                                value={value}
                            />
                        ))}
                    </TableBody>
                </MuiTable>
            </TableContainer>

        </>
    )
}
