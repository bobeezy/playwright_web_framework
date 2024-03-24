import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Password123');
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  await expect(page.locator('#submit')).toContainText('Submit');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('strong')).toContainText('Congratulations student. You successfully logged in!');
});