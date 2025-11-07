// My earlier exercise:
// import { Paragraph } from "../views/atoms/index.js";
// import { Layout } from "./layoutController.js";
// export const CartPageByMariePierreLessard = async () => {
//     const title = "Indkøbskurv";
//     const p = Paragraph();
//     p.innerText = "Du valgte de følgende varer.";
//     return Layout(title, p);
// };


import { getCartList, removeFromCart } from "../models/cartModel.js";
import { isLoggedIn } from "../services/auth.js";
import { Div } from "../views/atoms/index.js";
import { cartListView, cartListHeaderView, cartTotalView } from "../views/organisms/cartViews.js";
import { Layout } from "./layoutController.js";

export const CartPage = async () => {
    /* This is to avoid leading the user to a blank page. It tells the user that they need to log in to see their cart. */
    if (!isLoggedIn()) {
        location.href = "/index.htm#/login";
        /* return false; is to avoid an error message if the token is expired 
        If this is omitted, the code and this conditional statement will still be run, which causes the error. 
        If this wasn't an asynchronous function, the return false would be unnecessary, but I still don't understand why.
        Heinz spent enough time explaining this part. I had a hard time getting it. 
        Return only gets you out of block scope in this case, not the local scope, but the boolean value FALSE stops the rest of the code (in local scope) from running. */
        return false;
    };
    // console.log(isLoggedIn());

    const data = await getCartList();

    const arrHeaderColumns = [
        /* Tailwind styling: 
        { name: "Antal", className: "w-[5%] font-bold" },
        { name: "Produkt", className: "w-[60%] font-bold" },
        { name: "Pris", className: "w-[20%] font-bold" },
        { name: "Handling", className: "w-[10%] font-bold" }
        */
        { name: "Antal", className: "boldByMariePierreLessard" },
        { name: "Produkt", className: "boldByMariePierreLessard" },
        { name: "Pris", className: "boldByMariePierreLessard" },
        { name: "Handling", className: "boldByMariePierreLessard" }
    ];

    const totalPrice = data.reduce((sum, item) => {
        return sum + (item?.product?.price * item?.quantity || 0);
    }, 0);

    /* This is in the controller function because this function returns the layout, not the arguments arrHeaderColumns, data and totalPrice.
    (Technically, that is view code, but there are time constraints.) */
    const colouredCartContainerByMariePierreLessard = Div("colouredCartContainerByMariePierreLessard");
    colouredCartContainerByMariePierreLessard.append(cartListHeaderView(arrHeaderColumns), cartListView(data), cartTotalView(totalPrice));

    /* I considered making this a form element, but it doesn't make sense since I don't want to make a POST request yet.
    The cart page is supposed to lead to the order page with buyer's address, shipping-fee calculation, etc. */
    const cartListContainerByMariePierreLessard = Div("cartListByMariePierreLessard");
    cartListContainerByMariePierreLessard.append(colouredCartContainerByMariePierreLessard);
    /* cartListContainerByMariePierreLessard is an argument. See the parameter called container in the 
    function expression attachCartListEvents. */
    attachCartListEvents(cartListContainerByMariePierreLessard);

    /* Codealong said: 
    const html = Div();
    html.append(cartListHeaderView(arrHeaderColumns));
    html.append(cartListView(data));
    html.append(cartTotalView(totalPrice));

    return Layout("Indkøbskurv", html);
    */

    return Layout("Indkøbskurv", cartListContainerByMariePierreLessard);
};

const attachCartListEvents = (container) => {
    // console.log(container);
    const deleteBtns = container.querySelectorAll("button[data-cartid]");
    // This prints a node list:
    // console.log(deleteBtns);
    console.log(deleteBtns[0]);

    /* Troubleshoooting:
    Writing 
    Array.from(deleteBtns).forEach
    did not help. */
    deleteBtns.forEach((btn) => {
        // console.log(btn);
        btn.addEventListener("click", (e) => {
            console.log(e.target);
            // console.log(e.target.dataset.cartid);
            const cartId = e.target.dataset.cartid;
            console.log(cartId);
            removeFromCart(cartId);
        });
    });
};

export function vatCalculationByMariePierreLessard(totalPrice) {
    /* 20% of the total incl. tax = sum of purchases + 25% VAT */
    let vat = totalPrice * 0.2;
    return vat;
};