import axios from 'axios';

const Cep = axios.create({
    baseURL: 'https://viacep.com.br/ws'
});

export default Cep;