import { Grid, makeStyles, TextField } from '@material-ui/core'
import React, { useState } from 'react'


// const initialValues = {
//     id: 0,
//     fullName: '',
//     email: '',
//     mobile: '',
//     city: '',
//     gender: 'male',
//     gender: 'male', // corrsponding to this property we have a group of radioButtons
//     department: '', // corresponding to this property we have a dropdown list
//     hireDate: new Date(),
//     isPermanent: false // corresponding to this property we have a check box to toggle the value.
// }

const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}));

function EmployeeForm() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const classes = useStyle();
    const handleNameChange = (e) => {
        e.preventDefault();
        setFullName(e.target.value)
    }
    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
    }

    return (
        <form>
            <Grid container className={classes.root}>
                <Grid item xs={6}>
                    <TextField
                        variant='outlined'
                        label=" Full Name"
                        value={fullName}
                        onChange={handleNameChange}
                    />
                    <TextField
                        variant='outlined'
                        label="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </Grid>
                <Grid item xs={6}>
                </Grid>

            </Grid>
        </form>
    )
}

export default EmployeeForm
