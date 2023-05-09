import axios from "axios";

const ApiAnimes = axios.create({
    baseURL: "https://api.jikan.moe/v4/"
})

export default ApiAnimes