import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainMenuChoiceLink:{
        fontSize: 16,
        height: 54,
        padding: '19px 12px',
        marginTop: 52,
        color: 'black',
        textDecoration: "none",
        "&:hover": {
          color: 'black',
          borderBottom: '2px black solid',
        },
    },
}));

export default function SNKRSMenu(){
    const classes = useStyles();
    return (
        <span>
            <a href="#a" className={classes.mainMenuChoiceLink}>SNKRS</a>
        </span>
    )
}