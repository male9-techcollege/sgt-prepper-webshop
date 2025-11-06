/* Heinz asked us to do the following exercise, which is based on the cookie guide on GitHub.
We have to replace the session storage from the codealong by cookie storage. 

Bo explained that the reason why cookies are used instead of session storage, even though the latter is more secure, is that 
cookies allow the user to stay logged in and therefore log in automatically when they visit the site again.
You can't do that with session storage.
However, it is best to put personal data in local storage instead of putting it in the cookie.

In this case, the log-in screen welcomes the user by using his/her name, and Heinz said that the exercise consists
in only changing the auth.js file. If I do what Bo discussed, I have to change loginController.js too, 
so the sensitive personal data is in the cookie in this case! */

/* VERSION OF CODEALONG WITH SESSION STORAGE: 

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
    console.log(location);
    // If the location given by the console says that location (hash property) is the current URL, then all you need to do is a reload the browser window.
    // If the location given is not the current URL, then you have to give a URL to redirect the user to that page.
    // In this case, the URL given is the current URL. 
    
    // In v6, this was here. See clearToken for current location. 
    // location.reload();
};

export const getToken = () => {
    return getSessionItem("sgtprepper_token");
};

export const setToken = (token) => {
    setSessionItem("sgtprepper_token", token);
};

export const clearToken = () => {
    deleteSessionItem("sgtprepper_token");
    location.reload();
};

export const isTokenExpired = (accessToken) => {
    if (!accessToken) {
        return true;
    };

    try {
        // JSON.parse converts the token to a string
        // atob is a JS function that converts ASCII characters to binary
        // With accessToken.split, the payload gets pulled out; the date is inside. The string is split at a period, with means that an array is returned. [1] means that index 1 becomes the constant called payload in this case. 
        const payload = JSON.parse(atob(accessToken.split(".")[1]));
        // console.log(payload.exp);
        // In JS, time is counted in milliseconds, so x1000; new is necessary, or you just get the current date. 
        // This console log indicates when the token expired. 
        // console.log(new Date(payload.exp * 1000));
        
        if (payload.exp && payload.exp * 1000 < Date.now()) {
            // console.log(`Token expired: ${new Date(payload.exp * 1000)}`);
            return true;
        };
        
        return false;
    } catch (error) {
            console.error(error);
    };
};

export const isLoggedIn = () => {

    const token = getToken();
    // console.log("Tjek om brugeren er logget ind");
    // console.log(token);

    // If there is no token
    if (!token?.accessToken) {
        return false;
    };

    // If token is expired 
    if (isTokenExpired(token.accessToken)) {
        clearToken();
        return false;
    };

    return true;
};
*/

/* The purpose of the following is to save the server's response (a token and additional info) after the user successfully logs in. */
export const setSessionItemByMariePierreLessard = (name, value) => {
    /* The following worked, but that is not the exercise because I need to stringify the token object and make it the value
    to do the assignment as described.
    
    accessToken is the first property in the object represented by the parameter value. Source: Postman

    const token = value.accessToken;
    const cookieExpirationByMariePierreLessard = 8 * 60 * 60; // 8 timer i sekunder
    document.cookie = `${name}=${token}; max-age=${cookieExpirationByMariePierreLessard}; path=/; SameSite=Strict`;
    */

    const tokenByMariePierreLessard = JSON.stringify(value);
    const cookieExpirationByMariePierreLessard = 60 * 60; // 1 time i sekunder 
    document.cookie = `${name}=${tokenByMariePierreLessard}; max-age=${cookieExpirationByMariePierreLessard}; path=/; SameSite=Strict`;
};

export const getSessionItemByMariePierreLessard = name => {

    try {
        const cookieToFindByMariePierreLessard = name + "=";

        /* .split() creates an array of strings out of a string.
        "The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array."
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
        */
        const cookies = document.cookie.split(';');

        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            /* "The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present."
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf 
            
            0 is the index of accepted-all-cookies */
            if (cookie.indexOf(cookieToFindByMariePierreLessard) === 0) {
                /* Syntax (...)
                substring(indexStart) 
                substring(indexStart, indexEnd)
                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
                */
                /* "The length data property of a String value contains the length of the string in UTF-16 code units."
                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length */
                //This returns the value in the 1st key-value pair (not very safe to put that in the console since it's a token!)
                // console.log(cookie.substring(cookieToFindByMariePierreLessard.length)); 

                const cookieValueByMariePierreLessard = cookie.substring(cookieToFindByMariePierreLessard.length);
                const cookieObjectByMariePierreLessard = JSON.parse(cookieValueByMariePierreLessard);

                return cookieObjectByMariePierreLessard;
            };
        };
    } catch (error) {
        console.log(error);
        return null;
    };
};

export const deleteSessionItemByMariePierreLessard = (name) => {
    /* Log out within a tenth of a second by replacing the cookie with this one */
    document.cookie = `${name}=;  max-age=0.1; path=/; SameSite=Strict`
    console.log(location);
    /* If the location given by the console says that location (hash property) is the current URL,
    then all you need to do is a reload the browser window. 
    If the location given is not the current URL,
    then you have to give a URL to redirect the user to that page.
    In this case, the URL given is the current URL. */
    /* In v6, this was here. See clearToken for current location. 
    location.reload();
    */
};

export const getToken = () => {
    return getSessionItemByMariePierreLessard("sgtprepper_token");
};

export const setToken = (token) => {
    setSessionItemByMariePierreLessard("sgtprepper_token", token);
};

/* clearToken is used to log out */
export const clearToken = () => {
    deleteSessionItemByMariePierreLessard("sgtprepper_token");
    location.reload();
};

export const isLoggedIn = () => {

    const token = getToken();
    // console.log("Tjek om brugeren er logget ind");
    // console.log(token);

    /* If there is no token */
    if (!token?.accessToken) {
        return false;
    };

    return true;
};