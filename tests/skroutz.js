import { Selector } from 'testcafe';

fixture("Skroutz Iphone 13")
    .page("https://www.skroutz.gr")

    const acceptCookies = Selector("#accept-all");
    const searchBar = Selector("#search-bar-input");
    const iphoneFindingImg = Selector("#sku-list > li > a > img");
    const iphoneImg = Selector("#sku-details > div.section.content > div.image > a > img");
    const nextImgBtn = Selector("#lightbox_freak > a.icon.js-lightbox-arrow.arrow.arrow-right");
    
    test("First Test", async t =>{
        await t
        .maximizeWindow()
        .click(acceptCookies)
        .typeText(searchBar,"iphone 13 pro max sierra blue 512")
        .pressKey("enter")
        .click(iphoneFindingImg)
        .click(iphoneImg)

        const n = 20;
        for (let i = 1; i <= n; i++) {
            await t
            .click(nextImgBtn)
            console.log("[info] Click attempt " + i);
        }   
    });