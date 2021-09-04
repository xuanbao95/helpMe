import * as ActionType from "../Contants/Contants";
import { notifiError, notifiSuccess } from "../../../../utils/MyToys";
const cartLocal = JSON.parse(localStorage.getItem("cart"));
const userFavor = JSON.parse(localStorage.getItem("userFavor"));
const initialState = {
  products: cartLocal || [],
  productFavor: userFavor || [],
};
const checkDuplicate = (payload, arr) => {
  for (const item of arr) {
    if (
      item.id === payload.id &&
      item.color === payload.color &&
      item.size === payload.size
    ) {
      return item;
    }
  }
  return null;
};

const reducerCart = (state = initialState, { type, payload }) => {
  let productsCopy = [...state.products];
  switch (type) {
    case ActionType.ADD_TO_CARD:
      const itemAdd = checkDuplicate(payload, productsCopy);
      if (itemAdd) {
        itemAdd.quantity += 1;
      } else {
        productsCopy = [...productsCopy, payload];
      }
      state.products = productsCopy;
      localStorage.setItem("cart", JSON.stringify(state.products));
      break;
    case ActionType.REMOVE_TO_CARD:
      const itemRemove = checkDuplicate(payload, productsCopy);
      const index = productsCopy.findIndex((item) => {
        return item.id === itemRemove.id;
      });
      if (itemRemove.quantity > 1) {
        itemRemove.quantity -= 1;
      } else {
        productsCopy.splice(index, 1);
      }
      state.products = productsCopy;
      localStorage.setItem("cart", JSON.stringify(state.products));
      break;
    case ActionType.UPDATE_SIZE_COLOR:
      const { quantity, item, size } = payload;
      const itemUpdate = checkDuplicate(item, productsCopy);
      if (quantity) {
        itemUpdate.quantity = parseInt(quantity);
      } else if (size) {
        itemUpdate.size = size;
      }
      state.products = productsCopy;
      localStorage.setItem("cart", JSON.stringify(productsCopy));
      break;
    case ActionType.RESET_CART:
      state.products = payload;
      break;

      default:
      break;
  }
  return { ...state };
};

export default reducerCart;
