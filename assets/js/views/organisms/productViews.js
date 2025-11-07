//For the sake of demonstration:
// import { Layout } from "../../controllers/layoutController.js";
import { price2Dkk } from "../../utils/index.js";
// Codealong version (I removed Fragment)
// import { Fragment, Heading, Div, Link, Image, Paragraph, Form, Input, Button } from "../atoms/index.js";
import { Heading, Div, ArticleByMariePierreLessard, Link, Image, Paragraph, Form, Input, Button } from "../atoms/index.js";

export const ProductListView = (products, category) => {
    /* For the sake of demonstration: 
    const element = Div();
    element.innerText = "Produktliste";
    
    const layout = Layout("Produkter", element);
    return layout;
    */
    /* Codealong said: */
    // const element = Fragment();
    /* However, in order to get closer to Figma design, I need a styled container around the list items, so: */
    const element = Div("productListByMariePierreLessard");
    // console.log(products);
    /* My addition to get closer to Figma design (line between list items):
    An inner div with a background colour to create lines (with a gap) between list items */
    const colouredListContainerByMariePierreLessard = Div("colouredListContainerByMariePierreLessard");

    products.forEach(product => {
        // console.log(product);
        /* Case-sensitive! imageUrl, not imageURL  */
        const { imageUrl, name, price, slug, stockText, stockClass, teaser } = product;
        console.log(imageUrl);

        /* Tailwind styling from codealong
        const linkBox = Link(`?category=${category}&product=${slug}`, "", "block mb-4 p-4 border rounded flex justify-between");
        */
        const linkBox = Link(`?category=${category}&product=${slug}`);
        const articleBoxByMariePierreLessard = ArticleByMariePierreLessard("productListItemByMariePierreLessard");

        /* Tailwind styling from codealong
        const div = Div("border flex justify-between");
        */
        /* My change in view of delivering the exercise without Tailwind */
        const LeftSideGroupByMariePierreLessard = Div("leftSideFlexByMariePierreLessard");

        /* Tailwind styling */
        // const img = Image(`http://localhost:4000${imageUrl}`, name, "max-w-[200px]");
        /* My change in view of delivering the exercise without Tailwind */
        const img = Image(`http://localhost:4000${imageUrl}`, name, "productListImgByMariePierreLessard");
        img.loading = "lazy";
        LeftSideGroupByMariePierreLessard.append(img);
        /* Later codealong put the image into a div:
        const imgCol = Div("pr-4");
        imgCol.append(img);
        */

        const infoCol = Div();
        /* Codealong said h2 */
        const h3ByMariePierreLessard = Heading(name, 3);
        const p = Paragraph();
        /* innerHTML has to be used for strings, not objects */
        p.innerHTML = teaser;
        infoCol.append(h3ByMariePierreLessard, p);
        LeftSideGroupByMariePierreLessard.append(infoCol);

        /* Tailwind styling */
        // const cost = Div("text-right border");
        // This was renamed in a later codealong:
        // const priceCol = Div("shrink-0 w-[200px] text-right");
        /* My change in view of delivering the exercise without Tailwind */
        const priceCol = Div("productListCostContainerByMariePierreLessard");
        /* Later codealong addition: 
        Tailwind styling 
        const priceText = Paragraph("text-xl font-bold");
        */
        const priceText = Paragraph();
        /* The string template is my addition to meet assignment requirements */
        // priceCol.innerText = `${price2Dkk(price)}, inkl. moms`;
        priceText.textContent = `${price2Dkk(price)}, inkl. moms`;
        /* This is to show whether or not there are stocks left without giving the number of items left. */
        const stockElm = Paragraph(stockClass);
        stockElm.innerText = stockText;
        //Earlier codealong said: 
        //priceCol.append(stockElm);
        priceCol.append(priceText, stockElm);

        articleBoxByMariePierreLessard.append(LeftSideGroupByMariePierreLessard, priceCol);
        linkBox.append(articleBoxByMariePierreLessard);

        /* Codealong said: */
        // element.append(linkBox);
        colouredListContainerByMariePierreLessard.append(linkBox);
    });

    element.append(colouredListContainerByMariePierreLessard);
    return element;
};

/* There are differences between my version and the codealong.
I want to keep the button directly below the price with my existing styling. */
export const ProductDetailsView = (product) => {
    const { id, imageUrl, name, price, description, stock } = product;
    // console.log(product);

    /* Tailwind styling 
    const element = Div("flex");
    Later styling:
    const element = Div("flex justify-between gap-4 p-4 border rounded-lg");
    Div has a className argument. */
    /* My change in view of delivering the exercise without Tailwind.
    I also replaced the div by an article for SEO purposes. */
    const element = ArticleByMariePierreLessard("productDetailsByMariePierreLessard");
    /* Tailwind styling */
    // const img = Image(`http://localhost:4000${product.imageUrl}`, name, "max-w-[250px]");
    /* My change in view of delivering the exercise without Tailwind */
    const img = Image(`http://localhost:4000${product.imageUrl}`, name, "productDetailsImgByMariePierreLessard");
    element.append(img);
    /* Later codealong put the image into a div:
    const imgCol = Div("shrink-0 w-[300px]");
    imgCol.append(img);
    */

    /* Tailwind styling 
    const infoCol = Div("flex-1 min-w-0");
    */
    /* infoCol used to be called div1 */
    const infoCol = Div("infoColByMariePierreLessard");
    /* My exercise: */
    const descriptionOneByMariePierreLessard = Div();
    const descriptionTwoByMariePierreLessard = Div();
    const descriptionThreeByMariePierreLessard = Div();

    /* Tailwind styling 
    const h3 = Heading(name, 3, 'font-bold mb-2');
    */
    const h3ByMariePierreLessard = Heading(name, 3);
    const p = Paragraph();
    p.innerHTML = description;

    /* In codealong, this was in infoCol: 
    infoCol.append(h3, p);
    */
    descriptionOneByMariePierreLessard.append(h3ByMariePierreLessard, p);
    infoCol.append(descriptionOneByMariePierreLessard);

    /* My additions in view of meeting assignment requirements */
    /* There are no shipping restrictions given for each product in the db.
    Since shipping fees are included in the price, this shop cannot be shipping to the whole world.

    It is a legal requirement to add shipping restrictions, if any. 
    */
    const shippingRestrictionsByMariePierreLessard = Paragraph();
    shippingRestrictionsByMariePierreLessard.innerText = "Webshoppen leveres kun til adresser i Danmark. Kontakt kundeservice for at få varer leveret til udenlandske adresser.";
    descriptionTwoByMariePierreLessard.append(shippingRestrictionsByMariePierreLessard);
    infoCol.append(descriptionTwoByMariePierreLessard);

    /* The following showed the number left in stock, but I need to go a bit further by obscuring the number and showing text.
    stockElm.innerText = stock; 
    */
    const stockElmByMariePierreLessard = Paragraph();
    stockElmByMariePierreLessard.innerText = stockElmTextByMariePierreLessard();
    stockElmByMariePierreLessard.className = stockElmClassByMariePierreLessard();
    descriptionThreeByMariePierreLessard.append(stockElmByMariePierreLessard);

    /* Info for testing purposes: LifeStraw Personal Filter: 120 left in stock */
    function stockElmTextByMariePierreLessard() {
        if (stock == 0) {
            return "Ikke på lager";
        } else {
            return "På lager";
        };
    };

    function stockElmClassByMariePierreLessard() {
        if (stock == 0) {
            const red = "redAndBoldByMariePierreLessard";
            return red;
        } else {
            const green = "greenAndBoldByMariePierreLessard";
            return green;
        };
    };

    const priceSection = Paragraph("productDetailsPriceByMariePierreLessard");
    /* The string template is my addition to meet assignment requirements.
    Assignment says shipping fees are included in the price. */
    /* Legal requirement/mandatory:
    "Det er desuden et krav at det fremgår på prisen om den er ekslusiv eller inklusiv afgifter og leveringsomkostninger."
    https://moodle.techcollege.dk/course/section.php?id=282509
    There can't be anything between the price and the button.
    (See also 2.2 in TC's Guide for webshops).
    */
    priceSection.innerHTML = `<strong>${price2Dkk(price)}</strong>, inkl. moms og fragtudgifter`;
    /* Codealong said: 
    infoCol.append(priceSection);
    */
    descriptionThreeByMariePierreLessard.append(priceSection);
    infoCol.append(descriptionThreeByMariePierreLessard);

    /* Version 7
    My additions in view of meeting assignment requirements 
    const formByMariePierreLessard = Form();
    */
    /* Tailwind styling */
    // const qtyByMariePierreLessard = Input("qty", 1, "number", "1", "border rounded p-2");
    /* My change in view of delivering the exercise without Tailwind */
    // const qtyByMariePierreLessard = Input("qty", 1, "number", "1", "defaultInputByMariePierreLessard");
    /* Tailwind styling */
    // const btnByMariePierreLessard = Button("Læg i kurv", "submit", "bg-green-500 p-2 rounded shadow-md shadow-inset");
    /* My change in view of delivering the exercise without Tailwind */
    // const btnByMariePierreLessard = Button("Læg i kurv", "submit", "defaultButtonByMariePierreLessard");
    // formByMariePierreLessard.append(qtyByMariePierreLessard, btnByMariePierreLessard);
    // infoCol.append(formByMariePierreLessard);

    /* A form element is in fact appropriate because the cart is saved in the MySQL database. */
    const form = Form("POST");
    /* A hidden input to post the productId on submit (obviously necessary and required by the API) */
    const productId = Input("productId", "", "hidden", id);
    const quantity = Input("quantity", "", "number", 1, "defaultInputByMariePierreLessard");
    /* My addition: negative numbers and 0 should be disallowed. */
    quantity.setAttribute("min", "1");
    const button = Button("Læg i kurv", "submit", "defaultButtonByMariePierreLessard");
    form.append(productId, quantity, button);
    infoCol.append(form);

    element.append(infoCol);

    return element;
};

