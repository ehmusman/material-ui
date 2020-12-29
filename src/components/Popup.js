import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, makeStyles } from '@material-ui/core';
import Control from './controls/Control';
import EmployeeForm from '../pages/employees/EmployeeForm';


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

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (val) => {
        if (val === 'Close Popup')
            setOpen(false);
    };

    return (
        <div>
            <Grid container className={classes.root}>
                <Grid item xs={8}>
                    <Control.InputField
                        label="Search Here"
                    />
                </Grid>
                <Grid item xs={4}>
                    <Control.Button
                        text='Add Employee'
                        onClick={handleClickOpen}
                    />
                </Grid>
            </Grid>
            <Dialog open={open} onClose={handleClose} maxWidth='md' classes={{ paper: classes1.dialogueWrapper }}>
                <DialogTitle id="form-dialog-title">Enter New Employee</DialogTitle>
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