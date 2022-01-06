import { test, expect } from '@playwright/test';

test.describe('login page', () => {
  test('renders all components', async ({ page }) => {
    await page.goto('/');

    const githubButton = page.locator('data-testid=button_login_github');
    const googleButton = page.locator('data-testid=button_login_gmail');

    expect(githubButton).not.toBeNull();
    expect(googleButton).not.toBeNull();
  });
});
