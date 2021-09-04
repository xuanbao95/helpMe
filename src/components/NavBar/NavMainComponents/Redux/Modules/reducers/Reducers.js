import * as Actiontype from "../constants/Constants";
const userLocal = JSON.parse(localStorage.getItem("user"))
let initialState = {
  open: false,
  openSU: false,
  user: userLocal,
  dataAll: [],
  dataSearchList : [],
  dataSuggest: [],
  isAdmin: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actiontype.REDUX:
      // console.log(action);
      state.open = action.data;
      // console.log(state);
      break;
    case Actiontype.SIGNUP:
      console.log(action);
      state.openSU = action.data;
      break;
    case Actiontype.LOGOUT:
      state.user = action.payload;
      state.isAdmin = false;
      break;
    case Actiontype.FETCH_API_LOGIN:
      state.user = action.payload;
      state.open = false;
      break;
    case Actiontype.DATA_ALL:
      state.dataAll = action.payload;
    case Actiontype.SEARCH:
      state.dataSearchList = action.payload;
    case Actiontype.SUGGEST:
      state.dataSuggest = action.payload;
    case Actiontype.SET_ADMIN:
      state.isAdmin = action.payload;
      break;
    default:
      break;
  }
  return { ...state };
};

export default reducer;
