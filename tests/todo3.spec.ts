import { test, expect } from '@playwright/test';

test('load homepage', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const title = await page.title();
    console.log(title);
});