import { Paragraph } from "../views/atoms/index.js";
import { Layout } from "./layoutController.js";

export const PaymentMethodPageByMariePierreLessard = async () => {
    const title = "Betalingsmetoder";
    const p = Paragraph();
    p.innerText = "Lorem ipsum";
    return Layout(title, p);
};
