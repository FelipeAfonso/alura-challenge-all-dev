import { test, expect } from '@playwright/test';

test.describe('community page', () => {
  test('renders at least one post', async ({ page }) => {
    await page.goto('/comunidade');

    const projectBox = page.locator('data-testid=project_box');
    const commentButton = page.locator('data-testid=comment_button');
    const favButton = page.locator('data-testid=fav_button');

    expect(projectBox).not.toBeNull();
    expect(commentButton).not.toBeNull();
    expect(favButton).not.toBeNull();
  });

  test('is navigating from project to editor', async ({ page }) => {
    await page.goto('/comunidade');

    const projectBox = page.locator('data-testid=project_box').first();
    const id = await projectBox.getAttribute('data-id');

    await projectBox.click();
    await page.waitForURL(`/editor/${id}`);
    await expect(page).toHaveURL(new RegExp(`.*editor/${id}`));
  });
});
