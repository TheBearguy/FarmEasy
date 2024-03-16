const BASE_URL =
    import.meta.env.VITE_BASE_URL || "http://localhost:3001/api/v1/users";

export const adminApi = {
    TOTAL_NUMBER_OF_FARMERS: BASE_URL + "/getTotolNoOfFarmers",
    TOTAL_NUMBER_OF_USERS: BASE_URL + "/getTotolNoOfUsers",
    TOTAL_PRODUCTS_OF_FARMERS: BASE_URL + "/getTotalProductsOfFarmers",
    ALL_USER_AND_FARMERS: BASE_URL + "/getAllUsersAndFarmers",
};
