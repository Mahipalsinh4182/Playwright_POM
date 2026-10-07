const{test,expect} = require("@playwright/test");
const testData = require('../data/user.json');
//importing Login page form page folder
//const {Loginpage} = require("../pages/LoginPage");
import { LoginPage } from "../pages/LoginPage";

/*test('Handling login page in saucedemo',async({page})=>{
    const loginpage = new LoginPage(page);
    await loginpage.navigate();
    await loginpage.loginsaucedemo("standard_user","secret_sauce");
    await page.close();
})*/
testData.forEach((user)=>{
    test(`Data Driven Testing${user.username}`,async({page})=>{
        const loginpage = new LoginPage(page);
        await loginpage.navigate();
        await loginpage.loginsaucedemo(user.username,'secret_sauce');

        if(user.type === 'valid'){
            await page.waitForURL('**/inventory.html');
        }else if(user.type === 'locked'){
            await loginpage.verifylockedoutErrormessage();
        }
    })
})
