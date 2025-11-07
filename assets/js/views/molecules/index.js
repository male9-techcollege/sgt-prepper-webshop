/* Index file for all molecules */

import { Div, Heading, Label, Input, Ul, Li, Link, Paragraph, LinkWithImageByMariePierreLessard } from "../atoms/index.js";
/* Codealong said: 
import { cookieBanner } from "../../controllers/cookieBannerController.js";
*/
import { cookieBannerByMariePierreLessard } from "../../controllers/cookieBannerController.js";

/* className = '' means that by default, there is no class name 
Second version of app said: 
export const Header = (className = '') => {
    const header = document.createElement("header");
    header.className = className;
    const heading = Heading(1);
    heading.textContent = "Sgt. Prepper";
    header.append(heading);
    return header;
};
*/

/* Maybe TO DO: 2-row grid with hero pic in second row. */
export const HeaderView = () => {
    const element = document.createElement("header");
    /* CLI, e.g. Tailwind CLI: command-line interface.
    Example of Tailwind styling  
    bg-slate-500 is a background colour
    shadow-md : md means medium
    rounded-lg : lg means large
    p-4 : size of padding
    */
    /* The codealong said:
    element.className = "bg-slate-500 shadow-md border rounded-lg p-4 text-white flexedHeaderByMariePierreLessard";
    bg-sky-950 : oklch(29.3% 0.066 243.157)
    */
    /* My changes to get closer to the Figma design */
    element.className = "globalHeaderContainerByMariePierreLessard";

    const flexedHeaderByMariePierreLessard = Div("flexedHeaderByMariePierreLessard");
    element.append(flexedHeaderByMariePierreLessard);

    /* It doesn't seem possible to insert HTML tags into a template string using ${}. I gets converted to a string acc. to
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    Codealong said: */
    // const h1 = Heading("Sgt. Prepper", 1);
    // element.append(h1);

    const LeftSideGroupByMariePierreLessard = LinkWithImageByMariePierreLessard("/index.htm", "leftSideGroupByMariePierreLessard");
    LeftSideGroupByMariePierreLessard.innerHTML = `
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_330_1052)"><path d="M16.0051 9.7649L15.4951 10.0499L14.7151 7.6499L16.0051 9.7649Z" fill="white"/><path d="M16.9351 11.3252L16.0801 11.8052L15.6001 10.3652L16.1551 10.0352L16.9351 11.3252Z" fill="white"/><path d="M17.8799 12.8697L16.6499 13.5897L16.1699 12.1197L17.0999 11.5947L17.8799 12.8697Z" fill="white"/><path d="M18.8101 14.4303L17.2201 15.3453L16.7551 13.9053L18.0451 13.1553L18.8101 14.4303Z" fill="white"/><path d="M19.77 16.0048L17.805 17.1298L17.325 15.6598L18.99 14.7148L19.77 16.0048Z" fill="white"/><path d="M26.61 33.9L20.745 24.21H20.67C20.43 24.21 20.205 24.18 19.98 24.135C18.405 23.82 17.22 22.44 17.22 20.775C17.22 19.83 17.595 18.975 18.21 18.36L17.91 17.46L19.935 16.29L20.58 17.34C20.58 17.34 20.46 17.355 20.385 17.355C20.475 17.355 20.565 17.34 20.655 17.34C20.895 17.34 21.12 17.355 21.345 17.415C22.92 17.715 24.105 19.11 24.105 20.775C24.105 21.72 23.73 22.575 23.115 23.19L26.61 33.9Z" fill="white"/><path d="M20.9399 4.03516C30.2549 4.03516 37.8449 11.6102 37.8449 20.9402C37.8449 30.2702 30.2699 37.8452 20.9399 37.8452C11.6099 37.8452 4.03491 30.2552 4.03491 20.9402C4.03491 11.6252 11.6249 4.03516 20.9399 4.03516ZM20.9399 2.91016C10.9799 2.91016 2.90991 10.9802 2.90991 20.9402C2.90991 30.9002 10.9799 38.9702 20.9399 38.9702C30.8999 38.9702 38.9699 30.9002 38.9699 20.9402C38.9699 10.9802 30.8999 2.91016 20.9399 2.91016Z" fill="white"/><path d="M20.94 2.25C31.245 2.25 39.63 10.635 39.63 20.94C39.63 31.245 31.245 39.63 20.94 39.63C10.635 39.63 2.25 31.245 2.25 20.94C2.25 10.635 10.635 2.25 20.94 2.25ZM20.94 0C9.375 0 0 9.375 0 20.94C0 32.505 9.375 41.88 20.94 41.88C32.505 41.88 41.88 32.505 41.88 20.94C41.88 9.375 32.505 0 20.94 0Z" fill="white"/></g><defs><clipPath id="clip0_330_1052"><rect width="42" height="42" fill="white"/></clipPath></defs></svg>
        <h1>Sgt. Prepper</h1>
    `;
    flexedHeaderByMariePierreLessard.append(LeftSideGroupByMariePierreLessard);

    /* In the codealong, this was styled as follows with Tailwind:
    const p = Paragraph();
    const a = Link('/index.htm#/login', 'Login', 'block bg-slate-400 px-3 py-2 rounded-lg border border-slate-800') 
    p.append(a);
    */
    const loginLinkByMariePierreLessard = Link("/index.htm#/login", "Log ind", "loginLinkByMariePierreLessard");
    /* This was in the codealong. 
    See my additions/changes in view of meeting assignment requirements */
    // element.append(p);

    /* The following is my addition to v5 of the codealong. 
    It does create a new page, but because of the way the router works, it also leads to an error in the console: 
    See folder router, file index.js, where the innerHTML is set as null. 
    The router doesn't expect what I just added, but this is not the big assignment to deliver at the end of the week. 
    I am just experimenting/testing and understanding how this works and can be edited. */
    const cartSectionByMariePierreLessard = Link("/index.htm#/cart", "", "cartSectionByMariePierreLessard");
    /* The SVG is from FontAwesome. */
    /* TO DO: in the future, there should be sth to show the length of the array in basket, positioned over the SVG */
    cartSectionByMariePierreLessard.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M320 64C326.6 64 332.9 66.7 337.4 71.5L481.4 223.5L481.9 224L560 224C577.7 224 592 238.3 592 256C592 270.5 582.4 282.7 569.2 286.7L523.1 493.9C516.6 523.2 490.6 544 460.6 544L179.3 544C149.3 544 123.3 523.2 116.8 493.9L70.8 286.7C57.6 282.8 48 270.5 48 256C48 238.3 62.3 224 80 224L158.1 224L158.6 223.5L302.6 71.5C307.1 66.7 313.4 64 320 64zM320 122.9L224.2 224L415.8 224L320 122.9zM240 328C240 314.7 229.3 304 216 304C202.7 304 192 314.7 192 328L192 440C192 453.3 202.7 464 216 464C229.3 464 240 453.3 240 440L240 328zM320 304C306.7 304 296 314.7 296 328L296 440C296 453.3 306.7 464 320 464C333.3 464 344 453.3 344 440L344 328C344 314.7 333.3 304 320 304zM448 328C448 314.7 437.3 304 424 304C410.7 304 400 314.7 400 328L400 440C400 453.3 410.7 464 424 464C437.3 464 448 453.3 448 440L448 328z"/></svg>
    `;
    /* My additions/changes in view of meeting assignment requirements */
    const rightSideGroupByMariePierreLessard = Div("rightSideOfHeaderByMariePierreLessard");
    /* Codealong said: 
    rightSideGroupByMariePierreLessard.append(p, cartSectionByMariePierreLessard);
    */
    rightSideGroupByMariePierreLessard.append(loginLinkByMariePierreLessard, cartSectionByMariePierreLessard);
    flexedHeaderByMariePierreLessard.append(rightSideGroupByMariePierreLessard);
    /* A later codealong said the following, but the functionality is the same. My design is better.
    This just puts text where my icon is.
    const cart = Paragraph()
    const cartLink = Link('/index.htm#/cart', 'Se kurv')
    cart.append(cartLink)
    element.append(cart)
    */

    return element;
};

/* arrNavItems is an array that is sent to NavBarView by a previous function called Layout
NavBarView is exported to the same module as Layout
*/
export const NavBarView = (arrNavItems) => {
    const element = document.createElement("nav");
    /* Tailwind styling */
    /* The codealong said:
    element.className = "bg-sky-950";
    */
    element.className = "navContainerByMariePierreLessard";
    /* In Tailwind, flex isn't called a class name. It's called a utility.
    https://tailwindcss.com/docs/flex
    It makes the nav's UL horizontal. If I remove "flex", the nav is vertical. 
    UL has a className argument. 
    const ul = Ul("flex");
    */
    /* My change in view of delivering the exercise without Tailwind */
    const ul = Ul("navByMariePierreLessard");

    arrNavItems.forEach((item) => {
        /* Destructuring syntax:
        href, title are the properties in arrNavItems
        The following means that the respective values of properties href and title are the ones of each item (forEach). 
        The constant is an object in this case.

        "The destructuring syntax is a JavaScript syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables." 
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring 

        This is often done in the React framework.

        "The destructuring assignment syntax unpack object properties into variables:"
        https://www.w3schools.com/js/js_destructuring.asp

        The following is equivalent to:
        const href = item.href;
        const title = item.title;

        This is non-destructive. The value of the variable item is unchanged.
        */
        const { url, title } = item;

        const li = Li();
        /* This has to be called item1 or say menuItem. Otherwise, there are 2 variables called item. 
        Indeed, the parameter of this arrow function is called item.
        */
        /* Tailwind styling 
        const item1 = Link(url, title, `block p-4 ${item.textColor}`);
        */
        /* My change in view of delivering the exercise without Tailwind */
        const item1 = Link(url, title, `${item.textColor}`);
        li.append(item1);
        ul.append(li);
    });

    element.append(ul);
    return element;
};

/* Second version of app said: 
export const Main = (className = '') => {
    const main = document.createElement("main");
    return main;
};
*/
export const MainView = (title, content) => {
    const element = document.createElement("main");
    /* Tailwind styling plus an old addition of mine */
    // element.className = "p-4 min-h-60 wrapperByMariePierreLessard";
    element.className = "mainByMariePierreLessard";
    /* I edited this to specify the number and make it a h2 (there should only be 1 h1) */
    const h2 = Heading(title, 2);
    element.append(h2, content);

    /* Codealong said: 
    element.append(cookieBanner());
    */
    element.append(cookieBannerByMariePierreLessard());

    return element;
};

/* Second version of app said: 
export const Footer = (className = '') => {
    const footer = document.createElement("footer");
    footer.className = className;
    return footer;
};
*/
export const FooterView = (className = '') => {
    const element = document.createElement("footer");
    /* Version 3 had text and no picture */
    // element.innerHTML = "&copy; TECHCOLLEGE 2025";
    /* Codealong said:
    element.className = "h-[170px] p-4 bg-[url(./images/footer-bg.svg)] bg-center bg-no-repeat";
    */
    /* My addition/changes in view of meeting assignment requirements */
    element.className = "globalFooterByMariePierreLessard";

    const firstRowByMariePierreLessard = Div("globalFooter1stRowByMariePierreLessard");
    /* HTML validator says:
    no address element inside of a UL element */
    firstRowByMariePierreLessard.innerHTML = `
    <div>
        <address>
            <ul>
                <li>Sgt. Prepper</li>
                <li>Danmarksboulevard 9</li>
                <li>9000 Aalborg</li>
                <li>Tlf.: <a href="tel:+4599999999">+45 99 99 99 99</a></li>
                <li>E-mail: <a href="mailto:info@sgtprepper.com">info@sgtprepper.com</a></li>
            </ul>
        </address>
        <p>CVR-nr: 99 99 99 99</p>
    </div>
    <div>
        <ul>
            <li><a href="/index.htm#/terms">Handelsbetingelser</a></li>
            <li><a href="/index.htm#/privacy">Privatlivspolitik</a></li>
            <li><a href="/index.htm#/payment">Betalingsmetoder</a></li>
            <li><a href="/index.htm#/delivery">Levering</a></li>
            <li><a href="/index.htm#/returns">Returer og klager</a></li>
            <li><a href="/index.htm#/support">Support og garantiservice</a></li>
        </ul>
    </div>`;

    const secondRowByMariePierreLessard = Div("globalFooter2ndRowByMariePierreLessard");
    /* Tailwind styling */
    // secondRowByMariePierreLessard.className = "h-[170px] bg-[url(./images/footer-bg.svg)] bg-center bg-no-repeat";
    /* My change in view of delivering the exercise without Tailwind */
    element.append(firstRowByMariePierreLessard, secondRowByMariePierreLessard);

    return element;
};

export const FormGroup = (title, name, placeholder, type, value) => {
    /* Tailwind styling:
    const element = Div('mb-4') 
    Meaning:
    mb-<number>     margin-bottom: calc(var(--spacing) * <number>);
    https://tailwindcss.com/docs/margin
    */
    const element = Div();
    const label = Label(title, name);
    const input = Input(name, placeholder, type, value);
    element.append(label, input);
    return element;
};