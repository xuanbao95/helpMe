
import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import  Hidden  from '@material-ui/core/Hidden'
import  Container  from '@material-ui/core/Container'
import NavSub from "../components/NavBar/NavSub"
import NavMain from "../components/NavBar/NavMain"




const HomeLayout = (props) => {
    return (
        <Fragment>
            <Hidden lgDown>
<Container maxWidth="xl">
    <NavSub/>
    <NavMain/>
</Container>

            </Hidden>
            <Hidden xlUp>
<NavSub/>
    <NavMain/>
</Hidden>
            {props.children}
        </Fragment>
    )
}
export default function HomeTemplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={(propsComponent) => {
                <HomeLayout>
                    <Component {...propsComponent} />
                </HomeLayout>
            }}
        />
    )
}
