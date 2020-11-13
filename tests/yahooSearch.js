/* globals gauge*/
"use strict";
const path = require('path');
const { openBrowser, goto, write, click, title, closeBrowser, press} = require('taiko');
const assert = require("assert");
//const headless = process.env.headless_chrome.toLowerCase() === 'true';


beforeSuite(async () => {
    await openBrowser({headless: false});
});

step("Goto yahoo page", async () => {
    await goto('https://in.yahoo.com/?p=us');
});

step("Search for yahoo keyword <query>", async (query) => {
    await write(query);
    await press('Enter')
});

step("Verify yahoo page title", async () => {
    console.log(title());
    //assert.strictEqual(await title(), 'Gauge Taiko - Google Search');
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

