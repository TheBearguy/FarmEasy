import { authApi } from "./index";
import axios from "axios";

export const login = async (data: { email: string; password: string }) => {
    try {
        const response = await axios
            .post(authApi.LOGIN, data)
            .then((response) => {
                return response.data;
            });
        if (response.message) {
            const token = response.data.token;

            return response.data.user;
        }
    } catch (error) {
        console.log(error);
    }
};

export const signup = async (data) => {
    console.log("data", data);
    try {
        const response = await axios
            .post(authApi.SIGNUP, data)
            .then((response) => {
                return response.data;
            });
        if (response.message) {
            const token = response.data.token;

            return response.data.user;
        }
    } catch (error) {
        console.log(error);
    }
};
