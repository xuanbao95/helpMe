import React from 'react'
import { Grid, Link } from '@material-ui/core'
import  {makeStyles}  from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import * as action from "../../redux/actions/actionType"
import * as ActionType from "../../redux/contants/contants"
import { useHistory } from 'react-router-dom'


const useStyles=makeStyles((theme)=>({
    grid_main:{
maxWidth:"100%",
    },
    grid_item:{
        maxWidth:"100%"
    },
    img:{
        width:"100%"
    }
}))
export default function MenComponent(props) {
    const classes=useStyles();
    const dispatch=useDispatch();
    const history=useHistory();
    React.useEffect(()=>{
       dispatch(action.actGetProductAPI());
        
    },[])
    return (
    <div>
        <Grid container spacing={3}  className={classes.grid_main}>
        <Grid item xs={6}  className={classes.grid_item}>
            <Link
            
            onClick={()=>{
                dispatch(action.createAction({
                    type:ActionType.CHANGE_GENDER_TYPEPRODUCT,
                    payload:{gender:"male",typeProduct:"shoes"}
                }));
                history.push("/listProduct")
            }}
            >
            <img src={props.dataTrending.slice(0,1).map((item)=>{
                return item.img
            })} atl="" className={classes.img}/>
            </Link>
            
        </Grid>
        <Grid item xs={6}  className={classes.grid_item}>
        <img src={props.dataMoreNike.slice(0,1).map((item)=>{
                return item.img
            })} atl="" className={classes.img}/>
        </Grid>
        </Grid>
    </div>
    )
}
