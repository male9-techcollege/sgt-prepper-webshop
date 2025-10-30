// import { Layout } from "../../controllers/layoutController.js";
import { Fragment, Heading, Div, Link, Image, Paragraph, Form, Input, Button } from "../atoms/index.js";
import { price2Dkk } from "../../utils/index.js";

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
        console.log(product);
        /* Case-sensitive! imageUrl, not imageURL  */
        const { imageUrl, name, price, slug, stockText, stockClass, teaser } = product;
        console.log(imageUrl);

        const link = Link(`?category=${category}&product=${slug}`);

        /* Tailwind styling from codealong
        const div = Div("border flex justify-between");
        */
        /* My change in view of delivering the exercise without Tailwind */
        const div = Div("productListItemByMariePierreLessard");

        /* Tailwind styling */
        // const img = Image(`http://localhost:4000${imageUrl}`, name, "max-w-[200px]");
        /* My change in view of delivering the exercise without Tailwind */
        const img = Image(`http://localhost:4000${imageUrl}`, name, "productListImgByMariePierreLessard");
        div.append(img);

        const info = Div();
        /* Codealong said h2 */
        const h3 = Heading(name, 3);
        const p = Paragraph();
        /* innerHTML has to be used for strings, not objects */
        p.innerHTML = teaser;
        info.append(h3, p)
        div.append(info);

        /* Tailwind styling */
        // const cost = Div("text-right border");
        /* My change in view of delivering the exercise without Tailwind */
        const cost = Div("productListCostContainerByMariePierreLessard");
        /* The string template is my addition to meet assignment requirements */
        cost.innerText = `${price2Dkk(price)}, inkl. moms`;
        /* This is to show whether or not there are stocks left without giving the number of items left. */
        const stockElm = Paragraph(stockClass);
        stockElm.innerText = stockText;
        cost.append(stockElm);
        div.append(cost);

        link.append(div);

        /* Codealong said: */
        // element.append(link);
        colouredListContainerByMariePierreLessard.append(link);
    });

    element.append(colouredListContainerByMariePierreLessard);
    return element;
};

export const ProductDetailsView = (product) => {
    const { id, imageUrl, name, price, description, stock } = product;
    console.log(product);

    /* Tailwind styling 
    const element = Div("flex");
    Div has a className argument. */
    /* My change in view of delivering the exercise without Tailwind */
    const element = Div("productDetailsByMariePierreLessard");
    /* Tailwind styling */
    // const img = Image(`http://localhost:4000${product.imageUrl}`, name, "max-w-[250px]");
    /* My change in view of delivering the exercise without Tailwind */
    const img = Image(`http://localhost:4000${product.imageUrl}`, name, "productDetailsImgByMariePierreLessard");
    element.append(img);

    const div1 = Div();
    const h3 = Heading(name, 3);
    div1.append(h3);

    const p = Paragraph();
    p.innerHTML = description;
    div1.append(p);

    /* My addition in view of meeting assignment requirements 
    Attempt 1:
    The following shows the number left in stock, but I need to go a bit further. 
    stockElm.innerText = stock; 
    */
    const stockElmByMariePierreLessard = Paragraph();
    stockElmByMariePierreLessard.innerText = stockElmTextByMariePierreLessard();
    stockElmByMariePierreLessard.className = stockElmClassByMariePierreLessard();
    div1.append(stockElmByMariePierreLessard);

    function stockElmTextByMariePierreLessard() {
        if (!stock) {
            return "Ikke på lager";
        } else {
            return "På lager";
        };
    };

    function stockElmClassByMariePierreLessard() {
        if (!stock) {
            const red = "redAndBoldByMariePierreLessard";
            return red;
        } else {
            const green = "greenAndBoldByMariePierreLessard";
            return green;
        };
    };

    const priceSection = Paragraph("productDetailsPriceByMariePierreLessard");
    /* The string template is my addition to meet assignment requirements */
    priceSection.innerHTML = `<strong>${price2Dkk(price)}</strong>, inkl. moms og ekskl. fragtudgifter`;
    div1.append(priceSection);

    /* My additions in view of meeting assignment requirements */
    const formByMariePierreLessard = Form();
    /* Tailwind styling */
    // const qtyByMariePierreLessard = Input("qty", 1, "number", "1", "border rounded p-2");
    /* My change in view of delivering the exercise without Tailwind */
    const qtyByMariePierreLessard = Input("qty", 1, "number", "1", "defaultInputByMariePierreLessard");
    /* Tailwind styling */
    // const btnByMariePierreLessard = Button("Læg i kurv", "submit", "bg-green-500 p-2 rounded shadow-md shadow-inset");
    /* My change in view of delivering the exercise without Tailwind */
    const btnByMariePierreLessard = Button("Læg i kurv", "submit", "defaultButtonByMariePierreLessard");
    formByMariePierreLessard.append(qtyByMariePierreLessard, btnByMariePierreLessard);
    div1.append(formByMariePierreLessard);

    element.append(div1);

    return element;
};

