import React from 'react';
import NavMain from "./NavMain";
import NavSub from "./NavSub";
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';

export default function NavBar() {
    return (
        <div>
            <Hidden lgDown>
                <Container maxWidth="xl">
                    <NavSub />
                    <NavMain />
                </Container>
            </Hidden>
            <Hidden xlUp>
                <NavSub />
                <NavMain />
            </Hidden>
        </div>
    )
}