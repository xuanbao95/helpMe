import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import ReactDOM from "react-dom";
import { useRef, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import API from "../../../Axios/API";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as ActionType from "./Redux/Modules/constants/Constants";
import * as action from "./Redux/Modules/actions/Action";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import * as ActionType2 from "../../List Product/module/Constants/contants";
import * as action2 from "../../List Product/module/Actions/action";
import Skeleton from "@material-ui/lab/Skeleton";
import "animate.css";
const useStyles = makeStyles((theme) => ({
  searchBox: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    minHeight: 312,
    backgroundColor: "white",
    display: "none",
    padding: "0px 36px 0px 36px",
  },
  nike: {
    width: 59.62,
    hegiht: 20.87,
    "&:hover": {
      opacity: 0.7,
    },
  },
  linkNike: {
    padding: "0 12px",
    height: 60,
    width: 84,
  },
  searchBoxContainer: {
    display: "block",
  },
  searchBarContainer: {
    height: 62,
    position: "absolute",
    left: 150,
    right: 150,
    padding: "10px 170px",
  },
  mainSearchBar: {
    borderRadius: 30,
    padding: "2px 2px",
    "&:hover": {
      backgroundColor: "#dee1e3",
    },
  },
  closeSearchBoxButton: {
    float: "right",
    margin: "12px 30px",
  },
  mainNavButton: {
    padding: 6,
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "#dee1e3",
    },
  },
  mainNavButtonLink: {
    color: "black",
    height: 24,
    "&:hover": {
      color: "black",
    },
  },
  popularSearch: {
    padding: "10px 0px 0px 290px",
  },
  popularSearchTerms: {
    color: "black",
    fontSize: 19,
    textDecoration: "none",
    marginBottom: "12px",
    "&:hover": {
      color: "grey",
    },
  },
  SearchResult: {
    minHeight: 380,
    padding: "40px 0 50px",
  },
  SearchProduct: {
    cursor: "pointer",
    minHeight: 350,
  },
  SearchProductImg: {
    width: "100%",
    height: "70%",
  },
  SearchProductPrice: {
    position: "absolute",
    bottom: 40,
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
}));

/*Click outside function*/
function ClickOutsideSeachBox(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        ref.current.style.display = "none";
        let fallback = document.getElementById("fallback");
        ReactDOM.findDOMNode(fallback).style.backgroundColor = "transparent";
        ReactDOM.findDOMNode(fallback).style.zIndex = "-1";
        let navsub = document.getElementById("navsub");
        ReactDOM.findDOMNode(navsub).style.zIndex = "1101";
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default function SearchBox() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  /*Off fallback*/
  const closeFallBack = () => {
    let fallback = document.getElementById("fallback");
    ReactDOM.findDOMNode(fallback).style.backgroundColor = "transparent";
    ReactDOM.findDOMNode(fallback).style.zIndex = "-1";
    let navsub = document.getElementById("navsub");
    ReactDOM.findDOMNode(navsub).style.zIndex = "1101";
  };
  /*Seach box click close button*/
  const closeXSearchBox = () => {
    let searchbox = document.getElementById("searchbox");
    // searchbox.classList.add('animate__animated', 'animate__fadeOutBottomRight');
    ReactDOM.findDOMNode(searchbox).style.display = "none";
  };
  /*Click out side search box*/
  const closeSearchBox = useRef(null);
  ClickOutsideSeachBox(closeSearchBox);

  //tất cả sản phẩm
  var dataAll = useSelector((state) => state.reducerSigninSignUp.dataAll);

  React.useEffect(() => {
    const callAPI = async () => {
      try {
        dispatch(
          action2.createAction({
            type: ActionType2.IS_LOADING_LIST_PRODUCT,
            payload: true,
          })
        );
        //lấy tất cả sản phẩm
        const res = await API(`product`, "GET");
        // console.log(res.data);
        dataAll = res.data;
        dispatch(
          action.createAction({ type: ActionType.DATA_ALL, payload: res.data })
        );
        // ko hiểu sao t bắn tất cả sản phẩm lên DATA_ALL mà nó bắn vô luôn SEARCH với SUGGEST nên t bắn như 2 dòng dưới
        dispatch(action.createAction({ type: ActionType.SEARCH, payload: [] }));
        dispatch(
          action.createAction({ type: ActionType.SUGGEST, payload: [] })
        );
        dispatch(
          action2.createAction({
            type: ActionType2.IS_LOADING_LIST_PRODUCT,
            payload: false,
          })
        );
      } catch (error) {
        console.log({ ...error });
      }
    };
    callAPI();
  }, []);

  //hàm lọc mỗi khi gõ vô input
  const handleSearchInput = (e) => {
    if (e.target.value == "") {
      dispatch(action.createAction({ type: ActionType.SEARCH, payload: [] }));
    } else {
      //lọc top suggest và bắn lên store
      //lọc product và bắn lên store
      var suggest = ["male", "female", "kid"];
      var dataSearch = dataAll.filter((item, index) => {
        return (
          item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
        );
      });
      // console.log(dataSearch);
      const dataSearchSort = dataSearch.slice(0, 5);
      // console.log(dataSearchSort);
      const dataSuggestSort = suggest.filter((item, index) => {
        return item.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1;
      });
      dispatch(
        action.createAction({
          type: ActionType.SEARCH,
          payload: dataSearchSort,
        })
      );
      dispatch(
        action.createAction({
          type: ActionType.SUGGEST,
          payload: dataSuggestSort,
        })
      );
    }
  };

  //lấy data đc lọc từ input đã đc bắn lên store về
  const dataSearchList = useSelector(
    (state) => state.reducerSigninSignUp.dataSearchList
  );
  const dataSuggest = useSelector(
    (state) => state.reducerSigninSignUp.dataSuggest
  );

  //danh sách sản phẩm lọc theo search
  const listDataSearch = dataSearchList.map((item) => {
    if (item.status === 1) {
      return (
        <Grid
          item
          xs={2}
          className={classes.SearchProduct}
          onClick={() => {
            history.push(`/detailProduct/${item._id}`);
            closeXSearchBox();
            closeFallBack();
          }}
        >
          <img src={item.img} className={classes.SearchProductImg} />
          <div>{item.name}</div>
          <div style={{ color: "#757575" }}>{item.message}</div>
          <div className={classes.SearchProductPrice}>
            {item.price.toLocaleString()} đ
          </div>
        </Grid>
      );
    }
  });

  //danh sách top suggest: male, female, kid
  const listDataSuggest = dataSuggest.map((item) => (
    <div className={classes.TopSuggest}>
      {(item == "male" || item == "female" || item == "kid") && (
        <Link
          to="/listProduct"
          className={classes.TopSuggestItem}
          onClick={() => {
            dispatch(
              action2.createAction({
                type: ActionType2.CHANGE_GENDER_TYPEPRODUCT,
                payload: { gender: item, typeProduct: "shoes" },
              })
            );
            closeXSearchBox();
            closeFallBack();
          }}
        >
          {item}
        </Link>
      )}
    </div>
  ));

  //nếu người nhập bấm enter
  const handleSumbitSearch = (e, data) => {
    e.preventDefault();
    //check nếu search bằng input hoặc bấm vô top product
    if (data != undefined) {
      var dataInput = data;
    } else {
      var dataInput = e.target.searchbar.value;
    }
    // console.log(dataInput);
    if (dataInput != "") {
      //bắn lên store từ khóa tìm kiếm
      dispatch(
        action2.createAction({
          type: ActionType2.DATA_SEARCH_INPUT,
          payload: dataInput,
        })
      );
      //bắn lên store gender và type là search để biết là đang search
      dispatch(
        action2.createAction({
          type: ActionType2.CHANGE_GENDER_TYPEPRODUCT,
          payload: { gender: "search", typeProduct: "search" },
        })
      );
      localStorage.setItem("search", JSON.stringify(dataInput));
      //nếu đang ở chính trang listProduct thì reload còn ko thì chuyển trang
      if (location.pathname == "/listProduct") {
        history.go(0);
      } else {
        history.push(`/listProduct`);
      }
    }
    //tắt searchbox
    closeXSearchBox();
    closeFallBack();
  };

  const isLoading = useSelector((state) => state.reducerURL.isLoading);

  return (
    <div id="searchbox" className={classes.searchBox} ref={closeSearchBox}>
      <div className={classes.searchBoxContainer}>
        <Link to="/">
          <IconButton className={classes.linkNike}>
            <a href="#">
              <img
                alt=""
                src="https://www.logomaker.com/wp-content/uploads/2018/05/2000px-Logo_NIKE.png"
                className={classes.nike}
              />
            </a>
          </IconButton>
        </Link>

        {/*Search bar*/}
        <span className={classes.searchBarContainer}>
          <div className="animate__animated animate__fadeInBottomRight">
            <div className={classes.mainSearchBar}>
              <form onSubmit={handleSumbitSearch}>
                <IconButton className={classes.mainNavButton}>
                  <SearchIcon style={{ fill: "black" }} />
                </IconButton>
                <InputBase
                  className={classes.input}
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                  style={{ width: "80%" }}
                  onInput={(e) => {
                    handleSearchInput(e);
                  }}
                  name="searchbar"
                />
              </form>
            </div>
          </div>
        </span>

        {/*Close search box button*/}
        <span className={classes.closeSearchBoxButton}>
          <div className="animate__animated animate__fadeInDown">
            <IconButton
              className={classes.mainNavButton}
              onClick={() => {
                closeXSearchBox();
                closeFallBack();
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </span>
      </div>

      {isLoading ? (
        <div>
          <Skeleton width="100%">
            <div className={classes.popularSearch}>
              <div className="animate__animated animate__fadeInDown">
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
                  <a href="#a" className={classes.popularSearchTerms}>
                    Air Force 1
                  </a>
                </p>
                <p>
                  <a href="#a" className={classes.popularSearchTerms}>
                    Jordan
                  </a>
                </p>
                <p>
                  <a href="#a" className={classes.popularSearchTerms}>
                    Air Max
                  </a>
                </p>
                <p>
                  <a href="#a" className={classes.popularSearchTerms}>
                    Nike React
                  </a>
                </p>
              </div>
            </div>
          </Skeleton>
        </div>
      ) : (
        <div>
          {dataSearchList.length == 0 && dataSuggest.length == 0 ? (
            <div className={classes.popularSearch}>
              <div className="animate__animated animate__fadeInDown">
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
                    className={classes.popularSearchTerms}
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
                    className={classes.popularSearchTerms}
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
                    className={classes.popularSearchTerms}
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
                    className={classes.popularSearchTerms}
                    onClick={(e) => {
                      handleSumbitSearch(e, "Nike React");
                    }}
                  >
                    Nike React
                  </a>
                </p>
              </div>
            </div>
          ) : (
            <div className={classes.SearchResult}>
              <Grid container spacing={1}>
                <Grid item xs={2}>
                  <div className="animate__animated animate__fadeInDown">
                    <div className={classes.TopSuggestTitle}>
                      Top Suggestions
                    </div>
                  </div>
                  {dataSuggest.length > 0 && <div>{listDataSuggest}</div>}
                </Grid>
                {listDataSearch}
              </Grid>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
