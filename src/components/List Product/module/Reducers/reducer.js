import * as Actiontype from "../Constants/contants";
const GenderAndTypeProduct  = JSON.parse(localStorage.getItem("GenderAndTypeProduct"))
const search = JSON.parse(localStorage.getItem("search"))
let initialState = {
  typeProduct: GenderAndTypeProduct?.typeProduct ,
  gender: GenderAndTypeProduct?.gender ,
  filterColor : [],
  filterSize: [],
  data: [],
  dataSort: [],
  dataFilter: [],
  sortByTitle: '',
  dataSearchList: [],
  dataSearchInput: search === null ? [] : search,
  isLoading: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actiontype.CHANGE_GENDER_TYPEPRODUCT:
      // console.log(payload);
      state.gender = payload.gender;
            state.typeProduct = payload.typeProduct;
            localStorage.setItem("GenderAndTypeProduct", JSON.stringify({ gender: state.gender, typeProduct: state.typeProduct }));
            break;
    case Actiontype.FETCH_API_LISTPRODUCT:
      // console.log(payload);
      state.data = payload;
      state.dataSort = payload;
      state.dataFilter = payload;
      break;
    case Actiontype.SORT_DATA:
      state.dataSort = payload;
      break;
    case Actiontype.FILTER_COLOR_DATA:
      state.dataFilter = payload;
      break;
    case Actiontype.FILTER_COLOR:
      state.filterColor = payload.filterColor;
      break;
    case Actiontype.FILTER_SIZE:
      state.filterSize = payload.filterSize;
      break;
    case Actiontype.SORT_BY_TITLE:
      state.sortByTitle = payload;
      break;
    case Actiontype.DATA_SEARCH:
      state.dataSearchList = payload;
      break;
    case Actiontype.DATA_SEARCH_INPUT:
      state.dataSearchInput = payload;
      break
    case Actiontype.IS_LOADING_LIST_PRODUCT:
      state.isLoading = payload;
      break
    default:
      break;
  }
  return { ...state };
};

export default reducer;
