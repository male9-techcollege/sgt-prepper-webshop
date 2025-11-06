import { getToken } from "./auth.js";

/* Asynchronous function: it must be called by another asynchronous function */
// request() kan bruges til både GET, POST, PUT og DELETE requests
export const request = async (url, method = "GET", body = {}) => {
    if (!url) throw new Error("Missing URL");

    const token = getToken();

    /* body (the form body) isn't allowed when there is a GET request, so workaround necessary: */
    const hasBody = body !== undefined && body !== null && method !== "GET";

    const options = {
        method,
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            /* ... : spread operator 
            ? = optional-chain operator (after token); it checks if accessToken exists
            If so, it adds a key-value chain to this object, and this will be sent to the API.
            (The API requires a token to exist for selected products (in basket) to be posted to the database.) 
            The following is how you use a bearer token. */
            ...(token?.accessToken ? { Authorization: `Bearer ${token.accessToken}` } : {})
        },
        ...(hasBody ? { body: JSON.stringify(body) } : {})
    };

    try {
        const response = await fetch(url, options);
        /* Comment from version 5 of the app:
        When I am on the home page, this returns the value .../undefined, but no error :
        url: "http://localhost:4000/api/products/undefined"
        After I click on a menu item, the returned value is .../name-of-category */
        // console.log(response);
        const result = await response.json();
        /* This does return an array with 5 categories. */
        // console.log(result);
        /* return is necessary, otherwise the fetched info doesn't get out of this scope */
        return result;
    } catch (error) {
        /* This prints an error if the wrong user name or password is used in the login form.
        It is the server that returns this error. It's not a problem with the coding. */
        console.error(error);
    };
};