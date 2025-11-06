import { cookieBannerView } from "../views/organisms/cookieBannerView.js";

/* The function cookieBanner below (from the codealong) does NOT set a cookie. It saves to local storage, 
and it's buggy. The banner reappears on every page.

export const cookieBanner = () => {

    const KEY = "cookieConsent";
    const getConsent = () => {
        JSON.parse(localStorage.getItem(KEY) || null);
    };
    const setConsent = (c) => {
        localStorage.setItem(KEY, JSON.stringify(c));
    };
    const saved = getConsent();
    console.log(saved); //This prints undefined (ERROR) even though string is saved to local storage

    const banner = cookieBannerView();

    const all = banner.querySelector("#cookie-acceptall");
    const some = banner.querySelector("#cookie-acceptsome");

    if (!saved) {
        banner.style.display = "block";
    };

    all.addEventListener("click", () => {
        setConsent({ acceptedAll: true });

        banner.style.display = "none";
    });

    some.addEventListener("click", () => {
        setConsent({ acceptedAll: false });

        banner.style.display = "none"; //This was missing in the code along. Obviously necessary!
    });

return banner;
};
*/
/* Buttons no longer work if I place banner in body... 
Indeed, there is no container in which to put the event listeners.
Bo said that apps of this type are never in body. They are in an element inside of body. */
export const cookieBannerByMariePierreLessard = () => {

    const banner = cookieBannerView();

    const all = banner.querySelector("#cookie-acceptall");
    const some = banner.querySelector("#cookie-acceptsome");

    /* If a cookie exists, the banner display has to be suppressed. */
    const cookieExistsByMariePierreLessard = getConsentByMariePierreLessard("accepted-all-cookies");

    if (cookieExistsByMariePierreLessard) {
        banner.style.display = "none";
    };

    function getConsentByMariePierreLessard(name) {
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
                console.log(cookie.substring(cookieToFindByMariePierreLessard.length)); //This returns the value in the 1st key-value pair
                return cookie.substring(cookieToFindByMariePierreLessard.length);
            };
        };
        return null;
    };

    all.addEventListener("click", () => {
        setConsentByMariePierreLessard("accepted-all-cookies", "true");

        banner.style.display = "none";
    });

    some.addEventListener("click", () => {
        setConsentByMariePierreLessard("accepted-all-cookies", "false");

        /* This was missing in the code along. Obviously necessary! */
        banner.style.display = "none";
    });

    /* max-age is newer and better than expires.
    max-age is given in seconds
    expires is given in milliseconds
    "Note: Expires has been available for longer than Max-Age, however Max-Age is less error-prone, and takes precedence when both are set. The rationale behind this is that when you set an Expires date and time, they're relative to the client the cookie is being set on. If the server is set to a different time, this could cause errors."
    https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies 
    
    This being said, the code to implement (from the guide) only works with expires! 
    It is because max-age functions differently (and is easier to use):
    max-age only accepts integers, for the n of s from the time the cookie was set.

    The following code (with expires) did work.
    cookieExpiration.setTime(cookieExpiration.getTime()); basically finds the current date and time.
    Ref.: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime

    function setConsentByMariePierreLessard(name, boolean, days = 28) {
        const typeOfConsent = boolean;
        const cookieExpiration = new Date();
        cookieExpiration.setTime(cookieExpiration.getTime() + days * 24 * 60 * 60 * 1000); // 28 dage i millisekunder (pga. EU-lov)
        document.cookie = `${name}=${typeOfConsent}; max-age=${cookieExpiration.toUTCString()}; path=/; SameSite=Strict`;
    };
     */
    function setConsentByMariePierreLessard(name, boolean, days = 28) {
        const typeOfConsentByMariePierreLessard = boolean;
        const cookieExpirationByMariePierreLessard = days * 24 * 60 * 60; // 28 dage i sekunder (pga. EU-lov)
        document.cookie = `${name}=${typeOfConsentByMariePierreLessard}; max-age=${cookieExpirationByMariePierreLessard}; path=/; SameSite=Strict`;
    };

    return banner;
};