import { Div, Button } from "../atoms/index.js";

export const cookieBannerView = () => {
    /* Tailwind styling  
    const overlay = Div("fixed hidden inset-0 z-[9998] bg-black/70 flex items-end md:items-center md:justify-center");
    */
    /* I gave up on creating a dialog instead of a div for SEO purposes. Because it is hidden by default, it would require too many changes to the codealong. I don't have time for this.
    */
    const overlay = Div("cookieOverlayByMariePierreLessard");
    overlay.id = "cookie-overlay";
    overlay.setAttribute("aria-hidden", "false");

    /* Tailwind styling
    const banner = Div("w-full md:max-w-[720px] bg[#111] text-white p-4 md:rounded-xl shadow-2xl md:m-6");
    */
    const banner = Div("cookieBannerStylingByMariePierreLessard");
    banner.id = "cookie-banner";
    banner.role = "dialog";
    /* "Setting aria-modal="true" on dialog and alertdialog role containers indicates the presence of a "modal" element to users of assistive technology, but does not actually make the element modal. The features that make the element actually modal must be implemented by the developer."
    https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal */
    banner.setAttribute("aria-modal", "true");
    /* "The global aria-live attribute indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. (...)
    polite
    Indicates that updates to the region should be presented at the next graceful opportunity, such as at the end of speaking the current sentence or when the user pauses typing."
    https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live */
    banner.setAttribute("aria-live", "polite");
    /* "A negative value (the exact negative value doesn't actually matter, usually tabindex="-1") means that the element is not reachable via sequential keyboard navigation.
    Note: tabindex="-1" may be useful for elements that should not be navigated to directly using the Tab key, but need to have keyboard focus set to them. Examples include an off-screen modal window that should be focused when it comes into view, or a form submission error message that should be immediately focused when an errant form is submitted."
    https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex */
    banner.tabIndex = -1;

    /* Tailwind styling 
    const wrap = Div("flex flex-col md:flex-row md:items-center md:justify-between gap-4")
    const text = Div("text-sm md:text-base");
    */
    /* I considered making this a form element, but it doesn't make sense since I don't want to make a POST request. */
    /* The class is my addition to improve styling */
    const wrap = Div("flexedFormByMariePierreLessard");

    const text = Div();
    /* Codealong said: 
    text.innerText = "Vi bruger cookies til statistik og marketing. Du kan vælge nødvendige cookies eller acceptere alle.";
    */
    /* TO DO: add router to cookie policy. 
    It would also be good to add an external value that indicates the lifespan of the cookies. */
    text.innerText = "Ifølge GDPR-forordningen, har vi behov for dit samtykke for at gemme cookies på dit device eller computer. Vi bruger cookies til statistik og markedsføring. Du kan finde flere oplysninger om disse formål i vores privatlivspolitik. Du kan vælge at acceptere alle cookies eller kun de nødvendige, det vil sige funktionelle cookies. Vores cookies bliver gemt i 28 dage.";

    /* Tailwind styling  
    const btns = Div("flex gap-2");
    const acceptAll = Button("Accepter alle", "button", "px-3 py-2 bg-[#4CAF50] text-[#666] rounded-md font-semibold");
    const acceptSome = Button("Kun nødvendige", "button", "px-3 py-2 bg-[#222] border-[#666] text-white rounded-md font-semibold");
    */
    const btns = Div();
    const acceptAll = Button("Accepter alle", "button");
    acceptAll.id = "cookie-acceptall";
    const acceptSome = Button("Kun nødvendige", "button");
    acceptSome.id = "cookie-acceptsome";
    btns.append(acceptAll, acceptSome);

    wrap.append(text, btns);
    banner.append(wrap);

    /* Codealong said: */
    overlay.append(banner);
    return overlay;
};