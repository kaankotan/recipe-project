import axios from "axios"

export default axios.create(
    {
        baseURL: "https://api.spoonacular.com/",
        headers: {
            Authorization: "425ab1a595b744a99e68037ee6852f49"
        }
    }
)