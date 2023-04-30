import { apiClient } from "./ApiClient";

const GetData = async ()=>
{
    try {
        
        const response = await apiClient().get('/'); 
        return response;
    } catch (error) {
        return(error);
    }
}
export default GetData;