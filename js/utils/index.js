/* This goes in the folder utilities because it is meant to be used anywhere on the site. */
/* For localisation purposes:
"The Intl.NumberFormat object enables language-sensitive number formatting."
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat */
export const price2Dkk = value => {
    return new Intl.NumberFormat("da-DK", {
        style: "currency",
        currency: "DKK",
        currencyDisplay: "code"
    }).format(value);
};
