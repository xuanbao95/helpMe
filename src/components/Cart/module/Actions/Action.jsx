import API from "../../../../Axios/API";
import { notifiSuccess, notifiError } from "../../../../utils/MyToys";
import * as ActionType from "../Contants/Contants";
export const createAction = ({ type, payload }) => {
  return {
    type,
    payload,
  };
};


export const postAPICart = (data, token, history) => {
  return async (dispatch) => {
    try {
      const res = await API("/cart/create", "POST", data, token);
      setTimeout(() => {
        notifiSuccess("Order successfull")
        localStorage.removeItem("cart")
        history.push("/user/order")
        dispatch(createAction({type: ActionType.RESET_CART, payload: []}))
      }, 2000);
    } catch (error) {
      notifiError("Order fail")
      console.log({ ...error });
    }
  };
};

