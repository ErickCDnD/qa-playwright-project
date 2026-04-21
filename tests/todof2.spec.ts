import { test, expect } from '@playwright/test';

test('load homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Todo/);
});