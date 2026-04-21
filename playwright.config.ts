import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    use: {
        headless: true,
        baseURL: 'https://demo.playwright.dev/todomvc',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
});