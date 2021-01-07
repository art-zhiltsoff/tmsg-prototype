import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tms-global-bf39e-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;