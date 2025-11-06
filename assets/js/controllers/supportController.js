import { Paragraph } from "../views/atoms/index.js";
import { Layout } from "./layoutController.js";

export const SupportAndWarrantyPageByMariePierreLessard = async () => {
    const title = "Support og garantiservice";
    const p = Paragraph();
    p.innerText = "Lorem ipsum";
    return Layout(title, p);
};
