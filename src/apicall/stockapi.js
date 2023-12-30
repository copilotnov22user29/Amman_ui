import axios from "axios";

export const getStocks = async () => {
    const response = await axios.get("http://localhost:4000/stocks");
    return response.data;
};