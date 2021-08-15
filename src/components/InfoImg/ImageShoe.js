import React from 'react'
import * as ActionType from "./module/contants/contants"
import * as action from "./module/action/action"
import { useDispatch, useSelector } from "react-redux";
import API from "../../Axios/API"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
export const createAction = ({ type, payload }) => {
    return {
        type,
        payload,
    }
}
const useStyles = makeStyles((theme) => ({
    main: {
        maxWidth: "100%"
    },
    grid_item: {
        width: "100%",

    }
}))
export default function ImageShoe(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const gender = useSelector((state) => state.productReducers.gender);
    const typeProduct = useSelector((state) => state.productReducers.typeProduct);
    React.useEffect(() => {
        dispatch(action.actGetListProductAPI())
    }, [gender, typeProduct])
    const data = useSelector((state) => state.productReducers.data);
    console.log(data);
    const [checked, setChecked] = useState(false);
    const [isValid, setIsvalid] = useState(false);
    const [product, setProduct] = useState([data])
    console.log(product);
    const handleChange = (event) => {
        if (setChecked(event.target.checked)) {
            setProduct(data.map((item) => {
                if (item.typeProduct === "shoes" && item.gender === "male") {
                    return item;
                }
            }))
        };
    };

    const handleChangeClothing = (event) => {
        if (setIsvalid(event.target.checked)) {
            setProduct(data.map((item) => {
                if (item.typeProduct === "clothings" && item.gender === "male") {

                    return item;
                }

            }))

        };
    }
    return (
        <Grid container spacing={3} className={classes.main}>
            <Grid item xs={3}>
                <div>
                    <span>
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />:Men Shoes

                    </span>
                </div>
                <div>
                    <span>
                        <Checkbox
                            checked={isValid}
                            onChange={handleChangeClothing}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />:Men Clothings

                    </span>
                </div>

            </Grid>

            <Grid item xs={9}>

                {product.map((item) => {
                    if (item.gender === "male") {
                        return (
                            <Grid container spacing={1} className={classes.main}>
                                <Grid item xs={4} className={classes.main}>
                                    <div>
                                        <img src={item.img} alt="" className={classes.grid_item} />
                                    </div>
                                    <div>
                                        <p>{item.message}</p>
                                        <p>{item.price}</p>
                                    </div>
                                </Grid>
                            </Grid>
                        )
                    }


                })}
            </Grid>
        </Grid>
    )
}
