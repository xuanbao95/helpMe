import { combineReducers } from "redux";
import reducer from "./reducers/productReducers"
import listProductReducer from "../components/List Product/module/Reducers/reducer"
// import searchBarReducer from  "../components/NavBar/module/reducers/SearchBarReducer";
import reducerCart from "../components/Cart/module/Reducers/reducer"
const rootReducers = combineReducers({
    reducer,
    listProductReducer,
    // searchBarReducer,
    reducerCart,
})
export default rootReducers;