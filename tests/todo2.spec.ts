import { test, expect } from '@playwright/test';

test('load homepage', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    await expect(page.locator('h1')).toHaveText('todos');
});