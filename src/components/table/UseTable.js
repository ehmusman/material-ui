import { IconButton, TableCell, TableRow } from '@material-ui/core'
import React, { useContext } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import EmployeeFormContext from '../../context/employeeFormContext'

export default function UseTable(props) {
    const { fullName, email, mobile, city, id } = props.value;
    const { deleteEmployee } = useContext(EmployeeFormContext)

    const removeEmployee = () => {
        deleteEmployee({
            type: 'DELETE_EMPLOYEE',
            payload: id
        })
    }

    return (

        <TableRow>
            <TableCell component="th" scope="row">{fullName}</TableCell>
            <TableCell align="right">{email}</TableCell>
            <TableCell align="right">{mobile}</TableCell>
            <TableCell align="right">{city}</TableCell>
            <TableCell align='right'>
                <IconButton color='secondary'
                    onClick={removeEmployee}
                >
                    <DeleteIcon fontSize="large" />
                </IconButton>
                <IconButton color='primary'>
                    <EditIcon fontSize="large" />
                </IconButton>
            </TableCell>
        </TableRow>

    )
}
