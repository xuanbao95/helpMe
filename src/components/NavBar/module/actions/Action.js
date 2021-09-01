import * as ActionType from "../contants/contants";
// import API from "../../../../../../Axios/API";
// import { notifiSuccess, notifiError } from "../../../../../../utils/MyToys";
import "react-toastify/dist/ReactToastify.css";

// export const emitOpenAction = (open) => {
//   return {
//     type: ActionType.REDUX,
//     data: open,
//   };
// };
// export const emitOpenSignup = (openSU) => {
//   console.log(openSU);
//   return {
//     type: ActionType.SIGNUP,
//     data: openSU,
//   };
// };

export const createAction = ({ type, payload }) => {
  return {
    type,
    payload,
  };
};

// export const fetchApiLoginUser = (data) => {
//   // console.log(data);
//   // console.log('fetchApiLoginUser', data);
//   return async (dispatch) => {
//     try {
//       const res = await API("users/login", "POST", data);
//       dispatch(
//         createAction({ type: ActionType.FETCH_API_LOGIN, payload: res.data })
//       );
//       // set isAdmin if admin
//       if (res.data.user.userType === 'admin') {
//         dispatch(
//           createAction({ type: ActionType.SET_ADMIN, payload: true })
//         )
//         localStorage.setItem("isAdmin", true);
//       }
//       else{
//         localStorage.removeItem("isAdmin");
//       }
//       // localStorage.setItem("isAdmin", true);
//       localStorage.setItem("user", JSON.stringify(res.data));
//       notifiSuccess(res.data.messager);

//       const userLocal = JSON.parse(localStorage.getItem("user"));
//       const favorLocal = userLocal?.user.productsFavorite;
//       localStorage.setItem("userFavor", JSON.stringify(favorLocal));
//     } catch (error) {
//       notifiError("Login fail");
//       // console.log({...error});
//     }
//   };
// };

// export const fetchAiSignUpUser = (data) => {
//   return async (dispatch) => {
//     try {
//       const res = await API("users/create", "POST", data);
//       notifiSuccess("create success");
//       dispatch(emitOpenAction({ type: ActionType.REDUX, data: true }));
//       dispatch(emitOpenSignup(false));
//       // console.log(res);
//     } catch (error) {
//       notifiError(error.response.data.error);
//       // console.log({...error});
//     }
//   };
// };
