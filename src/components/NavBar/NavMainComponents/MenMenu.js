import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../../List Product/module/Actions/action";
import * as ActionType from "../../List Product/module/Constants/contants";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import 'animate.css';
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
  menChoiceContainer: {
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

function MenMenu() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/men") {
      dispatch(action.actGetProductAPI("male", "clothing"));
    }
  }, []);
  /*Open and close Men*/

  const openMen = () => {
    let underline = document.getElementById("Men");
    ReactDOM.findDOMNode(underline).style.borderBottom = "2px black solid";
    let container = document.getElementById("menContainer");
    ReactDOM.findDOMNode(container).style.display = "flex";
  };
  const closeMen = () => {
    let underline = document.getElementById("Men");
    ReactDOM.findDOMNode(underline).style.border = "none";
    let container = document.getElementById("menContainer");
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
        openMen();
        openFallBack();
      }}
      onMouseLeave={() => {
        closeMen();
        closeFallBack();
      }}
    >
      <Link to="/men" id="Men" className={classes.mainMenuChoiceLink}>
        Men
      </Link>
      {/*Men menu container*/}

      <div id="menContainer" className={classes.menChoiceContainer}>
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
              Sustainable Materials
            </a>
            <a href="#a" className={classes.menuItem}>
              Air Force 1
            </a>
            <a href="#a" className={classes.menuItem}>
              Top Picks Under 2,300,000đ
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
            <a href="#a" className={classes.menuItem}>
              New Sneakers
            </a>
            {/* <Link href="#" className={classes.menuItem} to="/listProduct?gender=male&typeProduct=shoes">All shoes</Link> */}
            <Link
              to="/listProduct"
              className={classes.menuItem}
              onClick={() => {
                dispatch(
                  action.createAction({
                    type: ActionType.CHANGE_GENDER_TYPEPRODUCT,
                    payload: { gender: "male", typeProduct: "shoes" },
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
              Gym and Training
            </a>
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
            {/* <a href="#a" className={classes.menuItem}>
            All Clothing
          </a> */}
            <Link
              to="/listProduct"
              className={classes.menuItem}
              onClick={() => {
                dispatch(
                  action.createAction({
                    type: ActionType.CHANGE_GENDER_TYPEPRODUCT,
                    payload: { gender: "male", typeProduct: "clothing" },
                  })
                );
              }}
            >
              All clothing
            </Link>
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
            <Link to="running" className={classes.menuItem}>
              Running
            </Link>
            <Link to="/football" className={classes.menuItem}>
              Football
            </Link>
            <Link to="/basketball" className={classes.menuItem}>
              Basketball
            </Link>
            <a href="#a" className={classes.menuItem}>
              Gym and Training
            </a>
            <a href="#a" className={classes.menuItem}>
              Yoga
            </a>
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
export default connect()(MenMenu);
