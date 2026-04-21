import { test, expect } from '@playwright/test';

test('load homepage', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    //await expect(page).toHaveTitle(/TodoMVC/);
    await expect(page.locator('h1')).toHaveText('todos');

    const title = await page.title();
    console.log(title);
});