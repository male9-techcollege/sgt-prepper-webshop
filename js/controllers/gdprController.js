import { Paragraph } from "../views/atoms/index.js";
import { Layout } from "./layoutController.js";

export const PrivacyPolicyPageByMariePierreLessard = async () => {
    const title = "Privatlivspolitik";
    const p = Paragraph();
    p.innerText = "Lorem ipsum";
    return Layout(title, p);
};
