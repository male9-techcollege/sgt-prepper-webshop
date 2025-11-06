import { Div, Paragraph, Button, Form } from "../atoms/index.js";
import { FormGroup } from "../molecules/index.js";
/* v6 of codealong said: */
// import { deleteSessionItem } from "../../services/auth.js";
import { clearToken } from "../../services/auth.js";

export const LoginFormView = () => {
    const form = Form('POST');

    /* My addition to improve styling */
    form.className = "flexedFormByMariePierreLessard";

    const username = FormGroup('Brugernavn: ', 'username', 'Indtast dit brugernavn', 'text');
    const password = FormGroup('Adgangskode: ', 'password', 'Indtast dit password', 'password');
    const button = Button('Send');
    form.append(username, password, button);
    return form;
};

export const UserInfoView = (user) => {
    const elementByMariePierreLessard = Div("flexedFormByMariePierreLessard");
    const pByMariePierreLessard = Paragraph();
    pByMariePierreLessard.innerText = `Velkommen ${user.firstname} ${user.lastname}`;
    const button = Button("Log ud", "button");
    button.addEventListener("click", () => {
        // From version 6
        // deleteSessionItem("sgtprepper_token");
        clearToken();
    });
    elementByMariePierreLessard.append(pByMariePierreLessard, button);
    return elementByMariePierreLessard;
};