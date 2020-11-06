import { GET_CURRENT_PRICE, GET_CURRENT_PRICE_RESULT } from "./types";
import { getCurrenPrice } from "../services/index";

function getPrices(prices) {
    return {
        type: GET_CURRENT_PRICE,
        payload: prices,
    };
};

function getPricesResult(result, message) {
    return {
        type: GET_CURRENT_PRICE_RESULT,
        result: result,
        message: message,
    };
};

export const getCurrentPriceFromApi = () => {
    return async (dispatch) => {
        dispatch(getPricesResult(null, ""));
        try {
            const response = await getCurrenPrice();
            dispatch(
                getPricesResult(true, "Current price bilgileri alındı.")
            );
            return dispatch(getPrices(response.data.bpi));
        } catch (err) {
            let errorMessage = "Current price bilgileri alınamadı, lütfen tekrar deneyin.";
            return dispatch(getPricesResult(false, errorMessage));
        }
    };
};
