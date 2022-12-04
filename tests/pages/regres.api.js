import BaseApi from '$root/pages/base.api';

const RegresApi = {
    register: (data) => BaseApi.post('/register', data)
}

export default RegresApi;