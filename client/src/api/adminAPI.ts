import { adminApi } from "./index";
import axios from "axios";

export const getCard = async () => {
    try {
        const total_farmer = await axios
            .get(adminApi.TOTAL_NUMBER_OF_FARMERS, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                return response.data;
            });

        const total_users = await axios
            .get(adminApi.TOTAL_NUMBER_OF_USERS, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                return response.data;
            });

        const total_products = await axios
            .get(adminApi.TOTAL_PRODUCTS_OF_FARMERS, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                return response.data;
            });

        return {
            total_farmer,
            total_users,
            total_products,
        };
    } catch (error) {
        console.log(error);
    }
};

export const getUser = async () => {
    try {
        const all_user_and_farmer = await axios
            .get(adminApi.ALL_USER_AND_FARMERS, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                return response.data;
            });

        return all_user_and_farmer;
    } catch (error) {
        console.log(error);
    }
};

export const getFertilizer = async () => {
    try {
        const token = localStorage.getItem("token");

        const all_fertilizers = await axios
            .get(adminApi.GET_ALL_FERTILIZERS, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                return response.data;
            });

        return all_fertilizers;
    } catch (error) {
        console.log(error);
    }
}