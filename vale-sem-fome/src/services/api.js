import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://saojosesemfome.appspot.com/api/v1.0/sjcsemfome'
});

export default Api;