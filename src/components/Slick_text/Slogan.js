import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@material-ui/core/styles';
const setting = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
}
const useStyles = makeStyles((theme) => ({
    slogan: {
        backgroundColor: "rgba(0, 0, 0, 0.171)",
        textAlign: "center",
        height: "70px",
        overflow: "hidden",
    },
    slogan_item: {
        marginTop: "1rem",
        fontSize: "10px",
    }
}))
export default function Slogan() {
    const classes = useStyles();
    return (
        <Slider {...setting} className={classes.slogan}>
            <div className={classes.slogan_item}>
                <h6>New drops every Friday, only on the Nike App.</h6>
            </div>
            <div className={classes.slogan_item}>
                <h6>SAVE UP TO 40%</h6>
                <p>Shop All Our New Markdowns</p>
            </div>
            <div className={classes.slogan_item}>
                <h6>FREE DELIVERY</h6>
                <p>Applies to orders of 5.000.000₫ or more. View details</p>

            </div>
            <div className={classes.slogan_item}>
                <h6>HELLO NIKE APP</h6>
                <p>Download the app to access everything Nike. Get Your Great</p>

            </div>

        </Slider>
    )
}
