import { Paragraph } from "../views/atoms/index.js";
import { Layout } from "./layoutController.js";

export const DeliveryPageByMariePierreLessard = async () => {
    const title = "Levering";
    const p = Paragraph();
    p.innerText = "Lorem ipsum";
    return Layout(title, p);
};
