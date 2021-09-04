import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import CartBag from './CartComponents/CartBag';
import CartSummary from './CartComponents/CartSummary';
import CartFavourite from './CartComponents/CartFavourite';
import ReactDOM from 'react-dom';
import Drawer from '@material-ui/core/Drawer';
import {useSelector, useDispatch} from "react-redux";
import Container from "@material-ui/core/Container";
import Paypal from '../Paypal/paypal';
import { notifiError, notifiSuccess } from '../../utils/MyToys';
import * as action from "./module/Actions/Action";
import {useHistory} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    Container: {
        margin: '40px 0',
    },
    Cart:{
        width: 1100,
        [theme.breakpoints.down('md')]: {
            width: '92%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            // padding: '0 8px',
        },
        margin: '0px auto',
        fontSize: 16,
    },
    CloseIcon:{
        float: 'right',
        color: 'grey',
        cursor: 'pointer',
    },
    PromoCode: {
        padding: '8px 0 30px 16px',
        fontSize: 12,
    },
    PromoCodeTitle: {
        fontSize: 14,
    },
    Bag:{
        fontSize: 22,
    },
    BagMobile:{
        textAlign: 'center',
        marginBottom: 40,
        lineHeight: 1.75,
    },
    NumberItems:{
        color: '#757575',
    },
    CheckoutButton:{
        width: '100%',
        color: 'white',
        backgroundColor: 'black',
        padding: '18px 24px',
        outline: 0,
        borderRadius: 30,
        border: 'none',
        cursor: 'pointer',
        fontSize: 16,
        lineHeight: 1.75,
    },
    CheckoutMobileContainer:{
        width: '100%',
        padding: '16px 0px',
        position: 'fixed',
        bottom: 0,
        left: 0,
        backgroundColor: 'white',
    },
    MoreOptionsContainer:{
        position: 'fixed',
        width: '100%',
        bottom: 0,
        backgroundColor: 'white',
        zIndex: 2,
        display: 'none',
    },
    MoreOptionsButton:{
        width: '100%',
        color: 'white',
        backgroundColor: 'black',
        padding: '18px 24px',
        outline: 0,
        borderRadius: 30,
        border: 'none',
        cursor: 'pointer',
        fontSize: 16,
        marginBottom: 8,
        lineHeight: 1.75,
    },
    MoreOptionsCancel:{
        width: 'inherit',
        color: 'black',
        backgroundColor: 'white',
        padding: '18px 24px',
        outline: 0,
        borderRadius: 30,
        border: '1px #cccccc solid',
        cursor: 'pointer',
        fontSize: 16,
        lineHeight: 1.75,
    },
    MemberCheckoutContainer:{
        padding: 24,
    },
}));

export default function Cart(props) {
    const classes = useStyles();

    const [PromoCode, setPromoCode] = useState(true);
    const products = useSelector(state => state.reducerCart.products)
    const cancelMoreOptions = () => {
        let moreOption = document.getElementById('MoreOptionsContainer');
        ReactDOM.findDOMNode(moreOption).style.display = 'none';
    } 
    const sumMoney = products.reduce((sum,item)=>{
        return  sum + item.quantity*item.price
    },0)    
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;

    const [checkout, setCheckout] = React.useState(false);
    const dispatch = useDispatch()
    const history = useHistory();
    const checkOut = () => {
        if (!JSON.parse(localStorage.getItem("user"))) { // kiểm login 
          notifiError("please sign in before checkout");
        } else {
          if (products.length > 0) {
            setCheckout(true)
            // setOpen(true)
          }else{
            notifiError("please buy product before checkout");
          }
        }
    };
    const transactionSuccess = (data) => {
        console.log("success", data);
      //  handle data before send BE
          notifiSuccess("Payment success");
          for (const item of products) {
             delete item.sizes 
             delete item.message
          }
          const  userLocal = JSON.parse(localStorage.getItem("user"));
          const {token} = userLocal
          const object = {
            products: products,
            isPayed: data.paid,
            description: "paypal"
          }
          dispatch(action.postAPICart(object,token,history))
      }
      const transactionLive = () => {
        for (const item of products) {
          delete item.sizes 
          delete item.message
       }
       const  userLocal = JSON.parse(localStorage.getItem("user"));
       const {token} = userLocal
       const object = {
         products: products,
         isPayed: false,
         description: "Payment on delivery"
       }
       dispatch(action.postAPICart(object,token,history))
    
      }
    
      const transactionError = (data) => {
        console.log("errror", data);
        setTimeout(() => {
          notifiSuccess("Payment fail");
        }, 2000);
      }
    
      const transactionCancel = (data) => {
        console.log("errror", data);
      }
    
      const covertVNDtoUSD = () => {
        console.log(sumMoney);
        return (sumMoney / 23000).toFixed(2)
      }

    return (
        <div className={classes.Container}>
            <Container maxWidth="xl">
                <div className={classes.Cart}>
                    <Hidden mdUp>
                        <div className={classes.BagMobile}>
                            <div className={classes.Bag}>Bag</div>
                            <div>
                                <span className={classes.NumberItems}>2 Items | </span> {sumMoney.toLocaleString()}đ
                            </div>
                        </div>
                    </Hidden>
                    <Grid container spacing={2}>
                        <Grid item md={8} xs={12}>
                            {PromoCode &&
                                <div className={classes.PromoCode}>
                                    <div className={classes.CloseIcon} onClick={() => setPromoCode(!PromoCode)}><CloseIcon /></div>
                                    <div className={classes.PromoCodeTitle}>HAVE A PROMO CODE?</div>
                                    <div>If you have a promo code you will be able to apply it on the payment page during checkout.</div>
                                </div>
                            }
                            <Hidden smDown><div className={classes.Bag}>Bag</div></Hidden>

                            {/*Bag*/}
                            <CartBag />
                        </Grid>
                        <Grid item md={4} xs={12}>

                            {/*Summary*/}
                            <CartSummary />
                        </Grid>
                    </Grid>
                    
                    {/*Favourites*/}
                    <CartFavourite />
                </div>
            </Container>

            {/*Checkou button mobile*/}
            <Hidden mdUp>
                <div className={classes.CheckoutMobileContainer}>
                    <div style={{margin:'0 12px'}}>
                        <button className={classes.CheckoutButton} onClick={ () => checkOut()}>
                            Go to Checkout 
                        </button>
                    </div>
                </div>
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor="bottom"
                    open={checkout  ? true : false}
                    onClose={ () => {setCheckout(false)} }
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                   
                    <div className={classes.MemberCheckoutContainer}>
                        <Paypal
                         sum={covertVNDtoUSD()}
                         transactionSuccess={transactionSuccess}
                         transactionCancel={transactionCancel}
                         transactionError={transactionError}
                        />
                        <button className={classes.MoreOptionsButton}  onClick = {transactionLive} >
                            Member Checkout
                        </button>
                    </div>
                  
                </Drawer>
            </Hidden>
            <Hidden smUp>
                <div id="MoreOptionsContainer" className={classes.MoreOptionsContainer}>
                    <button className={classes.MoreOptionsButton}>
                        Move to Favourites
                    </button>
                    <button className={classes.MoreOptionsButton}>
                        Remove 
                    </button>
                    <button className={classes.MoreOptionsCancel} onClick={ () => cancelMoreOptions()}>
                        Cancel
                    </button>
                </div>
            </Hidden> 
                     
        </div>
    )
}
