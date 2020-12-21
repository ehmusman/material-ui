import { Grid, makeStyles, TextField } from '@material-ui/core'
import React, { useState } from 'react'


const initialValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male', // corrsponding to this property we have a group of radioButtons
    department: '', // corresponding to this property we have a dropdown list
    hireDate: new Date(),
    isPermanent: false // corresponding to this property we have a check box to toggle the value.
}

const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}));

function EmployeeForm() {

    const classes = useStyle();
    const [values, setValues] = useState(initialValues)
    const handleOnChange = (e) => {
        e.preventDefault();
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        setValues({
            ...values,
            fullName: '',
            email: ''
        })
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <Grid container className={classes.root}>
                <Grid item xs={6}>
                    <TextField
                        variant='outlined'
                        label=" Full Name"
                        name='fullName'
                        value={values.fullName}
                        onChange={handleOnChange}
                    />
                    <TextField
                        variant='outlined'
                        label="Email"
                        name='email'
                        value={values.email}
                        onChange={handleOnChange}
                    />
                </Grid>
                <Grid item xs={6}>
                </Grid>

            </Grid>
            <input type="submit" value="submit" />
        </form>
    )
}

export default EmployeeForm
