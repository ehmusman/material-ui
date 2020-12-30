import React, { useContext, useState } from 'react';
import EmployeeFormContext from '../context/employeeFormContext'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, IconButton, makeStyles } from '@material-ui/core';
import Control from './controls/Control';
import EmployeeForm from '../pages/employees/EmployeeForm';
import CloseIcon from '@material-ui/icons/Close';

const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}));
const useStyle1 = makeStyles(theme => ({
    dialogueWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(4)
    }
}))
export default function Popup() {
    const classes = useStyle()
    const classes1 = useStyle1()
    const { setPopupTrue, setPopupFalse, popup, searchEmployee } = useContext(EmployeeFormContext)
    const [search, setSearch] = useState('')

    const SetPopupTrue = () => {
        setPopupTrue({
            type: 'POPUP_TRUE'
        })
    }
    const SetPopupFalse = () => {
        setPopupFalse({
            type: 'POPUP_FALSE'
        })
    }
    const handleClose = (val) => {
        if (val === 'Close Popup') {
            SetPopupFalse()
        }
    };
    const handleSearchEmployee = (e) => {
        setSearch(e.target.value)
        if (e.target.value !== '') {
            searchEmployee({
                type: 'SEARCH_EMPLOYEE',
                payload: search
            })
        }
    }
    return (
        <div>
            <Grid container className={classes.root}>
                <Grid item xs={8}>
                    <Control.InputField
                        value={search}
                        name='search'
                        onChange={handleSearchEmployee}
                        label="Search Here"
                    />
                </Grid>
                <Grid item xs={4}>
                    <Control.Button
                        text='Add Employee'
                        onClick={SetPopupTrue}
                    />
                </Grid>
            </Grid>
            <Dialog open={popup} onClose={handleClose} maxWidth='md' classes={{ paper: classes1.dialogueWrapper }}>
                <Grid container>
                    <Grid item xs={8}>
                        <DialogTitle id="form-dialog-title">Enter New Employee
                        </DialogTitle>
                    </Grid>
                    <Grid item xs={4} align='right'>
                        <IconButton size="medium" edge='end'
                            onClick={SetPopupFalse}
                        >
                            <CloseIcon fontSize="large" style={{ color: 'red' }}

                            />
                        </IconButton>
                    </Grid>
                </Grid>
                <DialogContent dividers>
                    <DialogContentText>
                        Fill the following fields to enter new employee
                    </DialogContentText>
                    <EmployeeForm
                        handleClose={handleClose}
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
}