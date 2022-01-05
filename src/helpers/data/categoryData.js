import axios from "axios";
import config from "../config";

const getUserCategories = (userId) => new Promise((resolve, reject) => {
    axios.get(`${config.baseUrl}/api/categories/getCategoriesByUserId/${userId}`)
    .then(response => resolve(response.data)).catch(reject);
});

const createCategory = (category) => new Promise((resolve, reject) => {
    axios.post(`${config.baseUrl}/api/categories/createCategory`, category)
    .then(response => resolve(response.data)).catch(reject);
});

const getCategoryById = (categoryId) => new Promise((resolve, reject) => {
    axios.get(`${config.baseUrl}/api/categories/getCategoryById/${categoryId}`)
    .then(response => resolve(response.data)).catch(reject);
});

const deleteCategory = (categoryId) => new Promise((resolve, reject) => {
    axios.delete(`${config.baseUrl}/api/categories/deleteCategory/${categoryId}`)
    .then(response => resolve(response.data)).catch(reject);
});

export { getUserCategories, createCategory, getCategoryById, deleteCategory };