import { Paragraph } from "../views/atoms/index.js";
import { Layout } from "./layoutController.js";

export const ReturnsAndComplaintsPageByMariePierreLessard = async () => {
    const title = "Returer og klager";
    const p = Paragraph();
    p.innerText = "Lorem ipsum";
    return Layout(title, p);
};
