import * as ActionType from "../contants/contants"

const inittialState={
    dataSearchList:[],
    dataSuggest:[],
    dataAll:[],
    isloading:false
};

const searchBarReducer=(state=inittialState,{type,payload})=>{
    switch(type){
        case ActionType.DATA_ALL_LIST:
            state.dataAll=payload;
            break;
        case ActionType.DATA_SEARCH_LIST:
            state.dataSearchList=payload;
            break;
        case ActionType.DATA_SUGGEST_LIST:
            state.dataSuggest=payload;
            break;
        case ActionType.IS_LOADING:
            state.isloading=payload;
            break;
        default:break;
    }
    return {...state}
}
export default searchBarReducer;