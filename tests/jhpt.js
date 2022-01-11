fixture("jhpt")
    .page("http://10.10.170.198:8090/jhptGui/husimPhoneList.jsf")
   
    test("ngtc", async t =>{
        await t
        .maximizeWindow()
        .click("#accept-al#loginLinkl")
        .typeText("#inputAdminPassword", "123456")
        .pressKey("enter")
        .click("#tabViewPhoneVads\:dtPhoneList_data > tr:nth-child(1) > td:nth-child(1)")
        .click("#tabViewPhoneVads > ul > li:nth-child(3) > a")
    });