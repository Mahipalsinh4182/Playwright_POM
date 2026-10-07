const { expect } = require('@playwright/test');

class LoginPage{
    /** @param {import('@playwright/test').Page} page */
    constructor(page)
    { 
        this.page = page;
        this.usernameInput = page.locator("//input[@id='user-name']");
        this.passwordInput = page.locator("//input[@id='password']");
        this.loginBtn = page.locator("//input[@id='login-button']");
        this.errormsg = page.locator("//h3[contains(text(),'Epic sadface: Sorry, this user has been locked out')]");
     }
    //navigate method to open url 
    async navigate()
    {   
        this.page.goto("https://www.saucedemo.com/");
    }

    //Login method passing 2 parameters in func to fill the locators
    async loginsaucedemo(username,userpassword)
    {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(userpassword);
        await this.loginBtn.click();
    }
    async verifylockedoutErrormessage()
    {
        await expect(this.errormsg).toContainText("Epic sadface: Sorry, this user has been locked out.");
    }
}
 //exporting this page of class so other page can import this methods.
module.exports = {LoginPage};