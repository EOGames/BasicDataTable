import {apiClient} from './ApiClient';

export const register = async (dataToSave = {}) => {
    // console.log('%cAPI CLIENT','color:red', apiClient);
    try {

        return apiClient().post('/register',dataToSave).then(response =>
        {
            if (response && response.data)
            {
                return response.data;
            }
            return false;
        });
    } catch (error) {
        console.log(error);
    }

}
