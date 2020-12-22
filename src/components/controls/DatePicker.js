import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from "@date-io/date-fns";
function DatePicker({
    name, label, value, onChange
}) {
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
                onChange={onChange}

            />

        </MuiPickersUtilsProvider>
    )
}

export default DatePicker
