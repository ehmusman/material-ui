import { makeStyles } from '@material-ui/core'
import React from 'react'

// we have two material ui methods (withStyles and makeStyles)to convert this css in original syntax.

const useStyles = makeStyles({
    SideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#333'
    } // we have define the css using css-in-js 

})


function SideMenu() {
    const classes = useStyles()
    return (
        <div className={classes.SideMenu}>

        </div>
    )
}

export default SideMenu
