
import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import API from "../../Axios/API"
import { Hidden } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import  AppBar  from '@material-ui/core/AppBar'
import * as action from "./module/action/action"
import * as ActionType from "./module/contans/contants"
import  ListProductMain  from './ListProduct/ListProductMain'
import ListProductFilter from "./ListProduct/ListProductFilter"
import {makeStyles} from "@material-ui/core/styles"
const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: 44,
        marginBottom: 44,
        padding: "0 20px",
        [theme.breakpoints.down("sm")]: {
            padding: 0,
        },
    },
    Head: {
        padding: "15px 0 12px",
        backgroundColor: "white",
        display: "block",
        color: "black",
        boxShadow: "none",
        zIndex: 1,
    },
    FilterButton: {
        float: "right",
        display: "flex",
        alignItems: "center",
    },
    SearchName: {
        fontSize: 24,
        display: "inline-block",
    },
    HideFilter: {
        fontSize: 16,
        paddingRight: 25,
        display: "flex",
        alignItems: "center",
        border: "none",
        outline: "none",
        cursor: "pointer",
        backgroundColor: "white",
    },
    IconFilter: {
        marginLeft: 8,
        width: 16,
        height: 16,
    },
    SortBy: {
        fontSize: 16,
        padding: "0 6px",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        border: "none",
        outline: "none",
        backgroundColor: "white",
    },
    SortByItemContainer: {
        padding: "24px 28px 15px 0",
        textAlign: "right",
        position: "absolute",
        right: 0,
        zIndex: 2,
        width: 160,
        backgroundColor: "white",
    },
    SortByItem: {
        lineHeight: 1.75,
    },
    SortByLink: {
        color: "black",
        textDecoration: "none",
        "&:hover": {
            color: "#757575",
        },
        FilterButton: {
            float: 'right',
            display: 'flex',
            alignItems: 'center',
        },
        SearchName: {
            fontSize: 24,
            display: 'inline-block',
        },
        HideFilter: {
            fontSize: 16,
            paddingRight: 25,
            display: 'flex',
            alignItems: 'center',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            backgroundColor: 'white',
        },
        IconFilter: {
            marginLeft: 8,
            width: 16,
            height: 16,
        },
        SortBy: {
            fontSize: 16,
            padding: '0 6px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            border: 'none',
            outline: 'none',
            backgroundColor: 'white',
        },
        SortByItemContainer: {
            padding: '24px 28px 15px 0',
            textAlign: 'right',
            position: 'absolute',
            right: 0,
            zIndex: 2,
            width: 160,
            backgroundColor: 'white',
        },
        SortByItem: {
            lineHeight: 1.75,
        },
        SortByLink: {
            color: 'black',
            textDecoration: 'none',
            "&:hover": {
                color: '#757575',
            },
            fontSize: 16,
        },
        ListProductContainer: {
            paddingTop: 32,
        },
        fontSize: 16,
    },
    ListProductContainer: {
        paddingTop: 32,
    },
}));
export default function ListProductComponent(props){
    const classes=useStyles();
    const dispatch=useDispatch();
    const data=useSelector((state)=>state.listProductReducer.data);
    const dataFilter=useSelector(state=>state.listProductReducer.dataFilter);
    console.log(data)
    const [HideFilter,setHideFilter]=useState(false)
    const [SortBy,setSortBy]=useState(false)
    // const GenderAndTypeProduct={
    //     "gender":gender,
    //     "typeProduct":typeProduct,
    // }
    // const GenderAndTypeProduct=JSON.parse(localStorage.getItem("GenderAndTypeProduct"))
    const gender=useSelector((state)=>state.listProductReducer.gender);
    const typeProduct=useSelector((state)=>state.listProductReducer.typeProduct);
    console.log(gender);
 const dataSearch=useSelector(state=>state.listProductReducer.dataSearch);
 const dataInput=useSelector(state=>state.listProductReducer.dataInput);
    React.useEffect(()=>{
        const callAPI=async()=>{
           
                try{
                    if(gender==="search"&&typeProduct==="search"){
                        const res=await API(
                            "product",
                            "GET"
                        );
                        const dataAll=res.data;
                            const dataSearchList=dataAll.filter((item)=>{
                                return item.name.toLowerCase().indexOf(dataInput.toLowerCase()>-1)
                            });
                            dispatch(action.createAction({
                                type:ActionType.GET_DATA,
                                payload:dataSearchList,
                            }))
                    }else{
                        dispatch(action.createAction({
                            type:ActionType.IS_LOADING,
                            payload:true,
                        }))
                        const res=await API(
                            `product`,
                            "GET",
                        )
                        dispatch(action.createAction({
                            type:ActionType.GET_DATA,
                            payload:res.data,
                        }));
                        
                        dispatch(action.createAction({
                            type:ActionType.IS_LOADING,
                            payload:false,
                        }));
                        localStorage.setItem("GenderAndTypeProduct",JSON.stringify({gender:gender,typeProduct:typeProduct}));
                    }
                   
                }catch(er){
                    console.log({...er})
                }
                return(
                    dispatch(action.createAction({
                        type:ActionType.CHANGER_TYPEPRODUCT_GENDER,
                        payload:{gender:null,typeProduct:null}
                    }))
                )
                
            
        }
        callAPI();
    },[gender,typeProduct])     
const filterColor=useSelector(state=>state.listProductReducer.filterColor);
const filterSize=useSelector(state=>state.listProductReducer.filterSize);
const sortByTitle=useSelector((state)=>state.listProductReducer.SORT_TITLE)
//tạo hàm filter size và color
const handleFilter=(filter)=>{
    //tạo arr rỗng mới
    var FilterData=[];
    //push dử liệu vài filter
    for(var i=0;i<data.length;i++){
        FilterData.push(data[i])
    }
    dispatch(action.createAction({
        type:ActionType.FILTER_DATA,
        payload:FilterData
    }))
//filter color trước
if(filter===""){
    dispatch(action.createAction({
        type:ActionType.FILTER_DATA,
        payload:FilterData,
    }))
}else{
    if(FilterData){
        if(filterColor.length>0){
            for(var i=0;i<filterColor.length;i++){
                var color=FilterData.filter((item)=>{
                    for(var j=0;j<item.imgDetails.length;j++){
                        var colorSlit=item.imgDetails[j].color.split("/");
                        for(var n=0;n<colorSlit.length;n++){
                            if(colorSlit[n]===filterColor[i]){
                                return item;
                            }
                        }
                    }
                })
            }
            FilterData=color;
            dispatch(action.createAction({
                type:ActionType.FILTER_DATA,
                payload:FilterData
            }));
        }
      
        if(filterSize.length>0){
            for(var i=0;filterSize.length;i++){
                var size=FilterData.filter((item)=>{
                    for(var j=0;j<item.sizes.length;j++){
                        if(item.sizes[j].sizes===filterSize[i]){
                            return item;
                        }
                    }
                })
                FilterData=size;
                dispatch(action.createAction({
                    type:ActionType.FILTER_DATA,
                    payload:FilterData,
                }))
            }
        
        }
       
    }
}

}
   const handleLowHigh=()=>{
       const datasort=[];
       for (let i=0;i<dataFilter.length;i++){
        datasort.push(dataFilter[i]);
       }
       datasort.sort((a,b)=>(a.price>b.price?1:-1));
       dispatch(action.createAction({
           type:ActionType.FILTER_DATA,
           payload:datasort
       }))
       dispatch(action.createAction({
        type:ActionType.SORT_TITLE,
        payload:"Low High"
    }))
   }
   const handleHighLow=()=>{
       const dataHigh=[];
       for (let i=0;i<dataFilter.length;i++){
           dataHigh.push(dataFilter[i]);
       }
       dataHigh.sort((a,b)=>(a.price>b.price?1:-1));
       dispatch(action.createAction({
           type:ActionType.FILTER_DATA,
           payload:dataHigh
       }))
       dispatch(action.createAction({
           type:ActionType.SORT_TITLE,
           payload:"High Low"
       }))
   }
   const capitalizeFirstLetter=(string)=>{
       return string.charAt(0).toUpperCase()+string.slice(1);
   }
    return(
        <div className={classes.container}>
        <AppBar position="sticky" className={classes.Head}>
            {/* {gender == 'search' && typeProduct == 'search' ?
                <div className={classes.SearchName}>
                    {dataSearchInput} ({dataSort.length})
                </div>
                :
                <div className={classes.SearchName}>
                    {capitalizeFirstLetter(gender)}'s {capitalizeFirstLetter(typeProduct)} {dataFilter.length > 0 && <span>({dataFilter.length})</span>}
                </div>
            } */}
            {/*Filter button*/}
            <Hidden smDown>
                <div className={classes.FilterButton}>
                    <button className={classes.HideFilter} onClick={() => setHideFilter(!HideFilter)}>
                        {HideFilter && <span>Show Filter</span>}
                        {!HideFilter && <span>Hide Filter</span>}
                        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/filter-1739026-1477153.png" className={classes.IconFilter} alt='' />
                    </button>
                    <div className={classes.SortByContainer}>
                        <button className={classes.SortBy} onClick={() => setSortBy(!SortBy)}>
                            Sort By{sortByTitle !== '' && <span style={{ color: '#757575' }}>: {sortByTitle}</span>}
                            {SortBy && <ExpandLessIcon />}
                            {!SortBy && <ExpandMoreIcon />}
                        </button>
                        {SortBy &&
                            <div className={classes.SortByItemContainer}>
                                <div className={classes.SortByItem}><a href="#" className={classes.SortByLink} onClick={() => handleHighLow()}>Price: High-Low</a></div>
                                <div className={classes.SortByItem}><a href="#" className={classes.SortByLink} onClick={() => handleLowHigh()}>Price: Low-High</a></div>
                            </div>
                        }
                    </div>
                </div>
            </Hidden>

            {/*Filter button mobile*/}
            {/* <Hidden mdUp>
                <ListProductButtonMobile
                    handleFilter={handleFilter}
                    handleFeatured={handleFeatured}
                    handleNewest={handleNewest}
                    handleSortLowHigh={handleSortLowHigh}
                    handleSortHighLow={handleSortHighLow}
                />
            </Hidden> */}
        </AppBar>

        <div className={classes.ListProductContainer}>
            <Grid container spacing={2}>
                {/*Filter */}
                <Hidden smDown>
                    {!HideFilter &&
                        <ListProductFilter handleFilter={handleFilter} />
                    }
                </Hidden>

                {/*List Product*/}
                {!HideFilter &&
                    <Grid item sm={12} md={10}>
                        <ListProductMain data={dataFilter} />
                    </Grid>
                }
                {HideFilter &&
                    <Grid item xs={12}>
                        <ListProductMain data={dataFilter} />
                    </Grid>
                }
            </Grid>
        </div>
    </div>
    )
}