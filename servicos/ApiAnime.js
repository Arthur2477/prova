import axios from "axios";

const apiDeputados = axios.create({
    baseURL: "https://api.jikan.moe/v4/"
})

export default apiDeputados