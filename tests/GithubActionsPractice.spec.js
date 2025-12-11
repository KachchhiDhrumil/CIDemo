import {expect, test} from '@playwright/test';
import { log } from 'node:console';

test("Practice Test 1", async ({page}) => {
    console.log("Starting Practive Test 1");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    expect(page).toHaveTitle("Swag Labs");
    console.log("Ending Practice test 1");
});

test("Practice Test 2", async ({page}) => {
    console.log("Starting Practive Test 2");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    expect(page).toHaveTitle("Swag Labs");
    console.log("Ending Practice test 2");
});

test("Practice Test 3", async ({page}) => {
    console.log("Starting Practive Test 3");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    expect(page).toHaveTitle("Swag Labs");
    console.log("Ending Practice test 3");
});

test.describe("Practice of Describe", async () => {
    test("Practice Test 4", async ({page}) => {
        console.log("Starting Practive Test 4");
        await page.goto("https://www.saucedemo.com/");
        console.log(await page.title());
        expect(page).toHaveTitle("Swag Labs");
        console.log("Ending Practice test 4");
    });

    test("Practice Test 5", async ({page}) => {
        console.log("Starting Practive Test 5");
        await page.goto("https://www.saucedemo.com/");
        console.log(await page.title());
        expect(page).toHaveTitle("Swag Labs");
        console.log("Ending Practice test 5");
    });

    test("Practice Test 6", async ({page}) => {
        console.log("Starting Practive Test 6");
        await page.goto("https://www.saucedemo.com/");
        console.log(await page.title());
        expect(page).toHaveTitle("Swag Labs");
        console.log("Ending Practice test 6");
    });
});

test("Practice Test 7", async ({page}) => {
    console.log("Starting Practive Test 7");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    expect(page).toHaveTitle("Swag Labs");
    console.log("Ending Practice test 7");
});
    
    