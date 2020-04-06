import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://saojosesemfome.appspot.com/api/v1.0/sjcsemfome'
});

export default Api;