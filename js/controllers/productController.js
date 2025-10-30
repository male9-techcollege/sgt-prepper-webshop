/* NOTE: I tried to create a home page that doesn't display a category, but I wasted my time.
It is IMPOSSIBLE to accomplish with this API.
Heinz made a few changes to the API that provides products by category, but there seems to be a bug. 
It's not accessible with our credentials or something:
Error message:
'tsx' is not recognized as an internal or external command,
operable program or batch file.
*/

/* In earlier version(s) of codealong */
// import { Paragraph } from "../views/atoms/index.js";

import { getList, getDetails } from "../models/productModel.js";
import { Div } from "../views/atoms/index.js";
import { ProductListView, ProductDetailsView } from "../views/organisms/productViews.js";
import { Layout } from "./layoutController.js";

export const ProductPage = () => {
    /* This function creates a home page that shows a default category.
    The default cat. is set in constant/function ProductList */
    /* Heinz actually wrote the following, but category isn't used below (yet), and it woks without it. */
    const { category = "vand-og-vandrensning", product } = Object.fromEntries(new URLSearchParams(location.search));

    let html = "";

    /* Failed attempt (by me) to create home page like in Figma. This could not work, both because of the API, and because
    this does show the home page, but menu no longer works.
    On top of the API problem, I think that, since "else if" only gets applied if the first condition is false,
    it never happens because the 1st condition is always true (browser might disreguard the GET parameters).    
    let home = new URL("http://127.0.0.1:5501/index.htm");
    if (home) {
        html = HomePage();
    } else if (!product) {
        html = ProductList();
    } else {
        html = ProductDetails(product);
    };
    */

    if (!product) {
        html = ProductList();
    } else {
        html = ProductDetails(product);
    };

    return html;
};

/* This used to be called ProductPage in version 5 */
export const ProductList = async () => {

    // console.log(location);
    /* The following finds the key-value pair where the property is search.
    It is the function getList that returns the data in which this can be found. */
    // console.log(location.search);
    // console.log(Object.fromEntries(new URLSearchParams(location.search)));
    /* = "vand-og-vandrensning" : default category in codealong */
    const { category = "vand-og-vandrensning" } = Object.fromEntries(new URLSearchParams(location.search));
    // console.log(category);

    // Bygger produktliste
    const data = await getList(category);
    /* In an earlier version, until the user clicked on a menu item, the array returned by getList was empty.
    That meant that the home page showed nothing. */
    // console.log(data);

    /* forEach() didn't work; map() did */
    const formattedProducts = data.map(item => ({
        /* spread operator 
        ...item gets everything that I was listed for each item in the original array
        */
        ...item,
        /* Syntax: how do ternary operators work? 
        "The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy."
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
        */
        /* This is an additon to the original array */
        stockText: item.stock ? "På lager" : "Forventes på lager indenfor 1-2 uger",
        /* If the item is in stock, the lettering is green. If not, it is red. */
        /* Tailwind styling */
        // stockClass: item.stock ? "text-green-600" : "text-red-600"
        /* My conversion to CSS  */
        stockClass: item.stock ? "greenAndBoldByMariePierreLessard" : "redAndBoldByMariePierreLessard"
    }));
    // console.log(formattedProducts);

    const html = ProductListView(formattedProducts, category);

    //Samler og returnerer side layout
    const layout = Layout("Produkter", html);
    return layout;

    /* From earlier version of codealong: 
    This is view code, but the codealong is so short that "pyt med det"! 
    const title = "Se vores produkter";
    const p = Paragraph();
    p.innerText = "Lister over produkter";
    return Layout(title, p);
    */
};

export const ProductDetails = async (product) => {

    const data = await getDetails(product);
    /* There is an error here in the codealong video. */
    // console.log(product);

    const html = ProductDetailsView(data);
    const layout = Layout("Produkt", html);

    return layout;
};