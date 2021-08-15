import API from "../../../../Axios/API";
import * as ActionType from "../contants/contants.js";
export const createAction = ({ type, payload }) => {
  return {
    type,
    payload,
  };
};

export const actGetListProductAPI = (gender, typeProduct) => {
  return async (dispatch) => {
    try {
      dispatch(createAction({ type: ActionType.IS_LOADING_PRODUCT, payload: true }))
      const res = await API(
        `product`,
        "GET"
      );
      dispatch(
        createAction({
          type: ActionType.GET_LIST_PRODUCT,
          payload: res.data,
        })
      );
      console.log(res.data);
      dispatch(createAction({ type: ActionType.IS_LOADING_PRODUCT, payload: false }))
      localStorage.setItem("GenderAndTypeProduct", JSON.stringify({ typeProduct: typeProduct, gender: gender }))
    } catch (error) {
      console.log({ ...error });
    }
  };
};
