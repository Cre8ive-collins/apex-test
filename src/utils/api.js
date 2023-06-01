import axios from "axios";


const token = 'hgk1cacvuz64';

const http = axios;
http.defaults.headers.authorization = "Bearer " + token;



const api = http.create({
    baseURL: 'https://front-end-test-http.onrender.com',
    authorization: `Bearer ${token}`,
});


api.interceptors.request.use((config) => {
    return config
},
    function (err) {
        return Promise.reject(err);
    }
)


api.interceptors.response.use((response) => {
    return response
},
    function (err) {
        return Promise.reject(err.response);
    }
)


export default api
