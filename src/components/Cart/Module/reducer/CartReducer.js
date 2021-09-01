import * as ActionType from "../contants/contant"
const cartLocal=JSON.parse(localStorage.getItem("cart"));
const inittialState={
    product:cartLocal||[],
    isloading:false,
}
const checkDuplicate=(payload,arr)=>{
for(let item of arr){
    if(item.id===payload.id&&
        item.color===payload.color&&
        item.size===payload.size
        ){
            return item;
    }
    
}
return null
}
const cartReducer=(state=inittialState,{type,payload})=>{
    const productCopy=[...state.product];
    switch(type){
        case ActionType.IS_LOADING:
            state.isloading=payload;
            break;
        case ActionType.ADD_TO_CARD:
            const itemAdd=checkDuplicate(payload,productCopy);
            
                if(itemAdd){
                    itemAdd.quantity +=1;
                    
                }else{
                    productCopy=[...productCopy,payload];
                    
                }
                
            state.product=productCopy;
            localStorage.setItem("cart",JSON.stringify(state.product))
            console.log(state.product)
            break;
        default:break;   
    }
    return {...state}
}
export default cartReducer;