import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring'; // web.cjs is required for IE 11 support
import { useHistory } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import  Alert  from '@material-ui/lab/Alert';
import  CloseIcon  from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      height: 400,
      width: 500
    },
    img: {
      width: 200,
      height: 200
    },
    alert: {
      margin: "10px 0px"
    },
    iconClose: {
      cursor: "pointer"
    },
    Checkout: {
      padding: "20px 16px"
    },
    CheckoutButton: {
      width: "100%",
      color: "white",
      backgroundColor: "black",
      padding: "18px 24px",
      outline: 0,
      borderRadius: 30,
      border: "none",
      cursor: "pointer",
      fontSize: 16,
      marginBottom: 12
    }
  }));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal({handleClose,handleOpen,product,open}) {

  const classes = useStyles();
    const history=useHistory();
    setTimeout(()=>{
        handleClose();
    },10000);
    const productSum=useSelector(state=>state.cartReducer.product);
    console.log(productSum)
    const sumQuantity=productSum.reduce((sum,item)=>{
        return sum + item.quantity;
    },0)



  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
           <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={11}>
                <Alert severity="success" className={classes.alert}>Add To Bag</Alert>
            </Grid>
            <Grid item xs={1}><CloseIcon className={classes.iconClose} onClick={handleClose}/></Grid>
            <Grid item xs={6}><img src={product.img} className={classes.img}/></Grid>
            <Grid item xs={6}> 
                <Typography variant="h6" component="h6">{product.name}</Typography>
                <Typography variant="p" component="p">{product.message}</Typography>
                <Typography variant="p" component="p">Size {product.name}</Typography>
                <Typography variant="inherit" component="inherit">{product.price.toLocaleString()}</Typography>
            </Grid>
            <Grid item xs={6}>
                <div className={classes.Checkout}>
                    <button className={classes.CheckoutButton} onClick={()=>history.push("/cart")}>View bag({sumQuantity})</button>
                </div>
               
            </Grid>
            <Grid item xs={6}>
            <div>
                    <button className={classes.CheckoutButton} onClick={()=>history.push("/cart")}>Check Out</button>
                </div>
            </Grid>
           </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
    }