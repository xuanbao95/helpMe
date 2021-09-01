import * as ActionType from "../contans/contants"
const GenderAndTypeProduct=JSON.parse(localStorage.getItem("GenderAndTypeProduct"))
const inittialState={
    gender:GenderAndTypeProduct?.gender,
    typeProduct:GenderAndTypeProduct?.typeProduct,
    data:[],
    dataFilter:[],
    filterColor:[],
    filterSize:[],
    sortByTitle:"",
    dataSearch:[],
    dataInput:[],
isloading:false,
}

const listProductReducer=(state = inittialState, { type, payload })=>{
    switch(type){
        case ActionType.IS_LOADING:
            state.isloading=payload;
            break;
        case ActionType.GET_DATA:
          
            state.data=payload;
             state.dataFilter=payload;
             break;
        case ActionType.CHANGER_TYPEPRODUCT_GENDER:
            state.gender=payload.gender;
            state.typeProduct=payload.typeProduct;
            localStorage.setItem("GenderAndTypeProduct",JSON.stringify({gender:state.gender,typeProduct:state.typeProduct}));
            break;
        case ActionType.FILTER_DATA:
            state.dataFilter=payload;
            break;
        case ActionType.FILTER_COLOR:
            state.filterColor=payload.filterColor;
            break;
        case ActionType.FILTER_SIZE:
            state.filterSize=payload.filterSize;
            break;
        case ActionType.SORT_TITLE:
            state.sortByTitle=payload;
            break;
        case ActionType.DATA_SEARCH:
            state.dataSearch=payload;
            break;
        case ActionType.DATA_SEARCH_INPUT:
            state.dataInput=payload;
            break;
        default :break;

    }
    return {...state}
}
export default listProductReducer;