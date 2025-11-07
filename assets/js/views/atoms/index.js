/* Index file for all atoms */

/* The parameters of the arrow functions below can be overriden by the function that calls these functions designated by a variable.
They will be called as follows:
Div()
Paragraph()
Heading() */

export const Fragment = () => {
    /* A fragment is a blank HTML tag, i.e. it doesn't really exist...
    Heinz is doing that in order to avoid having a div inside of the div with the id "app" */
    const element = document.createDocumentFragment();
    // The return is necessary:
    return element;
};

/* Version from my exercise on Oct. 21, 2025: 
export const Div = (className = "normalByMariePierreLessard") => ...
*/
export const Div = (className = "") => {
    const element = document.createElement("div");
    element.className = className;
    return element;
};

export const ArticleByMariePierreLessard = (className = "") => {
    const element = document.createElement("article");
    element.className = className;
    return element;
};

/* Version from my exercise on Oct. 21, 2025: 
export const Paragraph = (className = "normalByMariePierreLessard") => ...
*/
export const Paragraph = (className = "") => {
    const element = document.createElement("p");
    element.className = className;
    return element;
};

export const Heading = (text, num = 1, className = "") => {
    const element = document.createElement(`h${num}`);
    element.className = className;
    element.textContent = text;
    return element;
};

export const Ul = (className = "") => {
    const element = document.createElement("ul");
    element.className = className;
    return element;
};

export const Li = (className = "") => {
    const element = document.createElement("li");
    element.className = className;
    return element;
};

export const Link = (to, text = "", className = "") => {
    const element = document.createElement("a");
    element.className = className;
    element.href = to;
    element.innerText = text;
    return element;
};

export const LinkWithImageByMariePierreLessard = (to, className = "") => {
    const element = document.createElement("a");
    element.href = to;
    element.className = className;
    /* The Figma design requires images to be put before the text of the link, 
    so .innerHTML will be used when LinkWithImageByMariePierreLessard is called. */
    return element;
};

export const Image = (src, title, className = "") => {
    const element = document.createElement("img");
    element.src = src;
    element.className = className;
    element.alt = title;
    element.title = title;
    return element;
};

/* Forms typically have the GET method as default */
export const Form = (method = "GET") => {
    const element = document.createElement("form");
    element.method = method;
    return element;
};

export const FieldsetByMariePierreLessard = (className = "") => {
    const element = document.createElement("fieldset");
    element.className = className;
    return element;
};

export const LegendByMariePierreLessard = (text, className = "") => {
    const element = document.createElement("legend");
    element.innerText = text;
    element.className = className;
    return element;
};

export const Label = (title, id, className = "mr-4") => {
    const element = document.createElement("label");
    /* Thanks to the for attribute, the focus is placed on the associated input when the user clicks on the label.
    The for attribute is also identical to the id attribute of the input with which it is associated. 
    
    Since for is a reserved keyword in JS (used in loops), it is necessary to write .htmlFor instead. 
    
    "The HTMLLabelElement.htmlFor property reflects the value of the for content property. That means that this script-accessible property is used to set and read the value of the content property for, which is the ID of the label's associated control element."
    https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/htmlFor
    */
    element.htmlFor = id;
    element.innerText = title;
    element.className = className;
    return element;
};

/* The first parameter is always obligatory. The sequence matters. It is possible to omit parameters when the function is called.
You can't skip a parameter. */
/* Tailwind styling */
// export const Input = (name, placeholder, type = "text", value = "", className = "border rounded p-2") => {
/* My version of the button in CSS (not identical) */
export const Input = (name, placeholder, type = "text", value = "", className = "defaultInputByMariePierreLessard") => {
    const element = document.createElement("input");
    element.type = type;
    /* element.id = name; wasn't in the codealong. 
    I added it, otherwise labels aren't associated with an input.
    The name and id attributes are usually identical. 
    Heinz told the class to do the same afterwards. */
    element.id = name;
    element.name = name;
    element.placeholder = placeholder;
    /* If the value is saved somewhere, the field can be populated. */
    element.value = value;
    element.className = className;
    /* Otherwise, there is a recommendation in the console: */
    element.autocomplete = true;
    element.required = true;
    return element;
};

/* From an atomic design perspective, it is best to define a button whose type can be changed,
as opposed to having several buttons defined (e.g. submitButton, resetButton, btnButton). */
/* Tailwind styling */
// export const Button = (title, type = "submit", className = "bg-green-500 p-2 rounded shadow-md shadow-inset") => {
/* My version of the button in CSS (not identical) */
export const Button = (title, type = "submit", className = "defaultButtonByMariePierreLessard") => {
    const element = document.createElement("button");
    element.type = type;
    element.textContent = title;
    element.className = className;
    return element;
};

