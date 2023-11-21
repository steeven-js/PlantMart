import { apiUrl } from '../common/const';
import { preparationApiUrl } from '../common/const';
import { categoryApiUrl } from '../common/const';
import axios from 'axios';

// Exemple d'implémentation pour une requête POST
export const postData = async (url = "", donnees = {}) => {
    // Les options par défaut sont indiquées par *
    // const response = await fetch(url, {
    //     method: "POST", // *GET, POST, PUT, DELETE, etc.
    //     mode: "cors", // no-cors, *cors, same-origin
    //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: "same-origin", // include, *same-origin, omit
    //     headers: {
    //         // "Content-Type": "application/json",
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     redirect: "follow", // manual, *follow, error
    //     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //     body: JSON.stringify(donnees), // le type utilisé pour le corps doit correspondre à l'en-tête "Content-Type"
    // });
    // console.log('response', response)

    // const json = await response.text();

    // console.log('json', json)
    // return null;  

    const { data } = await axios.post(url, donnees, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    )
    console.log('data', data)
    return data;
    // console.log('data', data)
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
