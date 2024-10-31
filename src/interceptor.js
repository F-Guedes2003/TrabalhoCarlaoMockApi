import axios from "axios";

const fetch = axios.create({
    baseURL: 'https:6713dd73690bf212c7600776.mockapi.io/api/v1'
});

export default fetch;