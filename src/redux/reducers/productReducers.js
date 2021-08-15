import * as Actiontype from "../contants/contants.js";
const GenderAndTypeProduct = JSON.parse(localStorage.getItem("GenderAndTypeProduct"))
let initialState = {
    typeProduct: GenderAndTypeProduct?.typeProduct,
    gender: GenderAndTypeProduct?.gender,

    data: [],

    isLoading: false,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Actiontype.IS_LOADING_LIST_PRODUCT:
            // console.log(payload);
            state.typeProduct = payload.typeProduct;
            state.gender = payload.gender;
            localStorage.setItem("GenderAndTypeProduct", JSON.stringify({ gender: state.gender, typeProduct: state.typeProduct }))
            break;
        case Actiontype.GET_LIST_PRODUCT:
            console.log(payload);
            state.data = payload;

            break;

        default:
            break;
    }
    return { ...state };
};

export default reducer;
