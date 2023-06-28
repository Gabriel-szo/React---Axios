import axios from "axios";
import { json } from "react-router-dom";

const blogFetch = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers:{
    "Content-Type": "aplication/json",
  }
});

export default blogFetch;
