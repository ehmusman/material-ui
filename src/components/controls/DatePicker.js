import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from "@date-io/date-fns";
function DatePicker({
    name,
    label,
    value,
    onChange
}) {
    const handleDateInput = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant='inline'
                inputVariant='outlined'
                label={label}
                format='MM/dd/yyyy'
                name={name}
                value={value}
                onChange={date => onChange(handleDateInput(name, date))}
            />

        </MuiPickersUtilsProvider>
    )
}

export default DatePicker
