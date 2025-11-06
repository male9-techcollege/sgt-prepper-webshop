/* In function cartTotalView:
- Add button: "Gå til bestilling"
- After VAT, add line for shipping fees or to indicate that they will be calculated based on address at the next stage of process (order page)
("og ekskl. fragtudgifter" is said in detailed view). As placeholder: 10% of purchase price? 
*/
/* TO DO: the buyer has to actively accept the terms and conditions of purchase (order page?) */
/* TO DO: mandatory to add methods of payment, e.g. with icons under Buy now button */

import { price2Dkk } from "../../utils/index.js";
import { Div, Ul, Li, Button } from "../atoms/index.js";
import { vatCalculationByMariePierreLessard } from "../../controllers/cartController.js";

/* Setting the array as empty is useful. An error won't be thrown if the array is empty. */
export const cartListView = (data = []) => {
    const element = Ul();

    data.forEach(item => {
        /* Tailwind styling:
        "flex py-1 justify-between" 
        Meaning: 
        py-<number>     padding-block: calc(var(--spacing) * <number>);
        https://tailwindcss.com/docs/padding */
        const li = Li("cartListItemByMariePierreLessard");

        /* Tailwind styling:
        const quantity = Div("w-[5%]");
         */
        const quantity = Div();
        quantity.innerText = item.quantity;
        li.append(quantity);

        /* Tailwind styling:
        const name = Div("w-[60%]");
         */
        const name = Div();
        name.innerText = item.product.name;
        li.append(name);

        /* Tailwind styling:
        const price = Div("w-[20%] text-right");
         */
        const price = Div();
        price.innerText = price2Dkk(item.product.price);
        li.append(price);

        /* Tailwind styling:
        const action = Div("w-[10%] text-right");
         */
        const action = Div();
        /* Codealong previously said: 
        action.innerText = "Slet/placeholder";
        */
        /* In the codealong, there is text in the button. I had an image, but the image ended up causing an error,
        because it was in a layer above the button. The btn only worked if one clicked around the image. 
        Solution:
        Make the image the background image of the button.
        Note: I need to set a style here, otherwise the default class given to buttons by JS overrides my SCSS styling,
        probably because the JS file is read after the CSS file.

        The text slet has to stay, or the empty button collapses, and it becomes invisible.
        */
        const deleteBtn = Button("Slet", "button", "btnWithImageByMariePierreLessard");
        // console.log(item.id);
        deleteBtn.dataset.cartid = item.id;
        /* FontAwesome icon */
        /* My previous exercise. Now, the SVG is mentioned in the CSS file (background).
        This is the trash-solid-full.svg from FontAwesome.
        action.innerHTML = `
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg>
            </button>
        `;
        */
        // console.log(deleteBtn);
        action.append(deleteBtn);

        li.append(action);

        element.append(li);
    });

    return element;
};

export const cartListHeaderView = arrColumns => {
    /* Tailwind styling:
    const cartHeader = Div("flex gap-3 border-b border-black py-1 justify-between");
    */
    const cartHeader = Div("cartListItemByMariePierreLessard");

    arrColumns.forEach((heading) => {
        const col = Div(heading.className);
        col.textContent = heading.name;
        cartHeader.append(col);
    });

    return cartHeader;
};

export const cartTotalView = totalPrice => {
    /* Tailwind styling:
    const totalRow = Div("flex gap-3 border-b border-t py-1 justify-between");
    */
    const totalRow = Div("cartListItemByMariePierreLessard boldByMariePierreLessard");
    /* My additions: 
    I didn't have to create more than one row since the grid in CSS class cartListItemByMariePierreLessard would just have created more rows. 
    I did it because I had disappearing empty cells. See note above spacerColOne. 
    Now that the code there, I am keeping it. The content is nicely organised. */
    const vatRowByMariePierreLessard = Div("cartListItemByMariePierreLessard");
    const shippingNoteRowByMariePierreLessard = Div("cartListItemByMariePierreLessard");
    /* A div is a block element. A btn is an inline element. 
    Type button because this is not a form that will send anything to the server. 
    The info just needs to be relayed to another function to create another view. */
    const buttonContainerByMariePierreLessard = Div("buttonContainerByMariePierreLessard");
    const cartCalculationBoxByMariePierreLessard = Div();

    /* Tailwind styling:
    const spacerCol = Div("w-[10%]");
    */
    /* THIS CANNOT BE USED MORE THAN ONCE, whether I use const or let. 
    If I use it again, the prior occurrences are not rendered.
    const spacerCol = Div("");
    */
    const spacerColOne = Div("");
    const spacerColTwo = Div("");
    const spacerColThree = Div("");

    /* Tailwind styling:
    const textCol = Div("w-[70%] font-bold");
    textCol.innerText = "Total";
    */
    const totalLabelByMariePierreLessard = Div("");
    totalLabelByMariePierreLessard.innerText = "Total";

    /* Tailwind styling:
    const totalCol = Div("w-[20%] text-right font-bold");
    */
    const totalCol = Div("");
    totalCol.innerText = price2Dkk(totalPrice);

    /* It is a legal requirement to indicate if the prices include fees and taxes or not. 
    Adding this line here is a good reminder. It should definitely be on the order page as well. */
    const vatLabelByMariePierreLessard = Div("");
    vatLabelByMariePierreLessard.innerHTML = "Heraf 25&nbsp;% moms";

    const vatAmountByMariePierreLessard = Div("");
    let vatAmountOnlyByMariePierreLessard = vatCalculationByMariePierreLessard(totalPrice);
    // console.log(vatAmountOnlyByMariePierreLessard);
    /* The following adds DKK at the end, and it limits the decimals to two. */
    vatAmountByMariePierreLessard.innerText = price2Dkk(vatAmountOnlyByMariePierreLessard);
    /* Alternative code: 
    vatAmountByMariePierreLessard.innerText = price2Dkk(vatCalculationByMariePierreLessard(totalPrice));
    */

    /* Since I had already added a note about shipping in detailed view, the following note may not be necessary, but it is a user-friendly reminder.

    Legal requirement/mandatory:
    "Det er desuden et krav at det fremgår på prisen om den er ekslusiv eller inklusiv afgifter og leveringsomkostninger."
    https://moodle.techcollege.dk/course/section.php?id=282509
    There can't be anything between the price and the button.
    (See also 2.2 in TC's Guide for webshops).
     */
    const shippingNoteByMariePierreLessard = Div("cursiveByMariePierreLessard");
    shippingNoteByMariePierreLessard.innerText = "Eventuelle fragtudgifter tilføjes på bestillingssiden.";

    const cartButtonByMariePierreLessard = Button("Gå til bestilling", "button");

    /* For some reason, if I add a 4th column (spacerCol or totalCol), weird things happen. 
    If I add a textCol, totalCol and textCol get switched around (reverse order).
    If I add a spacerCol at the end, it's like a removed the first spacerCol. 
    It's weird because adding empty DIVs in a HTML file doesn't normally do that. The styling is an inner grid (inside of a grid with the whole table).
    */
    /* Codealong said:
    totalRow.append(spacerCol, textCol, totalCol);
    return totalRow;
    */
    totalRow.append(spacerColOne, totalLabelByMariePierreLessard, totalCol);
    vatRowByMariePierreLessard.append(spacerColTwo, vatLabelByMariePierreLessard, vatAmountByMariePierreLessard);
    shippingNoteRowByMariePierreLessard.append(spacerColThree, shippingNoteByMariePierreLessard);
    buttonContainerByMariePierreLessard.append(cartButtonByMariePierreLessard);
    cartCalculationBoxByMariePierreLessard.append(totalRow, vatRowByMariePierreLessard, shippingNoteRowByMariePierreLessard, buttonContainerByMariePierreLessard);

    return cartCalculationBoxByMariePierreLessard;
};

