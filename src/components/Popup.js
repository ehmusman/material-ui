import React, { useContext } from 'react';
import EmployeeFormContext from '../context/employeeFormContext'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, IconButton, makeStyles } from '@material-ui/core';
import EmployeeForm from '../pages/employees/EmployeeForm';
import CloseIcon from '@material-ui/icons/Close';


const useStyle1 = makeStyles(theme => ({
    dialogueWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(4)
    }
}))
export default function Popup() {

    const classes1 = useStyle1()
    const { setPopupFalse, popup } = useContext(EmployeeFormContext)


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

    return (
        <>
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
        </>
    );
}