import API from "../../../../Axios/API"
import axios from "axios"
import * as ActionType from "../contans/contants"
export const createAction=({type,payload})=>{
    return {
        type,
        payload
    }

    
}
const GenderAndTypeProduct=JSON.parse(localStorage.getItem("GenderAndTypeProduct"))
export const getListAPI=(gender,typeProduct)=>{
    return async (dispatch)=>{
        try{
            dispatch(createAction({
                type:ActionType.IS_LOADING,
                payload:true,
            }))
            // const res = await (
            //     .then{}
            // )
           axios.get(`https://nike0403.herokuapp.com/product`)
           .then((res)=>{
            dispatch(createAction({
                type:ActionType.GET_DATA,
               payload:res.data,
            }))
           })
            
            dispatch(createAction({
                type:ActionType.IS_LOADING,
                payload:false,
            }))
            dispatch(createAction({
                type:ActionType.CHANGER_TYPEPRODUCT_GENDER,
                payload:{gender:GenderAndTypeProduct.gender,typeProduct:GenderAndTypeProduct.typeProduct},
            }))
        }catch(er){
            console.log({...er});
        }
    }
}