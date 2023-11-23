import { apiUrl } from '../common/const';
import { preparationApiUrl } from '../common/const';
import { categoryApiUrl } from '../common/const';
import axios from 'axios';

// Exemple d'implémentation pour une requête POST
export const postData = async (url = "", donnees = {}) => {
    try {
        const { data } = await axios.post(url, donnees, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log('data', data);
        return data;
    } catch (error) {
        console.error('Error in postData:', error);
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
        }
        throw error; // Rethrow the error to maintain the error chain.
    }
};


export const getOnePlant = async (id = 0) => {
    try {
        const response = await fetch(`${apiUrl}/${id}`);
        const data = await response.json();
        return data;
        // console.log(`https://plantmed.jsprod.fr/api/plante/${id}`, response)
    } catch (error) {
        console.error(error);
        return { error: true };
    }
};

export const getOnePrepa = async (id = 0) => {
    try {
        const response = await fetch(`${preparationApiUrl}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return { error: true };
    }
};

export const getOneCategory = async (id = 0) => {
    try {
        const response = await fetch(`${categoryApiUrl}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return { error: true };
    }
};
