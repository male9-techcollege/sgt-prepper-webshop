/* The following is a different login than in the previous version. */

import { Authenticate } from "../models/loginModel.js";
/* From v6 of codealong */
// import { deleteSessionItem, getSessionItem, setSessionItem } from "../services/auth.js";
import { getToken, setToken } from "../services/auth.js";
import { LoginFormView, UserInfoView } from "../views/organisms/loginView.js";
import { Layout } from "./layoutController.js";

export const LoginPage = () => {
    // console.log(getSessionItem("sgtprepper_token"));
    /* The following (from v6 of codealong) was good enough as a first example,
    but it won't work if the name changes. So it is best to check if the user is logged in or not (true or false). */
    // if (getSessionItem("sgtprepper_token")) {
    /* if (getToken()) means if getToken's result is true */
    if (getToken()) {
        // First basic version (only with a h2 and a button)
        // console.log("Bruger er logget ind");
        // return Layout('Brugerprofil', button);

        /* V6 of codealong said: */
        // const token = getSessionItem("sgtprepper_token");
        const token = getToken();
        // console.log(token.user);

        /* Postman gives the following token:
        {
            "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjI0MzQ3OTYsImRhdGEiOnsiaWQiOjF9LCJpYXQiOjE3NjI0MzExOTZ9.mDIT1PE34rI8GMYNXC2sm616n1b8PsfHLJPYIYaWMl0",
            "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjI1MTc1OTYsImRhdGEiOnsiaWQiOjF9LCJpYXQiOjE3NjI0MzExOTZ9.0br2wAFS4B36gaYPPR7oe6pCGFa7_XP9o3kQmN2wYVg",
            "user": {
                "id": 1,
                "firstname": "Admin",
                "lastname": "Admin"
            }
        }

        The value of user is an object. It is this object that is accessed by:
        token.user (below).

        As a consequence, as I replace session storage by a cookie, getToken() still needs to return an object, 
        or I need to change sth here. Heinz said that the assignment is only to change auth.js! 
        */

        const html = UserInfoView(token.user);
        return Layout("Din side", html);

    } else {
        // console.log("Bruger er ikke logget ind");

        const element = LoginFormView();

        /* Event listener */
        element.addEventListener('submit', (e) => {
            handleLogin(e)
        });

        return Layout('Log ind', element);
    };

};

export const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(e);
    const form = e.currentTarget;
    /* Shows as HTML */
    console.log(form);
    /* Shows as a JS object */
    console.dir(form);

    /* Trim is very handy. Some forms don't have it, and then user gets error when cutting and pasting */
    const username = form.username.value.trim();
    const password = form.password.value.trim();

    if (username && password) {
        const data = await Authenticate(username, password);
        /* This prints the token and other info to console if login is successful. */
        // console.log(data);

        /* accessToken is a property in the string returned by the server */
        if (data.accessToken) {
            /* From v6 of codealong */
            // setSessionItem("sgtprepper_token", data);
            /* Same issue: this is to avoid having the name of the session that was set (here) */
            setToken(data);
            /* This is a synchronous update. */
            location.href = "./index.htm";
        };
    };
};

