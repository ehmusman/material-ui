import { FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Radio, RadioGroup } from '@material-ui/core'
import React, { useState } from 'react'
import InputField from '../../components/controls/InputField';


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


    return (
        <form>
            <Grid container className={classes.root}>
                <Grid item xs={6}>
                    <InputField
                        variant='outlined'
                        label=" Full Name"
                        name='fullName'
                        value={values.fullName}
                        onChange={handleOnChange}
                    />

                    <InputField
                        variant='outlined'
                        label="Email"
                        name='email'
                        value={values.email}
                        onChange={handleOnChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup row
                            name='gender'
                            value={values.gender}
                            onChange={handleOnChange}
                        >
                            <FormControlLabel value='male' control={<Radio />} label='Male' />
                            <FormControlLabel value='female' control={<Radio />} label='Female' />
                            <FormControlLabel value='other' control={<Radio />} label='Other' />
                        </RadioGroup>
                    </FormControl>
                </Grid>

            </Grid>
        </form>
    )
}

export default EmployeeForm
