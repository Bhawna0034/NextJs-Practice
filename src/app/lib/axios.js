import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

// Get Method

export const getUser = () => {
    return api.get("/users");
}
