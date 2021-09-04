import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import {Link} from "react-router-dom"
const useStyles = makeStyles((theme) => ({
    nike:{
        width: 59.62,
        hegiht: 20.87,
        "&:hover": {
          opacity: 0.7,
        },
    },
    linkNike:{
        padding: '0 12px',
        height: 60,
        width: 84,
        position: 'absolute',
        left: 36,
        [theme.breakpoints.down('sm')]: {
            left: 10,
        },
    },
}));

export default function LogoNike(){
    const classes = useStyles();
    return (
        <IconButton className={classes.linkNike}>
            <Link to="/"  ><img src="https://www.logomaker.com/wp-content/uploads/2018/05/2000px-Logo_NIKE.png" alt="" className={classes.nike} /></Link>
        </IconButton>
    )
}