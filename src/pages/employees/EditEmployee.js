/* eslint-disable */
import { Grid, makeStyles } from '@material-ui/core'
import React, { useState, useContext, useEffect } from 'react'
import EmployeeFormContext from '../../context/employeeFormContext'
import Control from '../../components/controls/Control'
import { v1 as uuid } from 'uuid'

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

const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}));
const errorInitialValues = {
    fullName: '',
    email: '',
    mobile: '',
    city: ''
}

function EditEmployee({ handleClose }) {

    const classes = useStyle();
    const { updateEmployee, editValues, clearEditValues } = useContext(EmployeeFormContext)
    const [values, setValues] = useState(initialValues)
    const [error, setError] = useState(errorInitialValues)
    useEffect(() => {
        if (editValues) {
            setValues({
                ...values,
                id: editValues.id,
                fullName: editValues.fullName,
                email: editValues.email,
                city: editValues.city,
                mobile: editValues.mobile
            })
        }
    }, [])
    const handleOnChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        validation();

        return false;
    }

    const handleOnSubmit = (e) => {

        if (validation()) {
            validation();
            updateEmployee({
                type: 'UPDATE_EMPLOYEE',
                payload: {
                    id: editValues.id,
                    fullName: values.fullName,
                    email: values.email,
                    mobile: values.mobile,
                    city: values.city
                }
            })
            clearEditValues({
                type: "CLEAR_EDIT_EMPLOYEE"
            })
            setValues(initialValues)
            setError(errorInitialValues)
            handleClose('Close Popup')
        }

        e.preventDefault();

    }
    const handleResetForm = (e) => {
        e.preventDefault();
        setValues(initialValues)
    }
    const validation = () => {
        let errorValues = {};
        errorValues.fullName = values.fullName ? "" : "This Field is Required";
        errorValues.email = (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/).test(values.email) ? '' : 'Email is Not Valid';
        errorValues.mobile = values.mobile.length > 9 ? "" : 'Minimum 10 Numbers are Required';
        errorValues.city = values.city.length >= 2 ? '' : 'This Field is Required';

        setError({
            ...errorValues
        })
        return Object.values(errorValues).every(x => x === '')

    }

    return (
        <form autoComplete="off" onSubmit={handleOnSubmit}>
            <Grid container className={classes.root}>
                <Grid item xs={6}>
                    <Control.InputField
                        label=" Full Name"
                        name='fullName'
                        value={values.fullName}
                        onChange={handleOnChange}
                        error={error.fullName}
                    />
                    <Control.InputField
                        label="Email"
                        name='email'
                        value={values.email}
                        onChange={handleOnChange}
                        error={error.email}
                    />
                    <Control.InputField
                        label="Mobile"
                        name='mobile'
                        value={values.mobile}
                        onChange={handleOnChange}
                        error={error.mobile}
                    />
                    <Control.InputField
                        label="City"
                        name='city'
                        value={values.city}
                        onChange={handleOnChange}
                        error={error.city}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Control.RadioGroup
                        title="Gender"
                        name="gender"
                        value={values.gender}
                        onChange={handleOnChange}
                        items={Control.radioGroupData}
                    />
                    <Control.Select
                        name="departmentId"
                        label='Department'
                        value={values.departmentId}
                        onChange={handleOnChange}
                        options={Control.departmentData}
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
                            text='Update'
                            type="submit"
                        />
                        <Control.Button
                            text='Reset'
                            type="reset"
                            color='default'
                            onClick={handleResetForm}
                        />
                    </div>
                </Grid>
            </Grid>
        </form>
    )
}

export default EditEmployee
