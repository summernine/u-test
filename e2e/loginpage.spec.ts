import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';

test.describe('Login', () => {


  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should navigate to login', async ({ homepageLocators, loginLocators }) => {
    // Click login button
    await homepageLocators.loginButton.click();
    // Expect login page
    await expect(loginLocators.usernameField).toBeVisible();
    await expect(loginLocators.signUpLink).toBeVisible();
    await expect(loginLocators.nextButton).toBeVisible();
  });

  test('should show error for empty username', async ({ homepageLocators, loginLocators }) => {
    // Click login button
    await homepageLocators.loginButton.click();
    // Click next button
    await loginLocators.clickNextButton();

    // Expect error in login page
    await expect(loginLocators.loginError).toContainText('Enter your username.');
  });

  test('should show error for invalid username', async ({ homepageLocators, loginLocators }) => {
    // Click login button
    await homepageLocators.loginButton.click();
    // Enter username details
    await loginLocators.inputUsername('+61400000000')
    // Click next button
    await loginLocators.clickNextButton();

    // Expect password details
    await expect(loginLocators.infoboxError).toContainText('Something seems to have gone wrong. Please try again.');
  });

})