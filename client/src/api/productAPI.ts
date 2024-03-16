import { productApi } from "./index";
import axios from "axios";

export const addProduct = async (product) => {
    console.log("product: ", product);
    const token = localStorage.getItem("token");

    try {
        const res = await axios
            .post(productApi.ADD_PRODUCT, product, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                return res.data;
            });
        return res;
    } catch (error) {
        console.log(error);
    }
};
