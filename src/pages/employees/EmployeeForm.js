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
    departmentId: '', // corresponding to this property we have a dropdown list
    hireDate: new Date(),
    isPermanent: false // corresponding to this property we have a check box to toggle the value.
};
const radioGroupData = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' }
]
const departmentData = [
    { id: 1, title: 'Department1' },
    { id: 2, title: 'Department2' },
    { id: 3, title: 'Department3' },
    { id: 4, title: 'Department4' },
    { id: 5, title: 'Department5' },
    { id: 6, title: 'Department6' },
    { id: 7, title: 'Department7' },
    { id: 8, title: 'Department8' }
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
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        return false;
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        setValues({
            fullName: '',
            email: '',
            mobile: '',
            city: '',
            gender: 'male', // corrsponding to this property we have a group of radioButtons
            departmentId: '', // corresponding to this property we have a dropdown list
            hireDate: new Date(),
            isPermanent: false // corresponding to this property we have a check box to toggle the value.
        })
    }

    return (
        <form autoComplete='off' onSubmit={handleOnSubmit}>
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
                    <Control.InputField
                        label="Mobile"
                        name='mobile'
                        value={values.mobile}
                        onChange={handleOnChange}
                    />
                    <Control.InputField
                        label="City"
                        name='city'
                        value={values.city}
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
                    <Control.Select
                        name="departmentId"
                        label='Department'
                        value={values.departmentId}
                        onChange={handleOnChange}
                        options={departmentData}
                    />
                    <Control.DatePicker
                        name='hireDate'
                        label='Hire Date'
                        value={values.hireDate}
                        onChange={handleOnChange}
                    />
                    <Control.CheckBox
                        name="isPermanent"
                        value={values.isPermanent}
                        label='Permanent Employee'
                        onChange={e => setValues({
                            ...values,
                            [e.target.name]: !values.isPermanent
                        })}
                    />
                    <div>
                        <Control.Button
                            text='Submit'
                            type="submit"
                        />
                    </div>
                </Grid>

            </Grid>
        </form>
    )
}

export default EmployeeForm
