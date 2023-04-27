import axios from "axios";
const chekerUrl = axios.create({
   baseURL: process.env.REACT_APP_BASE_URL,

});
export default chekerUrl;