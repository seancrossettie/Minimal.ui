import axios from "axios";
import config from "../config";

const getUserCategories = (userId) => new Promise((resolve, reject) => {
    axios.get(`${config.baseUrl}/api/categories/getCategoriesByUserId/${userId}`)
    .then(response => resolve(response.data)).catch(reject);
});

export default getUserCategories;