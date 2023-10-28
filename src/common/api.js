import { apiUrl } from './const';
import { preparationApiUrl } from './const';
import { categoryApiUrl } from './const';

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
