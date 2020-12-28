import { TableCell, TableRow } from '@material-ui/core'
import React from 'react'

export default function UseTable(props) {
    const { fullName, email, mobile, city } = props.value

    return (

        <TableRow>
            <TableCell component="th" scope="row">{fullName}</TableCell>
            <TableCell align="right">{email}</TableCell>
            <TableCell align="right">{mobile}</TableCell>
            <TableCell align="right">{city}</TableCell>
        </TableRow>

    )
}
