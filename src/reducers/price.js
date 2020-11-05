import { GET_CURRENT_PRICE, GET_CURRENT_PRICE_RESULT } from "../actions/types";

const initialState = {
    prices: {},
    isGetCurrentPrice: false,
    getCurrentPriceMessage: "",
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_CURRENT_PRICE: {
            return Object.assign({}, state, {
                prices: action.payload,
            });
        }
        case GET_CURRENT_PRICE_RESULT: {
            return Object.assign({}, state, {
                isGetCurrentPrice: action.result,
                getCurrentPriceMessage: action.message,
            });
        }
        default:
            return state;
    }
};