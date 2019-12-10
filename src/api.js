import axios from 'axios'
const url = "http://localhost:8080";
export const getTransactions = () => axios.get(`${url}/transactions`);
