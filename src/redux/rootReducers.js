import { combineReducers } from "redux";
import reducer from "./reducers/productReducers"
import listProductReducer from "../components/ListProductComponent/module/reducers/listProductReducer"
import searchBarReducer from  "../components/NavBar/module/reducers/SearchBarReducer";
import cartReducer from "../components/Cart/Module/reducer/CartReducer"
const rootReducers = combineReducers({
    reducer,
    listProductReducer,
    searchBarReducer,
    cartReducer,
})
export default rootReducers;