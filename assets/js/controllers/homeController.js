/* For first version of the app */
// import { Div, Heading, Paragraph } from "../views/atoms/index.js";
/* For second version of the app */
// import { Div, Paragraph } from "../views/atoms/index.js";
// import { Header, Main, Footer } from "../views/molecules/index.js";
/* For third version of the app */
import { Paragraph } from "../views/atoms/index.js";
import { Layout } from "./layoutController.js";

export const HomePage = async () => {
    // console.log('Hej verden');

    /* First version of the app */
    /* The parameter in the Div function is a new class name, different from the default one given in the module where Div is defined.
    The className is thereby overriden. */
    // const div = Div("productboxByMariePierreLessard");
    // const headingOneByMariePierreLessard = Heading();
    // headingOneByMariePierreLessard.innerHTML = "Hej, verden!";
    // const headingTwoByMariePierreLessard = Heading(2);
    // headingTwoByMariePierreLessard.innerHTML = "Her kommer jeg!";
    // const pByMariePierreLessard = Paragraph();
    // pByMariePierreLessard.innerHTML = "Lorem ipsum";
    // div.append(headingOneByMariePierreLessard);
    // div.append(headingTwoByMariePierreLessard);
    // div.append(pByMariePierreLessard);
    // return div;

    /* Second version of the app */
    // const div = Div("productboxByMariePierreLessard");
    // const header = Header("normalByMariePierreLessard");
    // const main = Main();
    // const footer = Footer("normalByMariePierreLessard");
    // footer.innerHTML = "&copy Marie-Pierre Lessard";
    // div.append(header, main, footer);
    // return div;

    /* Third version of the app */
    // const title = "Velkommen";
    // const p = Paragraph();
    // p.innerText = "Velkommen til Sgt. Preppers webshop";
    // return Layout(title, p);

    /* Third version of the app */
    const title = "Velkommen";
    const p = Paragraph();
    p.innerText = "Velkommen til Sgt. Preppers webshop";
    return await Layout(title, p);
};
