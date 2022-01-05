import { test, expect } from '@playwright/test';

test.describe('empty editor page', () => {
  test('renders all components', async ({ page }) => {
    await page.goto('/editor');

    const codeEditor = page.locator('data-testid=code-editor');
    const projectName = page.locator('data-testid=project_name');
    const projectDescription = page.locator('data-testid=project_description');
    const projectLanguage = page.locator('data-testid=project_language');
    const projectColor = page.locator('data-testid=project_color');
    const projectSave = page.locator('data-testid=project_save');

    expect(codeEditor).not.toBeNull();
    expect(projectName).not.toBeNull();
    expect(projectDescription).not.toBeNull();
    expect(projectLanguage).not.toBeNull();
    expect(projectColor).not.toBeNull();
    expect(projectSave).not.toBeNull();
  });
  test('the inputs are being filled', async ({ page }) => {
    await page.goto('/editor');

    const codeEditor = page.locator('.ace_text-input').first();
    const projectName = page.locator('data-testid=project_name').first();
    const projectDescription = page
      .locator('data-testid=project_description')
      .first();
    const projectLanguage = page
      .locator('data-testid=project_language')
      .first();
    const projectColor = page.locator('data-testid=project_color').first();

    const projectData = {
      name: 'Projeto de Teste',
      description: 'Descrição do projeto',
      language: 'javascript',
      color: '#ff0000',
      code: 'console.log("Hello World");',
    };
    await projectName.fill(projectData.name);
    await projectDescription.fill(projectData.description);
    await projectLanguage.fill(projectData.language);
    await projectColor.fill(projectData.color);
    await codeEditor.fill(projectData.code);

    await expect(projectName.inputValue()).resolves.toBe(projectData.name);
    await expect(projectDescription.inputValue()).resolves.toBe(
      projectData.description
    );
    await expect(projectLanguage.inputValue()).resolves.toBe(
      projectData.language
    );
    await expect(projectColor.inputValue()).resolves.toBe(projectData.color);

    await expect(codeEditor.inputValue()).resolves.toContain(projectData.code);
  });

  // test('is navigating between pages', async ({ page }) => {
  //   await page.goto('/editor');

  //   const communityLink = page.locator('data-testid=sidebar_community');

  //   await communityLink.click();
  //   await page.waitForURL('/comunidade');
  //   await expect(page).toHaveURL(/.*comunidade/);

  //   const editorLink = page.locator('data-testid=sidebar_editor');

  //   await editorLink.click();
  //   await page.waitForURL('/editor');
  //   await expect(page).toHaveURL(/.*editor/);
  // });
});
