import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(10),
        },
        position: 'relative',
        height: '250px'
    },
    icon: {
        margin: 0,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50 %, -50 %)',
        color: "#C80000"
    }
}));

export default function LoadingScreen(props) {

    const classes = useStyles();

    const size = props.size === 'small' ? 50 : 150;

    return (
        <div className={classes.root}>
            <CircularProgress className={classes.icon} size={size} thickness={5} />
        </div>
    )
}
