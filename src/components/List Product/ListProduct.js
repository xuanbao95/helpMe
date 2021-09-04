import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useState } from 'react';
import ListProductFilter from './ListProductComponents/ListProductFilter';
import ListProductMain from './ListProductComponents/ListProductMain';
import ListProductButtonMobile from './ListProductComponents/ListProductButtonMobile';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import { useSelector, useDispatch } from "react-redux";
import * as ActionType from "./module/Constants/contants"
import * as action from "./module/Actions/action"
import API from "../../Axios/API";

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

export default function ListProduct() {
    const classes = useStyles();
    const [HideFilter, setHideFilter] = useState(false);
    const [SortBy, setSortBy] = useState(false);
    const gender = useSelector(state => state.listProductReducer.gender)
    const typeProduct = useSelector(state => state.listProductReducer.typeProduct)
    const GenderAndTypeProduct = {
        "gender": gender,
        "typeProduct": typeProduct
    }

    const dispatch = useDispatch()
    const data = useSelector(state => state.listProductReducer.data);
    const dataSearchList = useSelector(state => state.listProductReducer.dataSearchList);
    const dataSearchInput = useSelector(state => state.listProductReducer.dataSearchInput);


    React.useEffect(() => {
        const callAPI = async () => {
            try {
                if (gender == 'search' && typeProduct == 'search') {
                    const res = await API(`product`, "GET")
                    const dataAll = res.data
                    const dataSearch = dataAll.filter((item, index) => {
                        return item.name.toLowerCase().indexOf(dataSearchInput.toLowerCase()) > -1
                    })
                    dispatch(action.createAction({ type: ActionType.FETCH_API_LISTPRODUCT, payload: dataSearch }))
                    // localStorage.setItem("search", JSON.stringify(dataSearchInput));
                }
                else {
                    dispatch(action.createAction({ type: ActionType.IS_LOADING_LIST_PRODUCT, payload: true }))
                    const res = await API(`product/?gender=${gender}&typeProduct=${typeProduct}`, "GET")
                    dispatch(action.createAction({ type: ActionType.FETCH_API_LISTPRODUCT, payload: res.data }))
                    dispatch(action.createAction({ type: ActionType.IS_LOADING_LIST_PRODUCT, payload: false }))
                }
                // dispatch(action.createAction({type: ActionType.CHANGE_GENDER_TYPEPRODUCT, payload: GenderAndTypeProduct}))
                localStorage.setItem("GenderAndTypeProduct", JSON.stringify(GenderAndTypeProduct));

            } catch (error) {
                console.log({ ...error });
            }
            return () => {
                dispatch(action.createAction({ type: ActionType.CHANGE_GENDER_TYPEPRODUCT, payload: { gender: null, typeProduct: null } }))
            }
        }
        callAPI()
    }, [gender, typeProduct, dataSearchList])


    // call data từ redux
    const filterColor = useSelector(state => state.listProductReducer.filterColor);
    const filterSize = useSelector(state => state.listProductReducer.filterSize);
    const dataSort = useSelector(state => state.listProductReducer.dataSort);
    const dataFilter = useSelector(state => state.listProductReducer.dataFilter);
    const sortByTitle = useSelector(state => state.listProductReducer.sortByTitle);

    const handleFilter = (filter) => {
        var SortData = []
        for (let i = 0; i < dataSort.length; i++) {
            SortData.push(dataSort[i])
        }

        dispatch(action.createAction({ type: ActionType.FILTER_COLOR_DATA, payload: dataSort }))
        //nếu bấm vô multi color thì reset
        if (filter === '') {
            dispatch(action.createAction({ type: ActionType.FILTER_COLOR_DATA, payload: data }))
        }
        else {
            if (SortData) {
                if (filterColor.length > 0) {
                    for (let i = 0; i < filterColor.length; i++) {
                        var colors = SortData.filter((item, index) => {

                            for (let j = 0; j < item.imgDetails.length; j++) {
                                const colorSplit = item.imgDetails[j].color.split('/');
                                for (let n = 0; n < colorSplit.length; n++) {
                                    if (colorSplit[n] === filterColor[i]) {
                                        return item
                                    }
                                }

                            }
                        })
                        SortData = colors;
                        dispatch(action.createAction({ type: ActionType.FILTER_COLOR_DATA, payload: colors }))
                    }
                }
                //chạy for filter size
                if (filterSize.length > 0) {
                    for (let m = 0; m < filterSize.length; m++) {
                        var sizes = SortData.filter((item, index) => {
                            for (let j = 0; j < item.sizes.length; j++) {
                                if (item.sizes[j].size === filterSize[m]) {
                                    return item
                                }
                            }
                        })
                        SortData = sizes;
                        dispatch(action.createAction({ type: ActionType.FILTER_COLOR_DATA, payload: sizes }))
                    }
                }
            }
        }
    }






    return (
        <div className={classes.container}>

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
    );
}
