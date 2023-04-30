import axios from 'axios';
import {Backend_Url} from '../constants';

 export const apiClient = ()=>
{
    console.log( ' BACKEND URL',Backend_Url);
   return axios.create(
        {
            baseURL: Backend_Url
        }
    );

}