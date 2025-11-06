import { getList } from "../models/categoryModel.js";

export const getCategoryList = async () => {
    /* The following has the purpose of turning selected menu items yellow:
    const url
    const curCategory
    */
    /* URL() calls a JavaScript API. */
    const url = new URL(window.location.href);
    //The following works. It finds cat. vand-og-vandrensning:
    console.log(url);

    /* curCategory means current category */
    /* The "or" ( || ) means that if no category is found, then  the second option (the default category shown on starting page) will be applied.
    NOTE: it leads to a problem with my addition to v5, though: the default cat. is in yellow on the cart page. 
    No error is generated if || "vand-og-vandrensning" is removed, so on a site that has a cart page like mine, 
    it would just need to be removed. */
    const curCategory = url.searchParams.get("category") || "vand-og-vandrensning";
    //The following works. It finds cat. vand-og-vandrensning:
    console.log(curCategory);

    const data = await getList();
    /* This logs the old array */
    // console.log(data);

    /* The stuff in parentheses after the arrow function is an immediately invoked function expression (IIFE).
    Heinz called it an immediately invoked function.
    See explanation in: JS Functions Cheat Sheet.pdf (from TC's GitHub)
    They have to be parentheses. The following curly brackets surround an object. */
    const formattedCategories = data.map((item) => ({
        slug: item.slug,
        title: item.title,
        /* Heinz said he made a mistake in version 4 of the codealong, so this app has significant changes compared to earlier versions.
        The problem was that his router is programmed to work with a GET parameter (the stuff starting with a question mark).
        NOTE: a GET parameter is different from a GET request. There is therefore no hindrance to using hash routers for extra pages like the cart page.
        Hence the kind of addition that I made in my exercise (see cartController.js, etc.).
        */
        url: `/index.htm?category=${item.slug}`,
        /* Tailwind styling 
        text-yellow-500 : oklch(79.5% 0.184 86.047)
        text-white : #fff 
        Codealong said:
        textColor: curCategory === item.slug ? "text-yellow-500" : "text-white"
        text-yellow-500 and text-white are class names of Link()
        textColor is used in folder Molecules, file index.js
        */
        textColor: curCategory === item.slug ? "selectedMenuItemByMariePierreLessard" : "unselectedMenuItemByMariePierreLessard"
    }));
    /* This returns 5 categories. */
    // console.log(formattedCategories);

    return formattedCategories;
};