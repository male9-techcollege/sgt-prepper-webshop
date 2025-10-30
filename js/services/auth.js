/* The purpose of the following is to save the server's response (a token and additional info) after the user successfully logs in. */
export const setSessionItem = (name, value) => {
    sessionStorage.setItem(name, JSON.stringify(value));
};

export const getSessionItem = name => {
    try {
        const value = sessionStorage.getItem(name);
        return value ? JSON.parse(value) : null;
    } catch (error) {
        console.log(error);
        return null;
    };
};

export const deleteSessionItem = (name) => {
    sessionStorage.removeItem(name);
    /* If the location given by the console says that location (hash property) is the current URL,
    then all you need to do is a reload the browser window. 
    If the location given is not the current URL,
    then you have to give a URL to redirect the user to that page.
    In this case, the URL given is the current URL. */
    console.log(location);
    /* In v6, this was here: */
    // location.reload();
};

export const getToken = () => {
    return getSessionItem("sgtprepper_token");
};

export const setToken = (token) => {
    setSessionItem("sgtprepper_token", token);
};

/* TO DOs left in this file */

export const clearToken = () => {
    deleteSessionItem("sgtprepper_token");
    location.reload();
};

