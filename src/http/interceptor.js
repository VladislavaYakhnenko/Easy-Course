import axios from "axios";

const webApi = axios.create({
    baseURL: 'https://api.wisey.app/api/v1/core',
});

webApi.interceptors.request.use(async config => {
    let token = '';

    try {
        const response = await axios.get('https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions');
        token = response.data.token;
    } catch (error) {
        console.log(error);
    }

    config.headers.Authorization = `Bearer ${token}`;
    return config;
}, error => {
    return Promise.reject(error);
});

webApi.interceptors.response.use(response => {
    return response;
}, error => {
    switch (error.response.status) {
        case 400:
            console.error("Bad Request:", error.response.data);
            break;
        case 401:
            console.error("Unauthorized:", error.response.data);
            break;
        case 403:
            console.error("Forbidden:", error.response.data);
            break;
        case 404:
            console.error("Not Found:", error.response.data);
            break;
        case 500:
            console.error("Internal Server Error:", error.response.data);
            break;
        case 503:
            console.error("Service Unavailable:", error.response.data);
            break;
        default:
            console.error("Error:", error.response.data);
    }

    return Promise.reject(error);
});

export default webApi;