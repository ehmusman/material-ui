import React from 'react'

import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff'
    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}`,//'0px 8px',
        fontSize: '0.8rem',
        "&:hover": {
            backgroundColor: '#ccc'
        },
        "& .MuiInputBase-input": {
            marginLeft: theme.spacing(1)
        }
    }
}));

function Header() {
    const classes = useStyles()

    return (

        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container
                    alignItems='center'
                >
                    <Grid item  >
                        <InputBase
                            placeholder='Search Topics'
                            className={classes.searchInput}
                            startAdornment={<SearchIcon fontSize='small' />}
                        />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item >
                        <IconButton>
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsNoneIcon
                                    fontSize='small'
                                />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={4} color='primary'>
                                <ChatBubbleOutlineIcon
                                    fontSize='small'
                                />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge color='secondary'>
                                <PowerSettingsNewIcon
                                    fontSize='small'
                                />
                            </Badge>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header
