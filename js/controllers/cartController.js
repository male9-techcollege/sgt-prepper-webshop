import { Paragraph } from "../views/atoms/index.js";
import { Layout } from "./layoutController.js";

export const CartPageByMariePierreLessard = async () => {
    const title = "Indkøbskurv";
    const p = Paragraph();
    p.innerText = "Du valgte de følgende varer.";
    return Layout(title, p);
};

/* TO DO: probably delete after codealong
My attempt to put info from details page into local storage, and then in cart page */
// const savedToBasketByMariePierreLessard = () => {

// };
/* TO DO: if not covered by codealong 
        obj = {
            id: input_id,
            value: input_value,
        };

        // With the following, every entry in each field was saved in the array. A new entry in the same field didn't overwrite the objects previously created in the same input. 
        localStorage.setItem("husk", JSON.stringify(obj));

*/