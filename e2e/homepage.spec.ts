import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should navigate to homepage', async ({ page }) => {
    // Expect url page is correct.
    await expect(page).toHaveURL(/ubank/);
  });

  test('should have login button', async ({ homepageLocators }) => {
    // Expect login button to be visible.
    await expect(homepageLocators.loginButton).toBeVisible();
  });

  test('should have search button', async ({ homepageLocators }) => {
    // Expect search button to be visible.
    await expect(homepageLocators.searchbarButton).toBeVisible();
  });

  test('should have logo and headers', async ({ homepageLocators }) => {
    // Expect logo to be visible.
    await expect(homepageLocators.logo).toBeVisible();
    // Expect headers
    await expect(homepageLocators.everydayMoneyHeader).toBeVisible();
    await expect(homepageLocators.homeloansHeader).toBeVisible();
    await expect(homepageLocators.ourAppHeader).toBeVisible();
    await expect(homepageLocators.whyUsHeader).toBeVisible();
    await expect(homepageLocators.getHelpHeader).toBeVisible();
  });

  test('should have banner button', async ({ homepageLocators }) => {
    // Expect banner button to be visible.
    await expect(homepageLocators.bannerButton).toBeVisible();
  });

  test('should show disclaimer', async ({ homepageLocators }) => {
    // Expect disclaimer text to be visible.
    await homepageLocators.disclaimerButton.click();
    await expect(homepageLocators.disclaimerText).toBeVisible();
  });

  test('should show footer, footer cta, footer logo, footer socials', async ({ homepageLocators }) => {
    // Expect footer and cta button to be visible.
    await expect(homepageLocators.footer).toBeVisible();
    await expect(homepageLocators.footerCtaButton).toBeVisible();
    // Expect footer logo to be visible.
    await expect(homepageLocators.footerLogo).toBeVisible();
    // Expect footer socials to be visible.
    await expect(homepageLocators.facebookButton).toBeVisible();
    await expect(homepageLocators.twitterButton).toBeVisible();
    await expect(homepageLocators.igButton).toBeVisible();
    await expect(homepageLocators.linkedinButton).toBeVisible();
    await expect(homepageLocators.tiktokButton).toBeVisible();
  });
})

test.describe('Header', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should expand Everday money header', async ({ homepageLocators }) => {
    // Expand header
    await homepageLocators.everydayMoneyHeader.click();
    // Expect subheaders
    await expect(homepageLocators.everdayBanking).toBeVisible();
    await expect(homepageLocators.everdayBanking).toHaveAttribute('href', '/banking');
    await expect(homepageLocators.everydayTransaction).toBeVisible();
    await expect(homepageLocators.everydayTransaction).toHaveAttribute('href', '/banking/transaction-account');
    await expect(homepageLocators.everydayBills).toBeVisible();
    await expect(homepageLocators.everydayBills).toHaveAttribute('href', '/banking/bills-account');
    await expect(homepageLocators.everydaySavings).toBeVisible();
    await expect(homepageLocators.everydaySavings).toHaveAttribute('href', '/banking/savings-account');
    await expect(homepageLocators.everydaySharedAccount).toBeVisible();
    await expect(homepageLocators.everydaySharedAccount).toHaveAttribute('href', '/banking/shared-accounts');
  });

  test('should navigate to a page after clicking subheader', async ({ homepageLocators, page }) => {
    // Expand header
    await homepageLocators.everydayMoneyHeader.click();
    const url = await homepageLocators.everdayBanking.getAttribute('href');
    await homepageLocators.everdayBanking.click();
    console.log(url)
    expect(page.url()).toContain(url)
  })

})

test.describe('Search', () => {
  test.beforeEach(async ({ homepageLocators, page }) => {
    await page.goto('/');
    await homepageLocators.searchbarButton.click()
  });

  test('should show search field and trending searches', async ({ homepageLocators }) => {
    // Expect search field and trending searchs    
    await expect(homepageLocators.searchbarField).toBeVisible();
    await expect(homepageLocators.searchContent).toBeVisible();
  });

  test('should be able search field and show results', async ({ homepageLocators, page }) => {
    const search = 'Savings'
    await homepageLocators.searchText(search)
    // Expect search results to contain searched text    
    await expect(homepageLocators.searchContent).toBeVisible();
    await expect(page.locator('mark').first()).toContainText(search, { ignoreCase: true });
  });

  test('should close search and go back to homepage', async ({ homepageLocators }) => {
    const search = 'Savings'
    await homepageLocators.searchText(search)
    await expect(homepageLocators.searchContent).toBeVisible();
    // Close search
    await homepageLocators.closeSearchButton.click();
    // Expect search field not to be displayed
    await expect(homepageLocators.searchbarField).not.toBeVisible();
    await expect(homepageLocators.searchContent).not.toBeVisible();
  });

})

test.describe('Banner cta', () => {
  test.beforeEach(async ({ homepageLocators, page }) => {
    await page.goto('/');
  });

  test('should load correct page after clicking banner cta', async ({ homepageLocators, page }) => {
    const url = await homepageLocators.bannerButton.getAttribute('href');
    // Click banner button ctta
    await homepageLocators.bannerButton.click();
    // Expect to be on the correct page url
    expect(page.url()).toContain(url)
  });
})