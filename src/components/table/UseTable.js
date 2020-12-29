import { IconButton, TableCell, TableRow } from '@material-ui/core'
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default function UseTable(props) {
    const { fullName, email, mobile, city } = props.value

    return (

        <TableRow>
            <TableCell component="th" scope="row">{fullName}</TableCell>
            <TableCell align="right">{email}</TableCell>
            <TableCell align="right">{mobile}</TableCell>
            <TableCell align="right">{city}</TableCell>
            <TableCell align='right'>
                <IconButton color='secondary'>
                    <DeleteIcon fontSize="large" />
                </IconButton>
                <IconButton color='primary'>
                    <EditIcon fontSize="large" />
                </IconButton>
            </TableCell>
        </TableRow>

    )
}
