import { Paragraph } from "../views/atoms/index.js";
import { Layout } from "./layoutController.js";

export const TermsPageByMariePierreLessard = async () => {
    const title = "Handelsbetingelser";
    const p = Paragraph();
    p.innerText = "Lorem ipsum";
    return Layout(title, p);
};
