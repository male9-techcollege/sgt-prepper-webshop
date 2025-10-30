import { Fragment } from "../views/atoms/index.js";
import { HeaderView, NavBarView, MainView, FooterView } from "../views/molecules/index.js";
/* Added in 4th version: */
import { getCategoryList } from "./categoryController.js";

export const Layout = async (title, content) => {
    /* document.title refers to the <title> element, i.e. the tab text in the browser */
    document.title = title;

    /* Third version was: 
    const arrNavItems = [
        The pound sign is included in the URL.
        /produkter and /cart each are in a string in app.js 
        I added the home page myself. It wasn't in the codealong or a requirement of the assignment. 
        { href: "/index.htm", title: "Forside" },
        # til hashtag-router 
        { href: "/index.htm#/produkter", title: "Produkter" },
        I added the cart page in my assignment. 
        { href: "/index.htm#/cart", title: "Indkøbskurv" }
    ];
    */
    const arrNavItems = await getCategoryList();

    const element = Fragment();
    element.append(
        HeaderView(),
        NavBarView(arrNavItems),
        MainView(title, content),
        FooterView()
    );
    return element;
};