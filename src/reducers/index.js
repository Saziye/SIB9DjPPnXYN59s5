import { combineReducers } from "redux";
import priceReducer from "./price";

const appReducer = combineReducers({
    price: priceReducer
});
const rootReducer = (state, action) => {
    return appReducer(state, action);
};
export default rootReducer;

