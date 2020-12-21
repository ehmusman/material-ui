import { Grid, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import Control from '../../components/controls/Control'

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
};
const radioGroupData = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' }
]

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
        <form autoComplete='off'>
            <Grid container className={classes.root}>
                <Grid item xs={6}>
                    <Control.InputField
                        label=" Full Name"
                        name='fullName'
                        value={values.fullName}
                        onChange={handleOnChange}
                    />

                    <Control.InputField
                        label="Email"
                        name='email'
                        value={values.email}
                        onChange={handleOnChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Control.RadioGroup
                        title="Gender"
                        name="gender"
                        value={values.gender}
                        onChange={handleOnChange}
                        items={radioGroupData}
                    />
                </Grid>

            </Grid>
        </form>
    )
}

export default EmployeeForm
