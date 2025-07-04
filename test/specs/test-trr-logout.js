import CurrencyScreen from '../objects/CurrencyScreen.js';
import WalkthroughPrompts from '../objects/WalkthoughPrompts.js';
import LogOutOptions from '../objects/LogOutOptions.js';

describe('Log Out of My TRR', () => {  
    it('should tap My TRR button', async () => {
      const button = await $('~My TRR');
      await button.waitForDisplayed();
      button.click();
    });

    it('should tap sign in', async () => {
      const button = await $('~SIGN IN');
      await button.waitForDisplayed();
      button.click();
    });

    it('should enter email address', async () => {
      const textField = await $('~email_field');
      textField.setValue('auto+1@therealreal.com');
    });

    it('should enter password', async () => {
      const textField = await $('~password_field');
      textField.setValue('therealdeal1');
    });

    it('should tap sign in', async () => {
      const button = await $('~SIGN IN');
      await button.waitForDisplayed();
      button.click();
    });

    it('should react to currency check if present', async () => {
      try {
        await CurrencyScreen.shopInUsd.waitForDisplayed({ timeout: 8000 });
        await CurrencyScreen.updateCurrency.click();
      } catch (error) {
        console.warn('Currency prompt not shown or interaction failed:', error.message);
      }
    });  

    it('should tap next if present', async () => {
        try {
            await WalkthroughPrompts.referralNext.waitForDisplayed({ timeout: 8000 });
            await WalkthroughPrompts.referralNext.click();
          } catch (error) {
            console.warn('The next button did not appear:', error.message);
          }
    });

    it('should tap got it', async () => {
        try {
            await WalkthroughPrompts.referralGotIt.waitForDisplayed({ timeout: 8000 });
            await WalkthroughPrompts.referralGotIt.click();
          } catch (error) {
            console.warn('The got it button did not appear:', error.message);
          }
    });

    it('should tap My TRR button', async () => {
      const button = await $('~My TRR');
      await button.waitForDisplayed();
      button.click();
    });

    it('should tap got it', async () => {
        try {
            await WalkthroughPrompts.gotIt.waitForDisplayed({ timeout: 8000 });
            await WalkthroughPrompts.gotIt.click();
          } catch (error) {
            console.warn('The got it button did not appear:', error.message);
          }
    });

    it('should tap Settings', async () => {
      const settings = await $('~Settings');
      await settings.click();
    });

    it('should scroll down to log out', async () => {
      await driver.execute('mobile: scroll', { 
        direction: 'down', 
        predicateString: 'name == "Log Out"' 
      });

      //await driver.touchAction([
      //  { action: 'press', x: 10, y: 461 },
      //  { action: 'wait', ms: 200 },
      //  { action: 'moveTo', x: 10, y: 182 },
      //  { action: 'release' }
      //]);

      try {
        await LogOutOptions.logOutByLabel.waitForDisplayed({ timeout: 8000 }).click();
        await LogOutOptions.logOutByXpath.waitForDisplayed({ timeout: 8000 }).click();
      } catch (error) {
        console.warn('The got it button did not appear:', error.message);
      }
    
    });    
  });