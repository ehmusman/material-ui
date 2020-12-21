import { Paper, Card, Typography, makeStyles } from '@material-ui/core'
import React from 'react'

function PageHeader(props) {
    const useStyles = makeStyles(theme => ({
        root: {
            backgroundColor: "#fdfdfd"
        },
        pageHeader: {
            display: 'flex',
            padding: theme.spacing(2)
        },
        pageIcon: {
            display: 'inline-block',
            padding: theme.spacing(2),
            marginRight: theme.spacing(2),
            color: '#3c44b1'
        },
        pageTitle: {
            paddingLeft: theme.spacing(4),
            '& .MuiTypography-subtitle2': {
                opacity: 0.5
            }
        }

    }))



    const { title, subTitle, icon } = props;
    const classes = useStyles()
    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div className={classes.pageTitle}>
                    <Typography
                        variant='h6'
                        component='div'
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant='subtitle2'
                        component='div'
                    >
                        {subTitle}
                    </Typography>
                </div>
            </div>
        </Paper>
    )
}

export default PageHeader
