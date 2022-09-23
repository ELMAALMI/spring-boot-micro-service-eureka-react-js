import axios from 'axios';
import { Concour } from '../@types/Concour';

export const findAllConcours = async () => {
    try {
        const res = await axios.get('/api/concours');
        if (res.status == 200) {
            return res.data;
        }
        return [];
    } catch (e) {
        console.log(e);
    }
};
export const createConcour = async (data: any) => {
    try {
        const res = await axios.post('/api/concours', { data });
        return res.status == 200;
    } catch (e) {
        console.log(e);
    }
};
