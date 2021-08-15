
import React from 'react'
import GridRight from './GridRight';
import GridCenter from "./GridCenter"
import GridLeft from "./GridLeft"
import { Grid } from '@material-ui/core';


export default function Menu() {


    return (
        <div className="main-menu" style={{ marginTop: "1rem" }} >
            <Grid spacing={2} className="menu_1">
                <Grid item xs={4} className="menu-right">
                    <GridRight />
                </Grid>
                <Grid item xs={4} style={{ marginRight: "144px" }}>
                    <GridCenter className="menu_2" />
                </Grid>
                <Grid item xs={4} className="menu-left">
                    <GridLeft />
                </Grid>
            </Grid>







        </div >
    )
}
