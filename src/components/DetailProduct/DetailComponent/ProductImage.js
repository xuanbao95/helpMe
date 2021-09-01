import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles(theme => ({
  ProductContainer: {
    padding: "0 44px",
    fontSize: 16,
    lineHeight: 1.7,
    [theme.breakpoints.down("md")]: {
      padding: "0 8px"
    }
  },
  ProductImage: {
    width: "100%"
  },
  image: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  // media: {
  //   height: 760,
  // },
}));

export default function ProductImage({ detailProduct, index }) {
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const isloading = useSelector((state) => state.cartReducer.isloading);
  var listLazyLoad = [];
  for (let i = 0; i < 6; i++) {
    listLazyLoad.push(
      <Grid item xs={6}>
        <Skeleton animation="wave">
          <img className={classes.ProductImage} src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e0c08734-caa0-4021-97ec-90b6945dfadb/air-force-1-shadow-shoe-klCJXd.jpg" />
        </Skeleton>
      </Grid>
    )
  }

  return (
    <div>
      <Hidden smDown>
        {isloading ?
          <Grid container className={classes.ProductContainer} spacing={2}>
            {listLazyLoad}
          </Grid>
        :
          <Grid container className={classes.ProductContainer} spacing={2}>
            {detailProduct.imgDetails[index].imgs.map((i) => {
              return (
                <Grid item xs={6}>
                  <img className={classes.ProductImage} src={i.img} />
                </Grid>
              );
            })}
          </Grid>  
        }
      </Hidden>
      <Hidden mdUp>    
      {/* style={{padding:'0 1px'}} */}
        <Container maxWidth="xl">  
          <Slider {...settings}>
            {detailProduct.imgDetails[index].imgs.map((item) => {
              return (
                <Card className={classes.image}>
                  {isloading ?
                  <Skeleton>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      className={classes.media}
                      image={item.img}
                      title="Contemplative Reptile"
                    />
                  </CardActionArea>
                  </Skeleton>
                  :
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      className={classes.media}
                      image={item.img}
                      title="Contemplative Reptile"
                    />
                  </CardActionArea>
                  }
                </Card>
              );
            })}
          </Slider>
        </Container>
      </Hidden>
    </div>
  );
}
