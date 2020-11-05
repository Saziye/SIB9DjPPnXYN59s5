import axios from "axios";
import { API } from "../constants";
const currentprice = "/currentprice.json";

export const getCurrenPrice = () => {
    return axios.get(API + currentprice);
};
