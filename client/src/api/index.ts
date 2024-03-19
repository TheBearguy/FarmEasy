const BASE_URL =
    import.meta.env.VITE_BASE_URL || "https://caffeine-crew-xesh.onrender.com/api/v1/users";

export const adminApi = {
    TOTAL_NUMBER_OF_FARMERS: BASE_URL + "/getTotolNoOfFarmers",
    TOTAL_NUMBER_OF_USERS: BASE_URL + "/getTotolNoOfUsers",
    TOTAL_PRODUCTS_OF_FARMERS: BASE_URL + "/getTotalProductsOfFarmers",
    ALL_USER_AND_FARMERS: BASE_URL + "/getAllUsersAndFarmers",

    ADD_FERTILIZER: BASE_URL + "/postFertilizers",
    GET_ALL_FERTILIZERS: BASE_URL + "/getAllFertilizers",
};

export const authApi = {
    LOGIN: BASE_URL + "/login",
    SIGNUP: BASE_URL + "/signup",
    GET_CURRENT_USER: BASE_URL + "/getCurrentUserDetails",
};

export const productApi = {
    ADD_PRODUCT: BASE_URL + "/postProduct",
    GET_ALL_USER_PRODUCTS: BASE_URL + "/getAllProducts",
};

export const farmerApi = {
    GET_FARMER_PRODUCTS: BASE_URL + "/getFarmerProducts",
    GET_ALL_FERTILIZERS: BASE_URL + "/getAllFertilizers",
};