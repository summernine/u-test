import { test as base} from '@playwright/test';
import { HomepageLocators } from '../pageObjects/homepage';
import { LoginLocators } from '../pageObjects/loginpage';

type MyFixtures = {
  homepageLocators: HomepageLocators;
  loginLocators: LoginLocators;
};

export const test = base.extend<MyFixtures>({
  homepageLocators: async ({page}, use) => {
    const homepageLocators = new HomepageLocators(page);
    await use(homepageLocators);
  },
  loginLocators: async ({page}, use) => {
    const loginLocators = new LoginLocators(page);
    await use(loginLocators);
  }
})
