import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation } from "react-router-dom"
import * as ActionType from "../module/contants/contants"
import * as ActionType2 from "../../ListProductComponent/module/contans/contants";
import API from "../../../Axios/API"
import { Grid, IconButton, Link } from "@material-ui/core"
import Skeleton from "@material-ui/lab/Skeleton";
import "animate.css";
import {makeStyles} from "@material-ui/core/styles"
import  InputBase  from "@material-ui/core/InputBase";
import  CloseIcon  from "@material-ui/icons/Close";
import  SearchIcon  from "@material-ui/icons/Search";
import ReactDom from "react-dom";

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
// function ClickOutsideSeachBox(ref) {
//   useEffect(() => {
//     /**
//      * Alert if clicked on outside of element
//      */
//     function handleClickOutside(event) {
//       if (ref.current && !ref.current.contains(event.target)) {
//         ref.current.style.display = "none";
//         let fallback = document.getElementById("fallback");
//         ReactDOM.findDOMNode(fallback).style.backgroundColor = "transparent";
//         ReactDOM.findDOMNode(fallback).style.zIndex = "-1";
//         let navsub = document.getElementById("navsub");
//         ReactDOM.findDOMNode(navsub).style.zIndex = "1101";
//       }
//     }

//     // Bind the event listener
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [ref]);
// }
const createAction=({type,payload})=>{
    return{
        type,
        payload,
    }
}
export default function SearchBar(props){
    const classes=useStyles();
    const dispatch=useDispatch();
    const location=useLocation();
    const history=useHistory();
    const dataAll=useSelector(state=>state.searchBarReducer.dataAll);
   
    const isloading=useSelector(state=>state.searchBarReducer.isloading);
    React.useEffect(()=>{
        const callAPI=async()=>{
            try{
                dispatch(createAction({
                    type:ActionType.IS_LOADING,
                    payload:true,
                }))
                const res=await API(
                    "product",
                    "GET",
                )
                dispatch(createAction({
                    type:ActionType.DATA_ALL_LIST,
                    payload:res.data,
                }))
                dispatch(createAction({
                    type:ActionType.DATA_SEARCH_LIST,
                    payload:[],
                }))
                dispatch(createAction({
                    type:ActionType.DATA_SUGGEST_LIST,
                    payload:[],
                }))
                dispatch(createAction({
                    type:ActionType.IS_LOADING,
                    payload:false,
                }))
            }catch(er){
                console.log({...er});
            };
        };
        callAPI();
    },[]);
    //tao ham cho nut x
    const closeXSearchBar=()=>{
        var input=document.getElementById("searchbox");
        ReactDom.findDOMNode(input).style.display="none";
    }
    //tao ham handle input khi ng dung nhap lay du lieu vaf render ra 5 sp
    const handleInput=(e)=>{
        //danh cho ng dung nhap vo o input
        if(e.target.value==""){
            dispatch(createAction({
                type:ActionType.DATA_SEARCH_LIST,
                payload:[]
            }))
        }else{
          var dataSearchList=dataAll.filter((item)=>{
                return item.name.toLowerCase().indexOf(e.target.value.toLowerCase()>-1);
            })
             //danh cho ng dung bam vao top suggest
        let suggest=["men","women","kids"];
            let dataSuggestFilter=suggest.filter((item)=>{
                return item.toLowerCase().indexOf(e.target.value.toLowerCase()>-1); 
            })
           var dataSearchBar=dataSearchList.slice(0,5)
            dispatch(createAction({
                type:ActionType.DATA_SEARCH_LIST,
                payload:dataSearchBar,
            }));
            dispatch(createAction({
                type:ActionType.DATA_SUGGEST_LIST,
                payload:dataSuggestFilter,
            }));
        }
       
        // closeXSearchBar();  
    }
    //tao ham handle cho form truyen vao 2 tham so cho ham
    const handleSubmitSearch=(e,data)=>{
        //ko cho form tu load
        e.preventDefault();
        //xet dk data ng dung nhap va du lieu set cung
        if(data !=""){
            var dataInput=data
        }else{
            dataInput=e.target.searchbar.value;
        }
        if(dataInput!=""){
            dispatch(createAction({
                type:ActionType2.DATA_SEARCH_INPUT,
                payload:dataInput
            }));
            dispatch(createAction({
              type:ActionType2.CHANGER_TYPEPRODUCT_GENDER,
              payload:{gender:"search",typeProduct:"search"}
          }));
            localStorage.setItem("search",JSON.stringify(dataInput));
            if(location.pathname==="/listProduct"){
                history.go(0)
            }else{
                history.push("/listProduct")
            }
        }
        closeXSearchBar();
    }
    const dataSearchBar=useSelector(state=>state.searchBarReducer.dataSearchList);
    const dataSuggest=useSelector(state=>state.searchBarReducer.dataSuggest);
    //tao list search cho form
    const listDataSearch = dataSearchBar.map((item) => {
      
          return (
            <Grid
              item
              xs={2}
              className={classes.SearchProduct}
              onClick={() => {
                // history.push(`/detailProduct/${item._id}`);
                closeXSearchBar();
               
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
        
      });
      //tao list suggest 
      const listDataSuggest = dataSuggest.map((item) => (
        <div className={classes.TopSuggest}>
          {(item == "men" || item == "women" || item == "kid") && (
            <Link
              to="/listProduct"
              className={classes.TopSuggestItem}
              onClick={() => {
                dispatch(
                  createAction({
                    type: ActionType2.CHANGER_TYPEPRODUCT_GENDER,
                    payload: { gender: item, typeProduct: "shoes" },
                  })
                );
                closeXSearchBar();
               
              }}
            >
              {item}
            </Link>
          )}
        </div>
      ));
    return(
        <div id="searchbox" className={classes.searchBox} >
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
              <form onSubmit={handleSubmitSearch}>
                <IconButton className={classes.mainNavButton}>
                  <SearchIcon style={{ fill: "black" }} />
                </IconButton>
                <InputBase
                  className={classes.input}
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                  style={{ width: "80%" }}
                  onInput={(e) => {
                    handleInput(e);
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
                closeXSearchBar();
               
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </span>
      </div>

      {isloading ? (
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
          {dataSearchBar.length===0 && dataSuggest.length == 0 ? (
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
                      handleSubmitSearch(e, "Air Force 1");
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
                      handleSubmitSearch(e, "Jordan");
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
                      handleSubmitSearch(e, "Air Max");
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
                      handleSubmitSearch(e, "Nike React");
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
    )
}