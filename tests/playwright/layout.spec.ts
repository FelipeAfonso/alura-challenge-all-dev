import { test, expect } from '@playwright/test';

test.describe('layout', () => {
  test('renders all components', async ({ page }) => {
    await page.goto('/editor');

    const searchBarSm = page.locator('data-testid=search_box_textfield_sm');
    const searchBarLg = page.locator('data-testid=search_box_textfield_lg');
    const searchButton = page.locator('data-testid=search_icon_button');
    const editorLink = page.locator('data-testid=sidebar_editor');
    const communityLink = page.locator('data-testid=sidebar_community');

    expect(searchBarSm || searchBarLg || searchButton).not.toBeNull();
    expect(editorLink).not.toBeNull();
    expect(communityLink).not.toBeNull();
  });
  test('the search dialog is opening', async ({ page }) => {
    await page.goto('/editor');

    const searchBarSm = page.locator('data-testid=search_box_textfield_lg');
    await searchBarSm.click();

    const searchDialog = page.locator('data-testid=search_box_dialog');
    await searchDialog.fill('asdasd');

    await expect(searchDialog.inputValue()).resolves.toBe('asdasd');
  });

  test('is navigating between pages', async ({ page }) => {
    await page.goto('/editor');

    const communityLink = page.locator('data-testid=sidebar_community');

    await communityLink.click();
    await page.waitForURL('/comunidade');
    await expect(page).toHaveURL(/.*comunidade/);

    const editorLink = page.locator('data-testid=sidebar_editor');

    await editorLink.click();
    await page.waitForURL('/editor');
    await expect(page).toHaveURL(/.*editor/);
  });
});
