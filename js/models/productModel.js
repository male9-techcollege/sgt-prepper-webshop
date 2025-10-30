import { request } from "../services/fetch.js";

export const getList = async (category) => {
    const url = `http://localhost:4000/api/products/${category}`;
    const data = await request(url);
    /* Until the user clicks on a menu item, the array returned by getList is empty.
    That means that the hope page shows nothing. */
    // console.log(data);
    return data;
};

export const getDetails = async (product) => {
    /* Since a slug is used, not an ID, byId is a misnomer, but the app is programmed that way. */
    const url = `http://localhost:4000/api/products/byId/${product}`;
    // console.log(product);

    const data = await request(url);
    /* Until the user clicks on a menu item, the array returned by getList is empty.
    That means that the hope page shows nothing. */
    // console.log(data);
    return data;
};
