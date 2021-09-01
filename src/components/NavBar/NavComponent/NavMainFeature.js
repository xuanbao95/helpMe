import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import ReactDOM from "react-dom";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Drawer from "@material-ui/core/Drawer";
// import MobileSubMenu from "./MobileMenuComponents/MobileSubMenu";
// import MobileMenMenu from "./MobileMenuComponents/MobileMenMenu";
// import MobileWomenMenu from "./MobileMenuComponents/MobileWomenMenu";
// import MobileKidsMenu from "./MobileMenuComponents/MobileKidsMenu";
// import MobileCustomiseMenu from "./MobileMenuComponents/MobileCustomiseMenu";
// import MobileSaleMenu from "./MobileMenuComponents/MobileSaleMenu";
// import MobileSNKRSMenu from "./MobileMenuComponents/MobileSNKRSMenu";
import { Link } from "react-router-dom";
import API from "../../../Axios/API";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import * as ActionType from "../module/contants/contants";
import * as action from "../module/actions/Action";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import * as ActionType2 from "../../ListProductComponent/module/contans/contants";
import * as action2 from "../../ListProductComponent/module/action/action";

const useStyles = makeStyles((theme) => ({
  navMainFeature: {
    height: 34,
    display: "flex",
    alignItems: "center",
    position: "absolute",
    right: 36,
    [theme.breakpoints.down("sm")]: {
      right: 10,
    },
  },
  nonMobile: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  Mobile: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  mainNavButtonLink: {
    color: "black",
    height: 24,
    "&:hover": {
      color: "black",
    },
  },
  input: {
    padding: "6px 48px",
    height: 36,
  },
  mainNavButton: {
    padding: 6,
    height: 36,
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "#dee1e3",
    },
  },
  inputBar: {
    padding: "4px 4px",
    alignItems: "center",
    borderRadius: 30,
    width: 155,
    marginRight: 20,
    "&:hover": {
      backgroundColor: "#dee1e3",
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    width: "65%",
  },
  iconButton: {
    padding: 1,
    borderRadius: "50%",
  },
  drawerMobileMenu: {
    width: 320,
    [theme.breakpoints.down("xs")]: {
      width: 300,
    },
  },
  drawerMobileSearchBox: {
    width: "100%",
    height: "100%",
  },
  mobileMenu: {
    marginTop: 26,
    padding: "0 26px 150px",
  },
  mobileSubMenu: {
    paddingTop: 16,
  },
  mobileSearchBoxContainer: {
    margin: "8px 20px 0px 36px",
  },
  mobileMainSearchBar: {
    borderRadius: 30,
    padding: "2px 2px",
  },
  mobileMainNavButton: {
    padding: "0 6px 0 0",
    borderRadius: "50%",
    color: "black",
  },
  mobilePopularSearch: {
    padding: "30px 0px 0px 0px",
  },
  mobilePopularSearchTerms: {
    color: "black",
    fontSize: 19,
    textDecoration: "none",
    marginBottom: "12px",
  },
  sumQuanlity: {
    position: "absolute",
    right: "15px",
    top: "9px",
    fontSize: "9px",
  },
  TopSuggestTitle: {
    fontSize: 16,
    color: "#757575",
    paddingBottom: 16,
  },
  TopSuggest: {
    fontSize: 20,
    paddingBottom: 12,
  },
  TopSuggestItem: {
    color: "#757575",
    textDecoration: "none",
  },
  SearchProductImg: {
    width: "100%",
  },
}));

export default function NavMainFeature(props) {
  const classes = useStyles();
  const { window } = props;
  const theme = useTheme();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  {
    /*On fallback*/
  }
  const openFallBack = () => {
    let fallback = document.getElementById("fallback");
    ReactDOM.findDOMNode(fallback).style.backgroundColor = "rgba(0,0,0,0.4)";
    ReactDOM.findDOMNode(fallback).style.zIndex = "2";
    let navsub = document.getElementById("navsub");
    ReactDOM.findDOMNode(navsub).style.zIndex = "1100";
  };
  {
    /*Open search box*/
  }
  const openSearchBox = () => {
    let searchbox = document.getElementById("searchbox");
    ReactDOM.findDOMNode(searchbox).style.display = "block";
  };

  const [mobile, setMobile] = React.useState(false);
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const handleMobile = () => {
    setMobile(!mobile);
  };

  // const [mobileSearchBox, setMobileSearchBox] = React.useState(false);
  // const handleMobileSearchBox = () => {
  //   setMobileSearchBox(!mobileSearchBox);
  // };
  // const products = useSelector((state) => state.reducerCart.products);
  // const sumQuanlity = products.reduce((sum, item) => {
  //   return sum + item.quantity;
  // }, 0);

  var dataAll = useSelector((state) => state.searchBarReducer.dataAll);

  React.useEffect(() => {
    const callAPI = async () => {
      try {
        const res = await API(`product`, "GET");
        // console.log(res.data);
        dataAll = res.data;
        dispatch(
          action.createAction({ type: ActionType.DATA_ALL_LIST, payload: res.data })
        );
        dispatch(action.createAction({ type: ActionType.DATA_SEARCH_LIST, payload: [] }));
        dispatch(
          action.createAction({ type: ActionType.DATA_SUGGEST_LIST, payload: [] })
        );
      } catch (error) {
        console.log({ ...error });
      }
    };
    callAPI();
  }, []);

  const handleSearchInput = (e) => {
    if (e.target.value == "") {
      dispatch(action.createAction({ type: ActionType.DATA_SEARCH_LIST, payload: [] }));
    } else {
      var suggest = ["male", "female", "kid"];
      var dataSearch = dataAll.filter((item, index) => {
        return (
          item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
        );
      });
      const dataSearchSort = dataSearch.slice(0, 5);
      const dataSuggestSort = suggest.filter((item, index) => {
        return item.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1;
      });
      dispatch(
        action.createAction({
          type: ActionType.DATA_SEARCH_LIST,
          payload: dataSearchSort,
        })
      );
      dispatch(
        action.createAction({
          type: ActionType.DATA_SUGGEST_LIST,
          payload: dataSuggestSort,
        })
      );
    }
  };

  const dataSearchList = useSelector(
    (state) => state.searchBarReducer.dataSearchList
  );
  const dataSuggest = useSelector(
    (state) => state.searchBarReducer.dataSuggest
  );

  const listDataSearch = dataSearchList.map((item) => {
    return (
      <Grid
      item
      xs={6}
      sm={4}
      className={classes.SearchProduct}
      onClick={() => {
        history.push(`/detailProduct/${item._id}`);
        // handleMobileSearchBox();
      }}
    >
      <img src={item.img} className={classes.SearchProductImg} />
      <div>{item.name}</div>
      <div style={{ color: "#757575" }}>{item.message}</div>
      <div className={classes.SearchProductPrice}>
        {item.price.toLocaleString()} đ
      </div>
    </Grid>
    )
  }
    
  );
  const listDataSuggest = dataSuggest.map((item) => (
    <div className={classes.TopSuggest}>
      {(item == "male" || item == "female" || item == "kid") && (
        <Link
          to="/listProduct"
          className={classes.TopSuggestItem}
          onClick={() => {
            dispatch(
              action2.createAction({
                type: ActionType2.CHANGER_TYPEPRODUCT_GENDER,
                payload: { gender: item, typeProduct: "shoes" },
              })
            );
            // handleMobileSearchBox();
          }}
        >
          {item}
        </Link>
      )}
    </div>
  ));

  const handleSumbitSearch = (e, data) => {
    e.preventDefault();
    if (data != undefined) {
      var dataInput = data;
    } else {
      var dataInput = e.target.searchbar.value;
    }
    // const dataInput = e.target.searchbar.value
    if (dataInput != "") {
      dispatch(
        action2.createAction({
          type: ActionType2.DATA_SEARCH_INPUT,
          payload: dataInput,
        })
      );
      dispatch(
        action2.createAction({
          type: ActionType2.CHANGER_TYPEPRODUCT_GENDER,
          payload: { gender: "search", typeProduct: "search" },
        })
      );
      localStorage.setItem("search", JSON.stringify(dataInput));
      if (location.pathname == "/listProduct") {
        history.go(0);
      } else {
        history.push(`/listProduct`);
      }
    }
    // handleMobileSearchBox();
  };

  return (
    <div className={classes.navMainFeature}>
      <span className={classes.nonMobile}>
        {/*Search bar*/}
        <div className={classes.inputBar}>
          <IconButton className={classes.mainNavButton}>
            <SearchIcon style={{ fill: "black" }} />
          </IconButton>

          <InputBase
            className={classes.input}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
            onClick={() => {
              openSearchBox();
              openFallBack();
            }}
          />
        </div>

        {/*Favorite*/}
        <IconButton
          className={classes.mainNavButton}
          style={{ marginRight: "12px" }}>
          <Link to="/user/favorite" className={classes.mainNavButtonLink}>
            <FavoriteBorderIcon />
          </Link>

        </IconButton>

        {/*Bag items*/}
        <IconButton className={classes.mainNavButton}>
          <Link to="/cart" className={classes.mainNavButtonLink}>
            <WorkOutlineIcon />
          </Link>
        </IconButton>
        {/* <span className={classes.sumQuanlity}>{sumQuanlity}</span> */}
      </span>

      <span className={classes.Mobile}>
        {/*Bag items*/}
        <IconButton
          className={classes.mainNavButton}
          style={{ marginLeft: "10px" }}
        >
          <Link to="/cart" className={classes.mainNavButtonLink}>
            <WorkOutlineIcon />
          </Link>
        </IconButton>

        {/*Search button*/}
        <IconButton
          className={classes.mainNavButton}
          style={{ marginLeft: "10px" }}
          // onClick={handleMobileSearchBox}
        >
          <SearchIcon style={{ fill: "black" }} />
        </IconButton>

        <Drawer
          container={container}
          variant="temporary"
          anchor="top"
          // open={mobileSearchBox}
          // onClose={handleMobileSearchBox}
          classes={{
            paper: classes.drawerMobileSearchBox,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <div className={classes.mobileSearchBoxContainer}>
            {/*Search bar*/}
            <div>
              <span className={classes.mobileMainSearchBar}>
                <form onSubmit={handleSumbitSearch}>
                  <IconButton className={classes.mobileMainNavButton}>
                    <SearchIcon style={{ fill: "black" }} />
                  </IconButton>
                  <InputBase
                    placeholder="Search"
                    inputProps={{ "aria-label": "search" }}
                    style={{ width: "65%" }}
                    onInput={(e) => {
                      handleSearchInput(e);
                    }}
                    name="searchbar"
                  />
                </form>
              </span>
              <IconButton
                className={classes.mobileMainNavButton}
                style={{ position: "absolute", right: 20, top: 20 }}
                // onClick={handleMobileSearchBox}
              >
                <CloseIcon />
              </IconButton>
            </div>
            {dataSearchList.length == 0 && dataSuggest.length == 0 ? (
              <div className={classes.mobilePopularSearch}>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#757575",
                    paddingBottom: "2px",
                  }}
                >
                  Popular Search Terms
                </p>
                <p>
                  <a
                    href="#a"
                    className={classes.mobilePopularSearchTerms}
                    onClick={(e) => {
                      handleSumbitSearch(e, "Air Force 1");
                    }}
                  >
                    Air Force 1
                  </a>
                </p>
                <p>
                  <a
                    href="#a"
                    className={classes.mobilePopularSearchTerms}
                    onClick={(e) => {
                      handleSumbitSearch(e, "Jordan");
                    }}
                  >
                    Jordan
                  </a>
                </p>
                <p>
                  <a
                    href="#a"
                    className={classes.mobilePopularSearchTerms}
                    onClick={(e) => {
                      handleSumbitSearch(e, "Air Max");
                    }}
                  >
                    Air Max
                  </a>
                </p>
                <p>
                  <a
                    href="#a"
                    className={classes.mobilePopularSearchTerms}
                    onClick={(e) => {
                      handleSumbitSearch(e, "Nike React");
                    }}
                  >
                    Nike React
                  </a>
                </p>
              </div>
            ) : (
              <div className={classes.mobilePopularSearch}>
                <p>
                  <div className={classes.TopSuggestTitle}>Top Suggestions</div>
                  {dataSuggest.length > 0 && <div>{listDataSuggest}</div>}
                </p>
                <p>
                  <Grid container spacing={1}>
                    {listDataSearch}
                  </Grid>
                </p>
              </div>
            )}
          </div>
        </Drawer>

        {/*MenuIcon*/}
        <IconButton
          className={classes.mainNavButton}
          style={{ marginLeft: "10px" }}
          onClick={handleMobile}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobile}
          onClose={handleMobile}
          classes={{
            paper: classes.drawerMobileMenu,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {/* <div className={classes.mobileMenu}>
            <MobileMenMenu />
            <MobileWomenMenu />
            <MobileKidsMenu />
            <MobileCustomiseMenu />
            <MobileSaleMenu />
            <MobileSNKRSMenu />
            <MobileSubMenu />
          </div> */}
        </Drawer>
      </span>
    </div>
  );
}
