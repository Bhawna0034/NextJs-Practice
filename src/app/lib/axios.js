import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

// Get Method
export const getUser = () => {
    return api.get("/users");
}

// Post Method
export const postUser = (user) => {
    return api.post("/users", user);
}

// Delete Method
export const deleteUser = (id) => {
    return api.delete(`/users/${id}`);
}

// Put Method
export const updateUser = (id, user) => {
    return api.put(`/users/${id}`, user);
}
