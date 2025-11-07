import { getCartList } from "../models/cartModel.js";
import { Layout } from "./layoutController.js";
import { orderPageViewByMariePierreLessard } from "../views/organisms/orderView.js";
import { Div, Paragraph } from "../views/atoms/index.js";

export const OrderPage = async ()=> {

    const data = await getCartList();
    console.log(data); //This returns an array.

    const arrHeaderColumns = [
        { name: "Antal", className: "boldByMariePierreLessard" },
        { name: "Produkt", className: "boldByMariePierreLessard" },
        { name: "Pris", className: "boldByMariePierreLessard" }
    ];

    const totalPrice = data.reduce((sum, item) => {
        return sum + (item?.product?.price * item?.quantity || 0);
    }, 0);
    console.log(totalPrice); //This works

    /* The following doesn't work. Undefined gets displayed instead of the view.
    const html = orderPageViewByMariePierreLessard();
    OR
    const html = Div();
    html.append(orderPageViewByMariePierreLessard());
    */
    // TESTS
    // const html = Div();
    // html.append(JSON.stringify(data)); //This works
    // const testText = Paragraph(); 
    // testText.innerText = `Samlet pris i DKK: ${totalPrice}`;
    // html.append(testText); //This works
    const html = Div();
    html.append(orderPageViewByMariePierreLessard());

    return Layout("Bestilling", html);
    
}; 