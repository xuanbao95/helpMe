import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../../ListProductComponent/module/action/action";
import * as ActionType from "../../ListProductComponent/module/contans/contants";
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
  womenChoiceContainer: {
    position: "absolute",
    left: 0,
    width: "100%",
    display: "none",
    alignItems: "flex-start",
    paddingLeft: 150,
    padding: "16px 40px 20px 40px",
    top: 60,
    backgroundColor: "white",
    [theme.breakpoints.up("xl")]: {
      paddingLeft: 450,
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

export default function WomenMenu() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/women") {
      dispatch(action.getListAPI("female", "clothing"));
    }
  }, []);

  /*Open and close Women*/
  const openWomen = () => {
    let underline = document.getElementById("Women");
    ReactDOM.findDOMNode(underline).style.borderBottom = "2px black solid";
    let container = document.getElementById("womenContainer");
    ReactDOM.findDOMNode(container).style.display = "flex";
  };
  const closeWomen = () => {
    let underline = document.getElementById("Women");
    ReactDOM.findDOMNode(underline).style.border = "none";
    let container = document.getElementById("womenContainer");
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
        openWomen();
        openFallBack();
      }}
      onMouseLeave={() => {
        closeWomen();
        closeFallBack();
      }}
    >
      <Link to="/women" id="Women" className={classes.mainMenuChoiceLink}>
        Women
      </Link>
      {/*Women menu container*/}
      <div id="womenContainer" className={classes.womenChoiceContainer}>
        <div className="animate__animated animate__fadeInDown">
          <div className={classes.Choice}>
            <a href="#a" className={classes.menuTitle}>
              Featured
            </a>
            <a href="#a" className={classes.menuItem}>
              New Realeases
            </a>
            <a href="#a" className={classes.menuItem}>
              SNKRS Launch Calendar
            </a>
            <a href="#a" className={classes.menuItem}>
              Member Access
            </a>
            <a href="#a" className={classes.menuItem}>
              Neultrals
            </a>
            <a href="#a" className={classes.menuItem}>
              Air Force 1
            </a>
            <a href="#a" className={classes.menuItem}>
              Nike Icon Clash
            </a>
            <a href="#a" className={classes.menuItem}>
              Sustainable Materials
            </a>
            <a href="#a" className={classes.menuItem}>
              Air Force 1
            </a>
            <a href="#a" className={classes.menuItem}>
              Sale
            </a>
          </div>
        </div>
        <div className="animate__animated animate__fadeInDown">
          <div className={classes.Choice}>
            <a href="#a" className={classes.menuTitle}>
              Shoes
            </a>
            <Link
              to="/listProduct"
              className={classes.menuItem}
              onClick={() => {
                dispatch(
                  action.createAction({
                    type: ActionType.CHANGER_TYPEPRODUCT_GENDER,
                    payload: { gender: "female", typeProduct: "shoes" },
                  })
                );
              }}
            >
              All shoes
            </Link>
            <a href="#a" className={classes.menuItem}>
              Lifestyle
            </a>
            <Link to="/running" className={classes.menuItem}>
              Running
            </Link>
            <a href="#a" className={classes.menuItem}>
              Gym and Training
            </a>
            <a href="#a" className={classes.menuItem}>
              Jordan
            </a>
            <Link to="/football" className={classes.menuItem}>
              Football
            </Link>
            <Link to="/basketball" className={classes.menuItem}>
              Basketball
            </Link>
            <a href="#a" className={classes.menuItem}>
              Skateboarding
            </a>
            <Link to="/tennis" className={classes.menuItem}>
              Tennis
            </Link>
            <a href="#a" className={classes.menuItem}>
              Sandals and Slides
            </a>
            <a href="#a" className={classes.menuItem}>
              Customise with Nike By You
            </a>
            <a href="#a" className={classes.menuItem}>
              All Sale Shoes
            </a>
          </div>
        </div>
        <div className="animate__animated animate__fadeInDown">
          <div className={classes.Choice}>
            <Link to="/clothing" className={classes.menuTitle}>
              Clothing
            </Link>
            <Link
              to="/listProduct"
              className={classes.menuItem}
              onClick={() => {
                dispatch(
                  action.createAction({
                    type: ActionType.CHANGER_TYPEPRODUCT_GENDER,
                    payload: { gender: "female", typeProduct: "clothing" },
                  })
                );
              }}
            >
              All Clothing
            </Link>
            <a href="#a" className={classes.menuItem}>
              Sports Bras
            </a>
            <a href="#a" className={classes.menuItem}>
              Tops and T-Shirts
            </a>
            <a href="#a" className={classes.menuItem}>
              Jerseys and Kits
            </a>
            <a href="#a" className={classes.menuItem}>
              Hoodies and Sweatshirts
            </a>
            <a href="#a" className={classes.menuItem}>
              Jackets and Gilets
            </a>
            <a href="#a" className={classes.menuItem}>
              Pants and Leggings
            </a>
            <a href="#a" className={classes.menuItem}>
              Tracksuits
            </a>
            <a href="#a" className={classes.menuItem}>
              Compression and Base Layer
            </a>
            <a href="#a" className={classes.menuItem}>
              Shorts
            </a>
            <a href="#a" className={classes.menuItem}>
              Skirts and Dresses
            </a>
            <a href="#a" className={classes.menuItem}>
              Jerseys and Kits
            </a>
            <a href="#a" className={classes.menuItem}>
              Modest Wear
            </a>
            <a href="#a" className={classes.menuItem}>
              Plus size
            </a>
            <a href="#a" className={classes.menuItem}>
              Caps
            </a>
            <a href="#a" className={classes.menuItem}>
              Socks
            </a>
            <a href="#a" className={classes.menuItem}>
              Bags and Backpacks
            </a>
            <a href="#a" className={classes.menuItem}>
              Accessories and Equipment
            </a>
            <Link to="/clothing" className={classes.menuItem}>
              All Sale Clothing
            </Link>
          </div>
        </div>
        <div className="animate__animated animate__fadeInDown">
          <div className={classes.Choice}>
            <a href="#a" className={classes.menuTitle}>
              Shop By Sport
            </a>
            <Link to="/running" className={classes.menuItem}>
              Running
            </Link>
            <a href="#a" className={classes.menuItem}>
              Gym and Training
            </a>
            <a href="#a" className={classes.menuItem}>
              Yoga
            </a>
            <Link to="/football" className={classes.menuItem}>
              Football
            </Link>
            <Link to="/basketball" className={classes.menuItem}>
              Basketball
            </Link>
            <a href="#a" className={classes.menuItem}>
              Skateboarding
            </a>
            <Link to="/tennis" className={classes.menuItem}>
              Tennis
            </Link>
            <a href="#a" className={classes.menuItem}>
              Golf
            </a>
            <a
              href="#a"
              className={classes.menuTitle}
              style={{ marginTop: 40 }}
            >
              Shop By Hand
            </a>
            <a href="#a" className={classes.menuItem}>
              Nike Sportswear
            </a>
            <a href="#a" className={classes.menuItem}>
              NikeLab
            </a>
            <a href="#a" className={classes.menuItem}>
              Nike By You
            </a>
            <a href="#a" className={classes.menuItem}>
              Jordan
            </a>
            <a href="#a" className={classes.menuItem}>
              ACG
            </a>
            <a href="#a" className={classes.menuItem}>
              NBA
            </a>
            <a href="#a" className={classes.menuItem}>
              Nike SB
            </a>
          </div>
        </div>
        <div className="animate__animated animate__fadeInDown">
          <div className={classes.Choice}>
            <a href="#a" className={classes.menuTitle}>
              Icons
            </a>
            <a href="#a" className={classes.menuItem}>
              Air Force 1
            </a>
            <a href="#a" className={classes.menuItem}>
              Pegasus
            </a>
            <a href="#a" className={classes.menuItem}>
              Blazer
            </a>
            <a href="#a" className={classes.menuItem}>
              Air Jordan 1
            </a>
            <a href="#a" className={classes.menuItem}>
              Air Max
            </a>
          </div>
        </div>
      </div>
    </span>
  );
}
