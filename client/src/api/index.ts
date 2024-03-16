const BASE_URL =
    import.meta.env.VITE_BASE_URL || "http://localhost:5001/api/v1/users";

export const adminApi = {
    TOTAL_NUMBER_OF_FARMERS: BASE_URL + "/getTotolNoOfFarmers",
    TOTAL_NUMBER_OF_USERS: BASE_URL + "/getTotolNoOfUsers",
    TOTAL_PRODUCTS_OF_FARMERS: BASE_URL + "/getTotalProductsOfFarmers",
    ALL_USER_AND_FARMERS: BASE_URL + "/getAllUsersAndFarmers",

    ADD_FERTILIZER: BASE_URL + "/postFertilizers",
};

export const authApi = {
    LOGIN: BASE_URL + "/login",
    SIGNUP: BASE_URL + "/signup",
};

export const productApi = {
    ADD_PRODUCT: BASE_URL + "/postProduct",
    GET_ALL_USER_PRODUCTS: BASE_URL + "/getAllProducts",
};