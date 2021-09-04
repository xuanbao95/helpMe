import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../../List Product/module/Actions/action";
import * as ActionType from "../../List Product/module/Constants/contants";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import "animate.css";
const useStyles = makeStyles((theme) => ({
  mainMenuChoiceLink: {
    fontSize: 16,
    height: 54,
    padding: "19px 12px",
    marginTop: 52,
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "black",
      borderBottom: "2px black solid",
    },
  },
  kidsChoiceContainer: {
    position: "absolute",
    left: 0,
    width: "100%",
    display: "none",
    alignItems: "flex-start",
    paddingLeft: 355,
    padding: "16px 40px 20px 40px",
    top: 60,
    backgroundColor: "white",
    [theme.breakpoints.up("xl")]: {
      paddingLeft: 650,
      width: "100%",
    },
  },
  Choice: {
    padding: "16px 8px 0px",
    display: "inline-block",
    textAlign: "left",
    width: 210,
  },
  menuTitle: {
    display: "block",
    marginBottom: 14,
    fontSize: 16,
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "black",
    },
  },
  menuItem: {
    display: "block",
    color: "#757575",
    marginBottom: 6,
    fontSize: 14,
    textDecoration: "none",
    lineHeight: 1.428571,
    "&:hover": {
      color: "black",
    },
  },
}));

export default function KidsMenu() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/kid") {
      dispatch(action.actGetProductAPI("kid", "clothing"));
    }
  }, []);

  /*Open and close Kids*/

  const openKids = () => {
    let underline = document.getElementById("Kids");
    ReactDOM.findDOMNode(underline).style.borderBottom = "2px black solid";
    let container = document.getElementById("kidsContainer");
    ReactDOM.findDOMNode(container).style.display = "flex";
  };
  const closeKids = () => {
    let underline = document.getElementById("Kids");
    ReactDOM.findDOMNode(underline).style.border = "none";
    let container = document.getElementById("kidsContainer");
    ReactDOM.findDOMNode(container).style.display = "none";
  };

  /*On fallback*/

  const openFallBack = () => {
    let fallback = document.getElementById("fallback");
    ReactDOM.findDOMNode(fallback).style.backgroundColor = "rgba(0,0,0,0.4)";
    ReactDOM.findDOMNode(fallback).style.zIndex = "2";
  };

  /*Off fallback*/

  const closeFallBack = () => {
    let fallback = document.getElementById("fallback");
    ReactDOM.findDOMNode(fallback).style.backgroundColor = "transparent";
    ReactDOM.findDOMNode(fallback).style.zIndex = "-1";
  };

  return (
    <span
      onMouseEnter={() => {
        openKids();
        openFallBack();
      }}
      onMouseLeave={() => {
        closeKids();
        closeFallBack();
      }}
    >
      <Link to="/kid" id="Kids" className={classes.mainMenuChoiceLink}>
        Kids
      </Link>
      {/*Kids menu container*/}
      <div id="kidsContainer" className={classes.kidsChoiceContainer}>
        <div className="animate__animated animate__fadeInDown">
          <div className={classes.Choice}>
            <a href="#a" className={classes.menuTitle}>
              Boy's Shoes
            </a>
            <Link
              to="/listProduct"
              className={classes.menuItem}
              onClick={() => {
                dispatch(
                  action.createAction({
                    type: ActionType.CHANGE_GENDER_TYPEPRODUCT,
                    payload: { gender: "kid", typeProduct: "shoes" },
                  })
                );
              }}
            >
              All shoes
            </Link>
            <a href="#a" className={classes.menuItem}>
              Older Kids (3-6.5)
            </a>
            <a href="#a" className={classes.menuItem}>
              Younger Kids (10-2.5)
            </a>
            <a href="#a" className={classes.menuItem}>
              Baby and Toddler (1.5-9.5)
            </a>
            <a href="#a" className={classes.menuItem}>
              Lifestyle
            </a>
            <Link to="/running" className={classes.menuItem}>
              Running
            </Link>
            <Link to="/basketball" className={classes.menuItem}>
              Basketball
            </Link>
            <a href="#a" className={classes.menuItem}>
              Jordan
            </a>
            <Link to="/football" className={classes.menuItem}>
              Football
            </Link>
            <a href="#a" className={classes.menuItem}>
              Sandals and Slides
            </a>
            <Link
              to="/clothing"
              className={classes.menuTitle}
              style={{ marginTop: 40 }}
            >
              Boy's Clothing
            </Link>
            <a href="#a" className={classes.menuItem}>
              Tops and T-Shirts
            </a>
            <a href="#a" className={classes.menuItem}>
              Hoddies and Sweatshirts
            </a>
            <a href="#a" className={classes.menuItem}>
              Pants and Leggings
            </a>
            <a href="#a" className={classes.menuItem}>
              Shorts
            </a>
            <Link
              to="/listProduct"
              className={classes.menuItem}
              onClick={() => {
                dispatch(
                  action.createAction({
                    type: ActionType.CHANGE_GENDER_TYPEPRODUCT,
                    payload: { gender: "kid", typeProduct: "clothing" },
                  })
                );
              }}
            >
              All Boy's Clothing
            </Link>
          </div>
        </div>
        <div className="animate__animated animate__fadeInDown">
          <div className={classes.Choice}>
            <a href="#a" className={classes.menuTitle}>
              Girl's Shoes
            </a>
            <a href="#a" className={classes.menuItem}>
              Older Kids (3-6.5)
            </a>
            <a href="#a" className={classes.menuItem}>
              Younger Kids (10-2.5)
            </a>
            <a href="#a" className={classes.menuItem}>
              Baby and Toddler (1.5-9.5)
            </a>
            <a href="#a" className={classes.menuItem}>
              Lifestyle
            </a>
            <Link to="/running" className={classes.menuItem}>
              Running
            </Link>
            <Link to="/basketball" className={classes.menuItem}>
              Basketball
            </Link>
            <Link to="/football" className={classes.menuItem}>
              Football
            </Link>
            <a href="#a" className={classes.menuItem}>
              Sandals and Slides
            </a>
            <Link
              to="/listProduct"
              className={classes.menuItem}
              onClick={() => {
                dispatch(
                  action.createAction({
                    type: ActionType.CHANGE_GENDER_TYPEPRODUCT,
                    payload: { gender: "kid", typeProduct: "shoes" },
                  })
                );
              }}
            >
              All shoes
            </Link>
            <Link
              to="/clothing"
              className={classes.menuTitle}
              style={{ marginTop: 40 }}
            >
              Girl's Clothing
            </Link>
            <a href="#a" className={classes.menuItem}>
              Tops and T-Shirts
            </a>
            <a href="#a" className={classes.menuItem}>
              Sports Bras
            </a>
            <a href="#a" className={classes.menuItem}>
              Hoddies and Sweatshirts
            </a>
            <a href="#a" className={classes.menuItem}>
              Pants and Leggings
            </a>
            <a href="#a" className={classes.menuItem}>
              Shorts
            </a>
            <Link
              to="/listProduct"
              className={classes.menuItem}
              onClick={() => {
                dispatch(
                  action.createAction({
                    type: ActionType.CHANGE_GENDER_TYPEPRODUCT,
                    payload: { gender: "kid", typeProduct: "clothing" },
                  })
                );
              }}
            >
              All Girl's Clothing
            </Link>
          </div>
        </div>
        <div className="animate__animated animate__fadeInDown">
          <div className={classes.Choice}>
            <a href="#a" className={classes.menuTitle}>
              Accessories and Equipment
            </a>
            <a href="#a" className={classes.menuItem}>
              Balls
            </a>
            <a href="#a" className={classes.menuItem}>
              Bags and Backpacks
            </a>
            <a href="#a" className={classes.menuItem}>
              Socks
            </a>
            <a href="#a" className={classes.menuItem}>
              Hat and Headwear
            </a>
            <a
              href="#a"
              className={classes.menuTitle}
              style={{ marginTop: 40 }}
            >
              Shop By Sport
            </a>
            <Link to="/running" className={classes.menuItem}>
              Running
            </Link>
            <Link to="/football" className={classes.menuItem}>
              American Football
            </Link>
            <Link to="/basketball" className={classes.menuItem}>
              Basketball
            </Link>
            <a href="#a" className={classes.menuItem}>
              Gym and Training
            </a>
            <Link to="/tennis" className={classes.menuItem}>
              Tennis
            </Link>
          </div>
        </div>
      </div>
    </span>
  );
}
