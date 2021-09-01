import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  nav: {
    backgroundColor: "white",
    color: "black",
    paddingLeft: 36,
    paddingRight: 38,
    position: "relative",
    boxShadow: "none",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    zIndex: 1101,
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    padding: 0,
    minHeight: 36,
  },
  jordan: {
    height: 24,
    width: 24,
    "&:hover": {
      opacity: 0.7,
    },
  },
  linkJordan: {
    padding: "0 12px",
    height: 34,
    display: "flex",
    alignItems: "center",
  },
  nav1: {
    height: 34,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  nav1Menu: {
    margin: "0 12px",
    textDecoration: "none",
    color: "black",
    fontSize: 12,
    "&:hover": {
      color: "grey",
    },
    cursor: "pointer",
  },
  helpMenuContainer: {
    padding: "24px 24px 24px 18px",
    position: "absolute",
    right: 130,
    zIndex: 10,
    width: 200,
    fontSize: 14,
    borderRadius: 10,
    textAlign: "left",
    backgroundColor: "white",
  },
  helpMenuHeader: {
    padding: "4px 8px",
    marginBottom: 12,
    fontSize: 16,
    cursor: "pointer",
  },
  helpMenuItem: {
    color: "#757575",
    padding: "4px 8px",
    cursor: "pointer",
    "&:hover": {
      color: "black",
    },
  },
}));

export default function NavSub() {
  const classes = useStyles();

  const [helpMenu, setHelpMenu] = React.useState(false);

  return (
    <AppBar className={classes.nav} id="navsub">
      <Toolbar className={classes.toolbar}>
        <a href="#a" id="jordan" className={classes.linkJordan}>
          <img
            src="https://www.nike.com/assets/experience/ciclp/landing-pages/static/v2/1494-4685d103b4e/static/icons/jordan.svg"
            className={classes.jordan}
            alt=""
          />
        </a>

        <Typography variant="h6" className={classes.title}></Typography>
        <div className={classes.nav1}>
          <div
            onMouseOver={() => setHelpMenu(true)}
            onMouseLeave={() => setHelpMenu(false)}
          >
            <span href="#" className={classes.nav1Menu}>
              Help
            </span>
            {helpMenu && (
              <div className={classes.helpMenuContainer}>
                <div className={classes.helpMenuHeader}>Help</div>
                <div className={classes.helpMenuItem}>Order Status</div>
                <div className={classes.helpMenuItem}>
                  Dispatch and Delivery
                </div>
                <div className={classes.helpMenuItem}>Returns</div>
                <div className={classes.helpMenuItem}>Contact Us</div>
                <div className={classes.helpMenuItem}>Privacy Policy</div>
                <div className={classes.helpMenuItem}>Terms of Sale</div>
                <div className={classes.helpMenuItem}>Terms of Use</div>
                <div className={classes.helpMenuItem}>Send Us Feedback</div>
              </div>
            )}
          </div>
          |
         
        </div>
      </Toolbar>
    </AppBar>
  );
}
