import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import "animate.css";
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
    saleChoiceContainer:{
        position: 'absolute',
        left: 0,
        width: '100%',
        display: 'none',
        alignItems: 'flex-start',
        paddingLeft: 255,
        padding: '16px 40px 20px 40px',
        top: 60,
        backgroundColor: 'white',
        [theme.breakpoints.up('xl')]: {
            paddingLeft: 550,
            width: '100%',
        },
    },
    Choice:{
        padding: '16px 8px 0px',
        display: 'inline-block',
        textAlign: 'left',
        width: 210,
    },
    menuTitle:{
        display: 'block',
        marginBottom: 14,
        fontSize: 16,
        color: 'black',
        textDecoration: 'none',
        "&:hover": {
          color: 'black',
        },
    },
    menuItem:{
        display: 'block',
        color: '#757575',
        marginBottom: 6,
        fontSize: 14,
        textDecoration: 'none',
        lineHeight: 1.428571,
        "&:hover": {
          color: 'black',
        },
    },
}));

export default function SaleMenu(){
    const classes = useStyles();

    /*Open and close Sale*/
    const openSale = () => {
        let underline = document.getElementById('Sale');
        ReactDOM.findDOMNode(underline).style.borderBottom = '2px black solid';
        let container = document.getElementById('saleContainer');
        ReactDOM.findDOMNode(container).style.display = "flex";
    }
    const closeSale = () => {
        let underline = document.getElementById('Sale');
        ReactDOM.findDOMNode(underline).style.border = 'none';
        let container = document.getElementById('saleContainer');
        ReactDOM.findDOMNode(container).style.display = "none";
    }
    /*On fallback*/
    const openFallBack = () => {
        let fallback = document.getElementById('fallback');
        ReactDOM.findDOMNode(fallback).style.backgroundColor = 'rgba(0,0,0,0.4)';
        ReactDOM.findDOMNode(fallback).style.zIndex = '2';
    }

    /*Off fallback*/
    const closeFallBack = () => {
        let fallback = document.getElementById('fallback');
        ReactDOM.findDOMNode(fallback).style.backgroundColor = 'transparent';
        ReactDOM.findDOMNode(fallback).style.zIndex = '-1';
    }

    return (
        <span
            onMouseEnter={ () => {openSale(); openFallBack()} }
            onMouseLeave={ () => {closeSale(); closeFallBack()} }
        >
            <a href="#a" id="Sale" className={classes.mainMenuChoiceLink}>Sale</a>
            {/*Sale menu container*/}
            <div id="saleContainer" className={classes.saleChoiceContainer}>
            <div className="animate__animated animate__fadeInDown">
                <div className={classes.Choice}>
                    <a href="#a" className={classes.menuTitle}>Featured</a>
                    <a href="#a" className={classes.menuItem}>Shop All Sale</a>
                </div>
            </div>   
            <div className="animate__animated animate__fadeInDown">
                <div className={classes.Choice}>
                    <a href="#a" className={classes.menuTitle}>Men's Sale</a>
                    <a href="#a" className={classes.menuItem}>Shoes</a>
                    <a href="#a" className={classes.menuItem}>Clothing</a>
                    <a href="#a" className={classes.menuItem}>Accessories and Equipment</a>        
                </div>
            </div>    
            <div className="animate__animated animate__fadeInDown">
                <div className={classes.Choice}>
                    <a href="#a" className={classes.menuTitle}>Women's Sale</a>
                    <a href="#a" className={classes.menuItem}>Shoes</a>
                    <a href="#a" className={classes.menuItem}>Clothing</a>
                    <a href="#a" className={classes.menuItem}>Accessories and Equipment</a>         
                </div>
            </div>    
            <div className="animate__animated animate__fadeInDown">
                <div className={classes.Choice}>
                    <a href="#a" className={classes.menuTitle}>Kids' Sale</a>
                    <a href="#a" className={classes.menuItem}>Shoes</a>
                    <a href="#a" className={classes.menuItem}>Clothing</a>
                    <a href="#a" className={classes.menuItem}>Accessories and Equipment</a>        
                </div>
            </div>         
            </div>   
        </span>
    )
}