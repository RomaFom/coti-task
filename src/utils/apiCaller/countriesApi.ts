import axios from "axios";

const countriesApi = axios.create({
  baseURL: process.env.REACT_APP_COUNTRIES_API,
});

export default countriesApi;
