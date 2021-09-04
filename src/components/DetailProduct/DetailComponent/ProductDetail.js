import { classExpression } from "@babel/types";
import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ActionType from "../../Cart/module/Contants/Contants"
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Skeleton from "@material-ui/lab/Skeleton";
import SpringModal from "./Modal";
import Alert from '@material-ui/lab/Alert';
const createAction = ({ type, payload }) => {
  return {
    type,
    payload,
  }
}
const useStyles = makeStyles((theme) => ({
  ProductContainer: {
    padding: "0 44px",
    fontSize: 16,
    lineHeight: 1.7,
    [theme.breakpoints.down("md")]: {
      padding: "0 8px",
    },
  },
  ProductImage: {
    width: "100%",
  },
  ShoesType: {
    fontSize: 16,
    marginBottom: 4,
  },
  ShoesName: {
    fontSize: 28,
  },
  Price: {
    fontSize: 16,
    textAlign: "right",
  },
  Size: {
    margin: "20px 0 12px",
  },
  SelectSize: {
    fontSize: 16,
  },
  AlertSelectSize: {
    fontSize: 16,
    color: "rgb(212, 63, 33)",
  },
  SizeGuide: {
    fontSize: 16,
    color: "#757575",
    textAlign: "right",
  },
  SizeRadio: {
    position: "absolute",
    opacity: 0,
    width: 0,
    height: 0,
  },
  SizeLabel: {
    fontSize: 16,
    padding: "10px 0 10px 0",
    textAlign: "center",
    cursor: "pointer",
    borderRadius: "20px",
    "&:hover": {
      boxShadow: "0 0 0 2px black",
      borderRadius: 2,
    },
  },
  SizeLabelChecked: {
    boxShadow: "rgb(17, 17, 17) 0px 0px 0px 1px inset",
    padding: "10px 0 10px 0",
    fontSize: 16,
    padding: "10px 0 10px 0",
    textAlign: "center",
    cursor: "pointer",
    borderRadius: "20px",
  },
  AddtoBag: {
    width: "100%",
    color: "white",
    backgroundColor: "black",
    padding: "18px 24px",
    borderRadius: "30px",
    border: "none",
    outline: "none",
    cursor: "pointer",
  },
  Favorite: {
    width: "100%",
    color: "black",
    backgroundColor: "transparent",
    padding: "18px 24px",
    borderRadius: "30px",
    border: "1px #ccc solid",
    outline: "none",
    cursor: "pointer",
  },
  FavoriteBorderIcon: {
    height: 15,
  },
  ProductLink: {
    color: "black",
    textDecoration: "none",
    cursor: "pointer",
    fontSize: 16,
  },
  ProductColorway: {
    display: "none",
  },
  ProductColorwayImage: {
    width: "100px",
    height: "100px",
    border: "1px solid rgb(17, 17, 17)",
    borderRadius: "4px",
    opacity: 1,
  },
  ProductColorwayImageHide: {
    width: "100px",
    height: "100px",
    borderRadius: "4px",
    opacity: 0.8,
  },
  CheckSize: {
    boxShadow: "rgb(212, 63, 33) 0px 0px 0px 1px",
    padding: "1px",
    borderRadius: "4px",
  },
  AlertSize: {
    margin: "20px 0px"
  },
  AddtoBagNotAllow: {
    cursor: "not-allowed",
    width: "100%",
    color: "white",
    backgroundColor: "black",
    padding: "18px 24px",
    borderRadius: "30px",
    border: "none",
    outline: "none",
  },
}));
export default function ProductDetail(props) {
  const classes = useStyles();
  const { detailProduct } = props;

  const { getIndex } = props;
  const { indexPress } = props;
  const [size, setSize] = useState("");
  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  //tao object hung du lieu dua len local store
  const product = {
    id: detailProduct._id,
    name: detailProduct.name,
    message: detailProduct.message,
    sizes: detailProduct.sizes,
    //size do ng dung chon
    size: size,
    price: detailProduct.price,
    quantity: 1,
    color: detailProduct.imgDetails[indexPress].color,
    img: detailProduct.imgDetails[indexPress].imgs[indexPress].img,
  }
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleChange = (e) => {
    const { value } = e.target;
    setSize(value);
  }
  const checkSize = () => {
    if (size === "") {
      setFlag(true);
      return;
    }
    setFlag(false)
  }
  const addToBag = () => {
    if (size) {
      handleOpen();
      dispatch(createAction({
        type: ActionType.ADD_TO_CARD,
        payload: product,
      }))
    }
  }

  const listSize = detailProduct.sizes.map((item, index) => {
    return (
      <Grid item xs={4} key={index}>
        <label>
          <input
            type="radio"
            name="box"
            className={classes.SizeRadio}
            onChange={handleChange}
          />
          <div
            className={size === item.size ? classes.SizeLabelChecked : classes.SizeLabel}
          >
            {item.size}
          </div>
        </label>
      </Grid>
    )

  });
  const isloading = useSelector(state => state.reducerCart.isloading);
  const listSizeLazyLoad = detailProduct.sizes.map((item, index) => {
    <Grid item xs={4} key={index}>
      <Skeleton>
        <label>
          <input
            type="radio"
            name="box"
            className={classes.SizeRadio}
            onChange={handleChange}
          />
          <div
            className={size === item.size ? classes.SizeLabelChecked : classes.SizeLabel}
          >
            {item.size}
          </div>
        </label>
      </Skeleton>

    </Grid>
  })
  return (
    <Grid container className={classes.ProductContainer} spacing={2}>
      <Grid item xs={4}>
        {isloading ?
          <Skeleton>
            <div>
              Men's Shose
            </div>
          </Skeleton>
          : <div className={classes.ShoesType}>
            Men's Shose
          </div>
        }
        {isloading ?
          <Skeleton>
            <div>
              Men's Shose
            </div>
          </Skeleton>
          :
          <div className={classes.ShoesName}>
            {detailProduct.name}
          </div>
        }
      </Grid>
      <Grid item xs={4}>
        {isloading ?
          <Skeleton><div>{detailProduct.price.toLocaleString()}</div></Skeleton> :
          <div>{detailProduct.price.toLocaleString()}</div>
        }
      </Grid>
      {detailProduct.imgDetails.map((item, index) => {
        return (
          <Grid item xs={4}>
            {isloading ?
              <Skeleton><img key={index} src={item.imgs[0].img} className={classes.ProductColorwayImage} /></Skeleton>
              :
              <img key={index} src={item.imgs[0].img} className={indexPress === index ? classes.ProductColorwayImage : classes.ProductColorwayImageHide}
                onClick={() => {
                  getIndex(index)
                }}
              />

            }
          </Grid>

        )
      })}
      <Grid item xs={12}>
        <Grid container className={classes.Size} spacing={2} className={flag ? classes.CheckSize : ""}>
          <Grid item xs={6}>
            {isloading ? <Skeleton width="100%"><span>Select Size</span></Skeleton> : <span>Select Size</span>}
          </Grid>
          <Grid item xs={6} className={classes.SizeGuide}>
            {isloading ? <Skeleton width="100%"><span>Select Guide</span></Skeleton> : <span>Select Guide</span>}
          </Grid>
          {isloading ? listSizeLazyLoad : listSize}
        </Grid>
        {flag && (
          <Alert severity="error" className={classes.AlertSize}>
            Please Chosen Size
          </Alert>
        )}
      </Grid>
      <Grid item xs={12}>
        {isloading ?
          <Skeleton width="100%"><button className={classes.AddtoBag}>Add To Bag</button></Skeleton>
          : <button
            className={classes.AddtoBag}
            onClick={() => {
              addToBag();
              checkSize();
            }}
          >Add To Bag</button>
        }
      </Grid>
      <Grid item xs={12}>
        {isloading ?
          <Skeleton>
            <button className={classes.Favorite}>Favorite</button>
          </Skeleton>
          : <button className={classes.Favorite}>Favorite</button>
        }
      </Grid>
      <SpringModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        product={product}
      />
    </Grid>
  )
};