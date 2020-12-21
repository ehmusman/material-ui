import { PeopleOutlineTwoTone } from '@material-ui/icons'
import React from 'react'
import PageHeader from '../../components/PageHeader'
import EmployeeForm from './EmployeeForm'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';


const useStyle = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(1),
        padding: theme.spacing(1)
    }
}))
function Employees() {
    const classes = useStyle()
    return (
        <>
            <PageHeader
                title='New Employee'
                subTitle="Form Design with Validation"
                icon={<PeopleOutlineTwoTone fontSize='large' />}
            />

            <Paper className={classes.pageContent}>
                <EmployeeForm />
            </Paper>
        </>
    )
}

export default Employees
