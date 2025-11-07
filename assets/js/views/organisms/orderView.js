/* TO DO: the buyer has to actively accept the terms and conditions of purchase (order page?) */
/* TO DO: mandatory to add methods of payment, e.g. with icons under Buy now button */

import { Div, Button, Form, FieldsetByMariePierreLessard, LegendByMariePierreLessard } from "../atoms/index.js";
/* FormGroup = set with label and input */
import { FormGroup } from "../molecules/index.js";

/* TO DO: I can't see this yet. It helped to add async since this is called by an async function.
Weirdly, the functions in cartView.js aren't async, and they still work. 
*/
export const orderPageViewByMariePierreLessard = () => {
    const orderFormByMariePierreLessard = Form("POST");

    const billingInfoSectionByMariePierreLessard = FieldsetByMariePierreLessard();
    const billingInfoLegendByMariePierreLessard = LegendByMariePierreLessard("Faktureringsoplysninger");
    billingInfoSectionByMariePierreLessard.append(billingInfoLegendByMariePierreLessard);

    const orderedItemsSectionByMariePierreLessard = FieldsetByMariePierreLessard();
    const orderedItemsLegendByMariePierreLessard = LegendByMariePierreLessard("Varer i kurven");
    orderedItemsSectionByMariePierreLessard.append(orderedItemsLegendByMariePierreLessard);

    const orderButtonByMariePierreLessard = Button("Betal og køb", "button");
    orderButtonByMariePierreLessard.addEventListener("click", (e) => {
        window.location.href = "/index.htm#/paymentgateway";
    });

    /* TO DO: add checkbox with to accept terms and conditions */
    const termSectionByMariePierreLessard = Div();
    termSectionByMariePierreLessard.innerText = "Afkrydsningsfelt med label om handelsbetingelser"

    const paymentMethodSectionByMariePierreLessard = Div();
    paymentMethodSectionByMariePierreLessard.innerText = "Gyldige betalingsmetoder: Visa/Dankort og Mastercard";

    orderFormByMariePierreLessard.append(billingInfoSectionByMariePierreLessard, orderedItemsSectionByMariePierreLessard, orderButtonByMariePierreLessard, termSectionByMariePierreLessard, paymentMethodSectionByMariePierreLessard);
    console.dir(orderFormByMariePierreLessard); //This does print an object to the console (with innerHTML property that reflects the above).

    /* ALWAYS REMEMBER TO RETURN! 
    Explanation from Bo:
    Return HAS to be used every time a function needs to give sth to another function.
    The omission of return will only work in certain cases, e.g. at the end of a flow or when the function produces a boolean value (sth or nothing, yes or no).
    */
    return orderFormByMariePierreLessard;
};
