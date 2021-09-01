import API from "../../Axios/API.jsx";
import * as ActionType from "../contants/contants.js";
export const createAction = ({ type, payload }) => {
  return {
    type,
    payload,
  };
};

export const actGetProductAPI = (gender, typeProduct) => {
  return async (dispatch) => {
    try {
      dispatch(createAction({type: ActionType.IS_LOADING_LIST_PRODUCT, payload: true}))
      const res = await API(
        `product/`,
        "GET"
      );
      dispatch(
        createAction({
          type: ActionType.GET_LIST_PRODUCT,
          payload: res.data,
        })
      );
      dispatch(createAction({type: ActionType.IS_LOADING_LIST_PRODUCT, payload: false}))
      localStorage.setItem("GenderAndTypeProduct", JSON.stringify({gender: gender, typeProduct: typeProduct}));
    } catch (error) {
      console.log({ ...error });
    }
  };
};
