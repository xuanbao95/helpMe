import * as Actiontype from "../contants/contants";
const GenderAndTypeProduct = JSON.parse(localStorage.getItem("GenderAndTypeProduct"))
let initialState = {
  typeProduct: GenderAndTypeProduct?.typeProduct,
  gender: GenderAndTypeProduct?.gender,
  data: [],
  isLoading: false,
};

const productReducers = (state = initialState, { type, payload }) => {
  switch (type) {

    case Actiontype.GET_LIST_PRODUCT:
      console.log(payload);
      state.data = payload;

      break;

    case Actiontype.IS_LOADING_PRODUCT:
      state.isLoading = payload;
      break
    default:
      break;
  }
  return { ...state };
};

export default productReducers;
