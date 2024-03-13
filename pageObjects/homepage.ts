import { Locator, Page } from '@playwright/test';

export class HomepageLocators {
  readonly page: Page;
  readonly loginButton: Locator;
  readonly searchbarButton: Locator;
  readonly searchbarField: Locator;
  readonly logo: Locator;
  readonly everydayMoneyHeader: Locator;
  readonly everdayBanking: Locator;
  readonly everydayTransaction: Locator;
  readonly everydayBills: Locator;
  readonly everydaySavings: Locator;
  readonly everydaySharedAccount: Locator;
  readonly homeloansHeader: Locator;
  readonly ourAppHeader: Locator;
  readonly whyUsHeader: Locator;
  readonly getHelpHeader: Locator;
  readonly bannerButton: Locator;
  readonly disclaimerButton: Locator;
  readonly disclaimerText: Locator;
  readonly footer: Locator;
  readonly footerCtaButton: Locator;
  readonly footerLogo: Locator;
  readonly facebookButton: Locator;
  readonly twitterButton: Locator;
  readonly igButton: Locator;
  readonly linkedinButton: Locator;
  readonly tiktokButton: Locator;
  readonly searchContent: Locator;
  readonly closeSearchButton: Locator;


  constructor(page: Page) {
    this.page = page;
    // Header
    this.loginButton = page.locator('[automationidsuffix="nav-login-link"]');
    this.searchbarButton = page.locator('[pw-automation-id="pw-nav-search-button"]');
    this.searchbarField = page.locator('input[sp-automation-id="input-searchQuery"]');
    this.logo = page.locator('[pw-automation-id="pw-header-logo-return-to-homepage"]');
    // Header Menu
    this.everydayMoneyHeader = page.locator('[pw-automation-id="pw-nav-header-link-1"]');
    this.everdayBanking = page.locator('[pw-automation-id="pw-nav-header-link-1-column-1-link"]');
    this.everydayTransaction = page.locator('[pw-automation-id="pw-nav-header-link-1-column-2-link-1"]');
    this.everydayBills = page.locator('[pw-automation-id="pw-nav-header-link-1-column-2-link-2"]');
    this.everydaySavings = page.locator('[pw-automation-id="pw-nav-header-link-1-column-2-link-3"]');
    this.everydaySharedAccount = page.locator('[pw-automation-id="pw-nav-header-link-1-column-2-link-4"]');
    this.homeloansHeader = page.locator('[pw-automation-id="pw-nav-header-link-2"]');
    this.ourAppHeader = page.locator('[pw-automation-id="pw-nav-header-link-3"]');
    this.whyUsHeader = page.locator('[pw-automation-id="pw-nav-header-link-4"]');
    this.getHelpHeader = page.locator('[pw-automation-id="pw-nav-header-link-5"]');
    // Banner
    this.bannerButton = page.locator('[sp-automation-id="fe-block-link-button-pw-banner-button"]');
    this.disclaimerButton = page.locator('[pw-automation-id="pw-accordion-item-header-button"]');
    this.disclaimerText = page.locator('[webintersectionobserver]');
    // Footer
    this.footer = page.locator('[pw-automation-id="pw-footer-cta-reusable"]');
    this.footerCtaButton = page.locator('pw-footer-cta [automationidsuffix="button-group-non-text"]');
    this.footerLogo = page.locator('[pw-automation-id="pw-footer-logo-return-to-homepage"]');
    this.facebookButton = page.locator('[pw-automation-id="pw-footer-social-item-0"]');
    this.twitterButton = page.locator('[pw-automation-id="pw-footer-social-item-1"]');
    this.igButton = page.locator('[pw-automation-id="pw-footer-social-item-2"]');
    this.linkedinButton = page.locator('[pw-automation-id="pw-footer-social-item-3"]');
    this.tiktokButton = page.locator('[pw-automation-id="pw-footer-social-item-4"]');
    // Search
    this.searchContent = page.locator('[pw-automation-id="pw-search-overlay-list-options"]');
    this.closeSearchButton = page.locator('#pw-search-overlay-close-btn');
  }

  async searchText(search: any) {
    await this.searchbarField.fill(search);
  }
}