import React, { useContext } from 'react';
import EmployeeFormContext from '../context/employeeFormContext'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, IconButton, makeStyles } from '@material-ui/core';
import EditEmployee from '../pages/employees/EditEmployee';
import CloseIcon from '@material-ui/icons/Close';


const useStyle1 = makeStyles(theme => ({
    dialogueWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(4)
    }
}))
export default function EditPopup() {
    const classes1 = useStyle1()
    const { setEditPopupFalse, editPopup, clearEditValues } = useContext(EmployeeFormContext)

    const SetEditPopupFalse = () => {
        setEditPopupFalse({
            type: 'EDIT_POPUP_FALSE'
        })
        clearEditValues({
            type: "CLEAR_EDIT_EMPLOYEE"
        })
    }
    const handleClose = (val) => {
        if (val === 'Close Popup') {
            SetEditPopupFalse()
        }
    };
    return (
        <div>
            <Dialog open={editPopup} onClose={handleClose} maxWidth='md' classes={{ paper: classes1.dialogueWrapper }}>
                <Grid container>
                    <Grid item xs={8}>
                        <DialogTitle id="form-dialog-title">Enter New Employee
                        </DialogTitle>
                    </Grid>
                    <Grid item xs={4} align='right'>
                        <IconButton size="medium" edge='end'
                            onClick={SetEditPopupFalse}
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
                    <EditEmployee
                        handleClose={handleClose}
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
}