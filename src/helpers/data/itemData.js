import axios from "axios";
import config from "../config";

const getAllItems = () => new Promise((resolve, reject) => {
    axios.get(`${config.baseUrl}/api/items/getAllItems`)
    .then(response => resolve(response.data)).catch(reject);
});

const getUserItems = (userId) => new Promise((resolve, reject) => {
    axios.get(`${config.baseUrl}/api/items/getItemsByUserId/${userId}`)
    .then(response => resolve(response.data)).catch(reject);
});

const createNewItem = (item) => new Promise((resolve, reject) => {
    axios.post(`${config.baseUrl}/api/items/createItem`, item)
    .then(response => resolve(response.data)).catch(reject);
});

const removeItem = (item) => new Promise((resolve, reject) => {
    axios.put(`${config.baseUrl}/api/items/removeItem/${item.itemId}`, item)
    .then(response => resolve(response.data)).catch(reject);
});

const deleteItem = (item) => new Promise((resolve, reject) => {
   axios.delete(`${config.baseUrl}/api/items/deleteItem/${item.itemId}`) 
   .then(response => resolve(response.data)).catch(reject);
});

const getFiveMostUseless = () => new Promise((resolve, reject) => {
    axios.get(`${config.baseUrl}/api/items/getFiveMostUselessItems`)
    .then(response => resolve(response.data)).catch(reject);
})

export { getAllItems, getUserItems, createNewItem, removeItem, deleteItem, getFiveMostUseless };
