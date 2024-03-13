import { Locator, Page, expect } from '@playwright/test';

export class LoginLocators {
  readonly page: Page;
  readonly usernameField: Locator;
  readonly signUpLink: Locator;
  readonly nextButton: Locator;
  readonly loginError: Locator;
  readonly infoboxError: Locator;
  readonly passwordField: Locator;
  readonly showPassword: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('input[sp-automation-id="input-username"]');
    this.signUpLink = page.locator('[sp-automation-id="login-username-page-join-link"]');
    this.nextButton = page.locator('[sp-automation-id="sp-form-submit-button"]');
    this.loginError = page.locator('sp-error-message')
    this.infoboxError = page.locator('[sp-automation-id="info-box-message"]')
    // Password
    this.passwordField = page.locator('input[sp-automation-id="input-password"]');
    this.showPassword = page.locator('[sp-automation-id="toggle-unmask-password"]');
    this.loginButton = page.locator('[sp-automation-id="sp-form-submit-button"]');
  }

  async clickNextButton(){
    await this.nextButton.click();
  }

  async inputUsername(username: any){
    await this.usernameField.fill(username);
  }

}