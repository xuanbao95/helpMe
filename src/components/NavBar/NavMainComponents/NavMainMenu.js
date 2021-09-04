import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenMenu from './MenMenu';
import WomenMenu from './WomenMenu';
import KidsMenu from './KidsMenu';
import CustomiseMenu from './CustomiseMenu';
import SaleMenu from './SaleMenu';
import SNKRSMenu from './SNKRSMenu';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    mainMenuContainer: {
        flexGrow: 1,
        textAlign:'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    mainMenu:{
        backgroundColor: 'transparent',
        position: 'absolute',
        width: '100%',
        height: 64,
        top: 0,
        left: 0,
    },
    mainMenuChoice:{
        margin: '0 auto',
        marginTop: 20,
    }, 
}));

export default function NavMainMenu(){
    const classes = useStyles();

    return (
        <div className={classes.mainMenuContainer}>
            <div className={classes.mainMenu}>
            <div className={classes.mainMenuChoice}>
                <Hidden lgDown>
                    <Container maxWidth="xl">
                        <MenMenu />
                        <WomenMenu />
                        <KidsMenu />
                        <CustomiseMenu />
                        <SaleMenu />
                        <SNKRSMenu /> 
                    </Container>
                </Hidden>
                <Hidden xlUp>
                    <MenMenu />
                    <WomenMenu />
                    <KidsMenu />
                    <CustomiseMenu />
                    <SaleMenu />
                    <SNKRSMenu /> 
                </Hidden>
                
    
            </div>  
            </div>
        </div>
    )
}