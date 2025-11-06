import { request } from "../services/fetch.js";

const url = `http://localhost:4000/api/cart`;

/** Funktion til at hente kurv med
 * @returns Array
 */
export const getCartList = async () => {
    try {
        const data = await request(url);
        if (data) {
            return data;
        }
    } catch (error) {
        console.error(`Fejl i kald af indkøbskurvens model liste: ${error}`);
    };
};

/** In order to generate this comment template, you have to actuall write /** followed by Enter.
 * The asterisk is supposed to be replaced by the data type (e.g. string), and after returns, you write what the function returns.
 * 
 * Funtion til at opdatere kurv med
 * @param {number} productId
 * @param {number} quantity 
 * @returns Boolean (data isn't a boolean because of the try... catch;) 
 */
export const addToCart = async (productId, quantity) => {
    console.log({ productId }, { quantity });

    try {
        const data = await request(url, "POST", {
            productId, quantity
        });
        return data;
    } catch (error) {
        console.log(`Fejl i cart model, addToCart: ${error}`);
    };
};

/**
 * Slet linje fra kurv
 * @param {Number} id 
 */
/* Deletion method requires to follow API rules, and success can be tested in Postman; see Postman under Cart, then under Delete */
export const removeFromCart = async (id) => {
    console.log(id); //Undefined
    try {
        /* Delete is the method applied. See definition of request in fetch.js. */
        const data = await request(`${url}/${id}`, "DELETE");

        /* If the API returns a message (if this is true), then reload the location ("genindlæs"). */
        if (data.message) {
            location.reload();
        };
    } catch (error) {
        console.log(error);
    };
};