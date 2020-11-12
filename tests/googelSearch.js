/* globals gauge*/
"use strict";
const path = require('path');
const { openBrowser, goto, write, click, title, closeBrowser } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'false';


beforeSuite(async () => {
    await openBrowser({args:['--window-size=1440,900']});
});

step("Goto google page", async () => {
    await goto('www.google.in');
});

step("Search for keyword <query>", async (query) => {
    await write(query);
    await click('Google Search');
});

step("Verify page title", async () => {
    await title();
    assert.strictEqual(await title(), 'Gauge Taiko - Google Search');
});

// step("Page contains <content>", async (content) => {
   
// });

// (async () => {
//     try {
//         await write('Gauge taiko');
//         await click('Google Search');
// 	title;
//         await title();
//     } catch (error) {
//         console.error(error);
//     } finally {
//         await closeBrowser();
//     }
// })();

afterSuite(async () => {
    await closeBrowser();
});
