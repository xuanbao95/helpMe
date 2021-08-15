import React from 'react'
import * as action from "./module/action/action"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import * as ActionType from "./module/contants/contants"

import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    head: {
        marginTop: "1rem",
        zIndex: 1,
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",
        cursor: "pointer"
    }
}))
export default function MainImage() {
    const history = useHistory();
    const [isValid, setIsValid] = useState(true)
    const handleListShose = () => {
        if (isValid) {
            history.push("/listShoes")
        }
    }
    const classes = useStyles();
    return (

        <React.Fragment>
            <AppBar position="sticky" className={classes.head}>
                <span onClick={() => handleListShose()}>Men</span>
            </AppBar>



        </React.Fragment>
    )
}
