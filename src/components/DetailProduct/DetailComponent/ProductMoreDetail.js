import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {useState} from 'react';

const useStyles = makeStyles((theme) => ({
    ProductContainer: {
        padding: '0 44px',
        fontSize: 16,
        lineHeight: 1.7,
        [theme.breakpoints.down('md')]: {
            padding: '0 8px'
        },
    },
    ProductImage: {
        width: '100%',
    },
    subDetail: {
        marginTop: '24px',
        padding: '16px',
        color: '#757575',
        textAlign: 'center',
        lineHeight: 1.75,
    },
    Detail:{
        marginTop: '24px',
        lineHeight: 1.75,
    },
    ul:{
        marginTop:32,
        marginBottom:24,
        padding: '0 0 0 20px',
    },
    viewDetail: {
        textDecoration: 'underline',
        cursor: 'pointer',
    },
    viewDetailDialog: {
        fontSize: 16,
        padding: 16,
        maxHeight: 'none',
    },
    ShipReviewContainer: {
        padding: '28px 0',
        fontSize: 20,
        cursor: 'pointer',
    },
    Button:{
        float: "right",
    },
    RateStar:{
        display: 'flex',
        alignItems: 'baseline',
    },
    RateName:{
        color: '#757575',
        marginLeft: 16,
        float: 'right',
    },
}));

export default function ProductMoreDetail() {
    const classes = useStyles();

    const [viewDetail, setViewDetail] = React.useState(false);
    const [ship, setShip] = useState(false);
    const [review, setReview] = useState(false);

    return (
        <Grid container className={classes.ProductContainer} spacing={2}>
            <Grid item xs={12}>
                <div className={classes.subDetail}>
                    This product is excluded from site promotions and discounts.
                </div>
            </Grid>
            <Grid item xs={12}>
                <div className={classes.Detail}>
                    Elevate your game with the force of OG hoops. 
                    From leather that's smoother than backboard glass to the aggressive stance that says "bring it on", 
                    it's everything you know best: crisp overlays, bold accents and the perfect amount of flash to make you shine. 
                    Its padded, mid-cut collar with the classic strap closure offers heritage styling and added support. 
                    Perforations keep you cool as you heat up the streets. It never left, but the Nike Air Force 1 Mid '07 is back.
                    
                    <ul className={classes.ul}>
                        <li>Colour Shown: White/White</li>
                        <li>Style: 315123-111</li>
                    </ul>

                    <span className={classes.viewDetail} onClick={()=>setViewDetail(!viewDetail)}>View Product Details</span>
                    <Dialog
                        open={viewDetail}
                        onClose={()=>setViewDetail(!viewDetail)}
                        PaperProps={{
                            style: {
                                maxHeight: 'none',
                            },
                        }}
                    >
                        <div className={classes.viewDetailDialog}>
                            <p>LEGENDARY STYLE STARTS FROM THE FEET.</p>
                            <p>
                                Elevate your game with the force of OG hoops. 
                                From leather that's smoother than backboard glass to the aggressive stance that says "bring it on", 
                                it's everything you know best: crisp overlays, bold accents and the perfect amount of flash to make you shine. 
                                Its padded, mid-cut collar with the classic strap closure offers heritage styling and added support. 
                                Perforations keep you cool as you heat up the streets. It never left, but the Nike Air Force 1 Mid '07 is back.
                            </p>
                            <p>
                                Benefits
                                <ul className={classes.ul}>
                                    <li>
                                        For over 35 years it's been comfort and durability straight out of the box. 
                                        From stitched overlays to pristine leather, to the cupsole design, 
                                        it's got you covered so you can wear them from the suburbs to the streets and everywhere in between.
                                    </li>
                                    <li>Originally designed for performance hoops, the Air cushioning delivers lasting comfort while the plush midsole adds to the soft ride.</li>
                                    <li>The mid-cut collar adds a sleek, streamlined look while soft padding around the ankle feels like a pillow.</li>
                                </ul>
                            </p>
                            <p>
                                Product Details
                                <ul className={classes.ul}>
                                    <li>Metal dubrae on the laces with "AF1"</li>
                                    <li>Variable-width lacing system</li>
                                    <li>Perforations on the toe and sides</li>
                                    <li>Hook-and-loop closure lets you customise styling and fit</li>
                                    <li>Non-marking rubber outsole for traction and durability</li>
                                    <li>Not intended for use as Personal Protective Equipment (PPE)</li>
                                    <li>Colour Shown: White/White</li>
                                    <li>Style: 315123-111</li>
                                    <li>Country/Region of Origin: Vietnam</li>
                                </ul>
                            </p>
                        </div>
                    </Dialog>
                </div>
            </Grid>
            <Grid item xs={12}>
                <div className={classes.ShipReviewContainer} onClick={() => {setShip(!ship); setReview(false)} }>
                    Free Delivery and Returns
                    {!ship && <ExpandMoreIcon className={classes.Button}/> }
                    {ship && <ExpandLessIcon className={classes.Button}/> }
                </div>
                {ship &&
                    <div>
                        <p>Your order of 5.000.000₫ or more gets free standard delivery.</p>
                        <p>
                            <ul className={classes.ul}>        
                                <li>Standard delivered 4-5 Business Days</li>
                                <li>Express delivered 2-4 Business Days</li>
                            </ul>
                        </p>
                        <p>Orders are processed and delivered Monday-Friday (excluding public holidays)</p>
                        <p>Nike Members enjoy free returns.</p>
                    </div>
                }
            </Grid>
            <Grid item xs={12}>
                <div className={classes.ShipReviewContainer} onClick={() => {setReview(!review); setShip(false)} }>
                    Reviews (20)
                    {!review && <ExpandMoreIcon className={classes.Button}/> }
                    {review && <ExpandLessIcon className={classes.Button}/> }
                    <span className={classes.Button}>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarHalfIcon />
                        <StarBorderIcon />
                    </span>
                </div>
                {review &&
                <div>
                    <div>
                        <p>
                            <span className={classes.RateStar}>
                                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                                <span className={classes.RateName}>A. - 30 Nov 2020</span>
                            </span>
                        </p>
                        <p>Ngon Xịn</p>
                    </div>
                    <div>
                        <p>
                            <span className={classes.RateStar}>
                                <StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon />
                                <span className={classes.RateName}>B - 30 Nov 2020</span>
                            </span>
                        </p>
                        <p>Dổm</p>
                    </div>
                </div>
                }
            </Grid>
        </Grid>
    )
}