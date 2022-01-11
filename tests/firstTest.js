fixture("First Fixture")
    .page("https://devexpress.github.io/")
   
    test.page("https://devexpress.github.io/testcafe/example/")
    ("First Test", async t =>{
        await t
        .typeText("#developer-name", "Dimitris")
        .click("#macos")
        .click("#submit-button")
        .wait(3000);
    });

